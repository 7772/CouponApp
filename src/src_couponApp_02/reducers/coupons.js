import * as actions from '../actions/types';
import Coupon from './../data/Coupon';
import { writeCoupons } from './../storage/coupons';

import _ from 'lodash';

function saveCoupons(state) {
  writeCoupons(state);
  return state;
}

const reducer = (state = [], action) => {
  switch (action.type) {

    case actions.LOAD_DATA:
      return action.data;

    case actions.ADD_COUPON:
      let newState = state.concat(action.data);
      saveCoupons(newState);
      return newState;

    // MyCoupon 액션, 적용 위치는 다운받기 버튼일 것. 액션 추가하는 방법 알아볼 것
    case actions.MYCOUPON:
      let index = _.findIndex(state, (key) => key.id === action.id );
      if(index === -1) {
        return state;
      }
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          completed: true
        }),
        ...state.slice(index + 1)
      ];
      
  }
  return state;

};


export default reducer;

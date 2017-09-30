import { ADD_COUPON, LOAD_DATA } from '../actions/types';
import Coupon from './../data/Coupon';
import { writeCoupons } from './../storage/coupons';

function saveCoupons(state) {
  writeCoupons(state);
  return state;
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.data;
    case ADD_COUPON:
      let newState = state.concat(action.data);
      saveCoupons(newState);
      return newState;
  }
  return state;
};


export default reducer;

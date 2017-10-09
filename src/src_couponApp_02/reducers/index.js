'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux';
import Immutable from 'immutable';

import logger from 'redux-logger';

import { TabBar, tabBarReducer } from './../components/tabBar/navigationConfiguration';
import { NavigatorMyCouponReducer } from './../components/MyCoupon/navigationConfiguration';
import { NavigatorCouponListReducer } from './../components/CouponList/navigationConfiguration';
import { NavigatorMyPageReducer } from './../components/MyPage/navigationConfiguration';

import { MockCoupons } from './../data/Mocks';

import CouponsReducer from './coupons';
import ReviewReducer, { mkReviewState } from './reviews';

// 09.22 추가, 새로 고침시 데이터 유지
import { compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native';

// Middleware
const middleware = () => {
  return applyMiddleware(logger)
}

export const store = createStore(
  combineReducers({

    coupons: CouponsReducer,

    tabBar: tabBarReducer,

    MyCoupon: NavigatorMyCouponReducer,

    CouponList: NavigatorCouponListReducer,

    MyPage: NavigatorMyPageReducer,
  }),
  undefined,
  compose(
    middleware(),
    // autoRehydrate 가 data 를 유지시킴.
    autoRehydrate()
  )
);
// persistStore 사용. 새로고침 시 데이터를 유지해준다. 
// https://github.com/rt2zz/redux-persist
// 2017. 10. 02 박현도
persistStore(store, {storage: AsyncStorage});

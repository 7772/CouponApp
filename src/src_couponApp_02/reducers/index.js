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

// 09.22 추가
import { compose } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
//
//
// Middleware
const middleware = () => {
  return applyMiddleware(logger)
}

export default createStore(
  combineReducers({

    coupons: CouponsReducer,

    tabBar: tabBarReducer,

    MyCoupon: NavigatorMyCouponReducer,

    CouponList: NavigatorCouponListReducer,

    MyPage: NavigatorMyPageReducer,
  }),
  middleware(),
)

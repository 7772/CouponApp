'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

// Navigation
import { NavigatorMyCoupon } from './MyCoupon/navigationConfiguration'
import { NavigatorCouponList } from './CouponList/navigationConfiguration'
import { NavigatorMyPage } from './MyPage/navigationConfiguration'

import { TabBar, tabBarReducer } from './tabBar/navigationConfiguration'
import { NavigatorMyCouponReducer } from './MyCoupon/navigationConfiguration'
import { NavigatorCouponListReducer } from './CouponList/navigationConfiguration'
import { NavigatorMyPageReducer } from './MyPage/navigationConfiguration'

// Middleware
const middleware = () => {
  return applyMiddleware(logger)
}

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,

    MyCoupon: NavigatorMyCouponReducer,

    CouponList: NavigatorCouponListReducer,

    MyPage: NavigatorMyPageReducer,
  }),
  middleware(),
)

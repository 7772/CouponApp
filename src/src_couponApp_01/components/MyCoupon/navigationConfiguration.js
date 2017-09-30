'use strict'
import { StackNavigator } from 'react-navigation'
// Screens
import MyCouponListScreen from './views/MyCouponListScreen'
import AfterDownloadCouponScreen from './views/AfterDownloadCouponScreen'

const routeConfiguration = {
  MyCouponListScreen: { screen: MyCouponListScreen },
  AfterDownloadCouponScreen: { screen: AfterDownloadCouponScreen },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'MyCouponListScreen'
}

export const NavigatorMyCoupon = StackNavigator(routeConfiguration,stackNavigatorConfiguration)

export const NavigatorMyCouponReducer = (state, action) => {
  return NavigatorMyCoupon.router.getStateForAction(action,state)
}


// tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),

// export const tabBarReducer = (state,action) => {
//   if (action.type === 'JUMP_TO_TAB') {
//     return { ...state, index:0 }
//   } else {
//     return TabBar.router.getStateForAction(action,state)
//   }
// }

// export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)
//
// export const tabBarReducer = (state,action) => {
//   if (action.type === 'JUMP_TO_TAB') {
//     return { ...state, index:0 }
//   } else {
//     return TabBar.router.getStateForAction(action,state)
//   }
// }

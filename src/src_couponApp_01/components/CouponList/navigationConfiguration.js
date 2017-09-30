'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import CouponListScreen from './views/CouponListScreen'
import BeforeDownloadScreen from './views/BeforeDownloadScreen'

const routeConfiguration = {
  CouponListScreen: { screen: CouponListScreen },
  BeforeDownloadScreen: { screen: BeforeDownloadScreen },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'CouponListScreen'
}
export const NavigatorCouponList = StackNavigator(routeConfiguration,stackNavigatorConfiguration)


export const NavigatorCouponListReducer = (state, action) => {
  return NavigatorCouponList.router.getStateForAction(action,state)
}

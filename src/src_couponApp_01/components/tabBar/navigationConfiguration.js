'use strict'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import MyCouponTabNavigation from '../MyCoupon/views/MyCouponTabNavigation'
import CouponListTabNavigation from '../CouponList/views/CouponListTabNavigation'
import MyPageTabNavigation from '../MyPage/views/MyPageTabNavigation'


const routeConfiguration = {
  MyCouponTabNavigation: { screen: MyCouponTabNavigation },
  CouponListTabNavigation: { screen: CouponListTabNavigation },
  MyPageTabNavigation: { screen: MyPageTabNavigation },
}

const tabBarConfiguration = {
  //...other configs
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
// background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:1 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}

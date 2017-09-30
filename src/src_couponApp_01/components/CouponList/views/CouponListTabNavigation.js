'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorCouponList } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
 return {
  navigationState: state.CouponList
  }
}

class CouponListTabNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Coupon List',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'heart' } color={ tintColor }/>
  }

  render(){
    const { dispatch, navigationState} = this.props
    return (
      <NavigatorCouponList
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }

}

export default connect(mapStateToProps)(CouponListTabNavigation)

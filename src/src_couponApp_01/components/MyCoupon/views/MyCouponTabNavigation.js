'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorMyCoupon } from '../navigationConfiguration'

// Redux
import { connect } from 'react-redux'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'


const mapStateToProps = (state) => {
 return {
  navigationState: state.MyCoupon
  }
}

class MyCouponTabNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'My Coupon',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'download' } color={ tintColor }/>
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorMyCoupon
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
export default connect(mapStateToProps)(MyCouponTabNavigation)

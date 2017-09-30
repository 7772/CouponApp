'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorMyPage } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'
// Icon
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = (state) => {
  return {
   navigationState: state.MyPage
  }
}

class MyPageTabNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'My Page',
    tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'user-o' } color={ tintColor }/>
  }

  render(){
    const { dispatch, navigationState} = this.props
    return (
      <NavigatorMyPage
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
        })}
      />
    )
  }
}

export default connect(mapStateToProps)(MyPageTabNavigation)

'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class AfterDownloadCouponScreen extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'After Download CouponScreen' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'Go back a screen this tab'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AfterDownloadCouponScreen;

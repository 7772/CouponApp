'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class CouponListScreen extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        //backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'CouponListScreen' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('BeforeDownloadScreen') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'blue',
            marginTop:20
          }}>
          <Text>{'Go to next screen this tab'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export default CouponListScreen;

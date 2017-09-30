'use strict'

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { StyleSheet, Image } from "react-native";

import Button from "./../../Button";
import NormalText from "./../../NormalText";
import colors from "./../../../styles/colors";

import Picture from './../../Picture';

class BeforeDownloadScreen extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'BeforeDownloadScreen' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'purple',
            marginTop:20
          }}>
          <Text>{'Go back a screen this tab'}</Text>
        </TouchableOpacity>

        <NormalText>
          {this.props.coupon.name}{' '}
          {this.props.coupon.number}{' '}
        </NormalText>

      </View>
    )
  }
}

export default BeforeDownloadScreen;

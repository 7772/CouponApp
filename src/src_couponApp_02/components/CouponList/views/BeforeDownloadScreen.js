'use strict'

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { StyleSheet, Image } from "react-native";

import Button from "./../../Button";
import NormalText from "./../../NormalText";
import colors from "./../../../styles/colors";

import Picture from './../../Picture';

import { NavigationActions } from 'react-navigation'

class BeforeDownloadScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coupon: this.props.navigation.state.params.coupon
    }
  }

  _testFunc = () => {
    console.log(this.props.navigation.state.params.coupon);
    console.log(this.props.navigation.state.key);
    console.log('state : ' + this.state);
  }

  _downCoupon = () => {
    console.log('다운로드 버튼을 클릭하였다. 내쿠폰함으로 이동, 그리고 개수 차감 구현!');

    //const coupon = this.props.navigation.state.params.coupon

    const setParamsAction = NavigationActions.setParams({
      params: { coupon: this.state.coupon },
      type: 'JUMP_TO_TAB',
      payload: {index:0},
      key: 'Init-id-1507026151695-6'
    })
    
    // this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0}, coupon:{coupon} })
    this.props.navigation.dispatch(setParamsAction)

    // 다운완료를 알리는 alert 버튼.
  }

  render() {

    const coupon = this.props.navigation.state.params.coupon

    return(

      <View style={styles.container}>
        <Button onPress={() => this._testFunc()}>
          <NormalText>{coupon.name}</NormalText>
          <NormalText>{coupon.number}</NormalText>
        </Button>

        <Button
          onPress={ () => this._downCoupon() }
        >
          <NormalText>다운받기</NormalText>
        </Button>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  couponListBox: {
    marginTop: 30
  },
  createCoupon: {
    backgroundColor: colors.green,
    marginTop: 30
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: 24
  },
  list: { flex: 1, flexDirection: "row" },
  listContent: { flex: 1, flexDirection: "column" },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: "#DDDDDD"
  },
  sectionDivider: {
    padding: 8,
    backgroundColor: "#EEEEEE",
    alignItems: "center"
  },
  headingText: { flex: 1, fontSize: 24, alignSelf: "center" }
});


export default BeforeDownloadScreen;

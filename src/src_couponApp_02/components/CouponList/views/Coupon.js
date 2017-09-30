import React, { Component } from 'react';
import { StyleSheet, View, Image } from "react-native";

import Button from "./../../Button";
import NormalText from "./../../NormalText";
import colors from "./../../../styles/colors";

import Picture from './../../Picture';


class Coupon extends Component {
  static displayName = 'Coupon';

  _review = () => {
    console.log('나중에 생성된 쿠폰의 세부정보 화면으로 이동하는 코드가 들어가야함.');

    this.props.navigation.navigate('BeforeDownloadScreen');
    // 스택네비게이션에 등록된 페이지이어야만 이동 가능.
    // 위 사항을 충족하고, prop 으로 navigation 을 보내줘야 이동 가능.
    // CouponListScreen.js 에서 Coupon component 에서 보내는 prop 을 확인할 것.
    //this.props.navigation.navigate('BeforeDownloadScreen')
  }




  render() {

    return (
      <View style={styles.couponGroup}>
        <View>
          <View style={styles.pictureBox} >
            <Picture
              source={this.props.coupon.photoSource} />
          </View>
        </View>

        <View style={styles.couponButton}>
          <Button
            onPress={this._review}
            >
            <NormalText>
              {this.props.coupon.name}{'    '}
              {this.props.coupon.number}

            </NormalText>
          </Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  couponGroup: {
    flexDirection: "row",
    alignItems: "stretch",
    padding: 5,
    marginBottom: 5
  },
  pictureBox: {
    width: 85,
    height: 85,
  },
  couponButton: {
    backgroundColor: colors.pink,
    padding: 5,
    margin: 0,
    flex: 1
  }
});

export default Coupon;

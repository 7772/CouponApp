'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Button from "./../../Button";
import NormalText from "./../../NormalText";
import colors from "./../../../styles/colors";

import { connect } from 'react-redux';

import WidePicture from './../../WidePicture';
class AfterDownloadCouponScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photoSource : this.props.navigation.state.params.myCoupon.photoSource
    };
  }

  _review = myCoupon => {
    console.log('landon, photosource ', this.state.photoSource);
    console.log('landon, myCoupon ', myCoupon);
  };

  /**
   * Things To do.
   * 1. AfterDownloadCoupon, BeforeDownloadCoupon 스크린에 들어갈 picture 컴포넌트 제작 (보다 넓은 view 로 보이도록)
   * 2. BeforeDownloadCoupon / 쿠폰다운로드 버튼생성
   * 3. 권한.. --> 사업자 로그인 관련 이슈 확실히 해결
   */

  render() {

    const myCoupon = this.props.navigation.state.params.myCoupon

    return(
      <View style={styles.couponListBox}>
        <WidePicture
           source={this.state.photoSource}
           onEntry={this.props.onEntry} 
        />
        <Button
          onPress={this._review(myCoupon)}
        >
          <NormalText>{myCoupon.name}</NormalText>
          <NormalText>{myCoupon.number}</NormalText>
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

const mapStateToProps = state => {
  return {
    myCoupons: state.myCoupons
  };
}

// export default BeforeDownloadScreen;
export default connect(mapStateToProps, null)(AfterDownloadCouponScreen);

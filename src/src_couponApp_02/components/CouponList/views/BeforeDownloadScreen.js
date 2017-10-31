'use strict'

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { StyleSheet, Image } from "react-native";

import Button from "./../../Button";
import NormalText from "./../../NormalText";
import colors from "./../../../styles/colors";

import Picture from './../../Picture';

import { NavigationActions } from 'react-navigation'

import { connect } from 'react-redux';

import { addMyCoupon } from './../../../actions/creators';
import Coupon from './Coupon';
import { reviewCoupon } from './../../../actions/creators';

class BeforeDownloadScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coupon: null
    }
  }

  _downCoupon = couponID => {
    console.log('다운로드 버튼을 클릭하였다. 내쿠폰함으로 이동, 그리고 개수 차감 구현!');

    //const coupon = this.props.navigation.state.params.coupon

    console.log(couponID);

    this.state.coupon = couponID

    console.log('coupon after setState');
    console.log(this.state.coupon);

    const setParamsAction = NavigationActions.setParams({
      params: { coupon: this.state.coupon },
      type: 'JUMP_TO_TAB',
      payload: {index:0},
      // key: 'Init-id-1508454292924-6'
      // routeName: "MyCouponListScreen"
    })

    _review = coupon => {
      let createMyCouponAction = addMyCoupon(coupon.name, coupon.number, coupon.photoSource)
      this.props.createMyCoupon(createMyCouponAction)
      // this.props.reviewCoupon(coupon)
      // this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0}, coupon:{coupon} })
    }
    
    // this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0}, coupon:{coupon} })
    // this.props.navigation.dispatch(setParamsAction)
    // this.props.renderCoupon(setParamsAction)

    // 다운완료를 알리는 alert 버튼.
  }

  render() {

    const coupon = this.props.navigation.state.params.coupon

    return(

      <View style={styles.container}>
  
        {/* 여기서 쿠폰 컴포넌트 하나를 새로 파야함. */}
        <Coupon
          coupon={coupon}
          key={coupon.id}
          navigation={this.props.navigation}
        />

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

const mapDispatchToProps = dispatch => {
  return {
    createMyCoupon: MyCouponAction => {
      dispatch(MyCouponAction)
    },
    // reviewCoupon: couponID => {
    //   dispatch(reviewCoupon(couponID));
    // }
  }
}

const mapStateToProps = state => {
  return {
    coupons: state.coupons
  };
}

// export default BeforeDownloadScreen;
export default connect(mapStateToProps, mapDispatchToProps)(BeforeDownloadScreen);

//export default connect(null, mapDispatchToProps)(BeforeDownloadScreen)

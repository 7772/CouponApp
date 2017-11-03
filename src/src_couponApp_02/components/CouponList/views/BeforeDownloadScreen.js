'use strict'

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { StyleSheet, Image } from "react-native";

import Button from "./../../Button";
import NormalText from "./../../NormalText";
import colors from "./../../../styles/colors";

import WidePicture from './../../WidePicture';

import { NavigationActions } from 'react-navigation'

import { connect } from 'react-redux';

import { addMyCoupon } from './../../../actions/creators';
import Coupon from './Coupon';
import { reviewCoupon } from './../../../actions/creators';

class BeforeDownloadScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coupon: this.props.navigation.state.params.coupon
    }
  }

  // _review = coupon => {
  //   let createMyCouponAction = addMyCoupon(coupon.name, coupon.number, coupon.photoSource)
  //   this.props.createMyCoupon(createMyCouponAction)
  //   // this.props.reviewCoupon(coupon)
  //   // this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0}, coupon:{coupon} })
  // }
  
  // this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0}, coupon:{coupon} })
  // this.props.navigation.dispatch(setParamsAction)
  // this.props.renderCoupon(setParamsAction)

  // 다운완료를 알리는 alert 버튼.


  // 여기서 .navigate 에 coupon 객체를 함께 보내줘야 함.
  _review = () => {
    const coupon = this.state.coupon;
    let createMyCouponAction = addMyCoupon(coupon.name, coupon.number, coupon.photoSource)
    this.props.createMyCoupon(createMyCouponAction);

    // // this.props.navigation.navigate("BeforeDownloadScreen", {coupon: coupon});
    this.props.navigation.dispatch({type:'JUMP_TO_TAB', payload:{index:0}});
    // let moveObject = {
    //   type: 'JUMP_TO_TAB',
    //   payload: {index:0}
    // };
    // this.props.moveTab(moveObject);
    // console.log('landon, here coupon ', this.state.coupon);
  };

  render() {  

    // const coupon = this.props.navigation.state.params.coupon

    return (

      <View style={styles.couponListBox}>
        <WidePicture
          source={this.state.coupon.photoSource}
          onEntry={this.props.onEntry} 
        />
        <TouchableOpacity
          onPress={this._review}
        >
          <NormalText>{this.state.coupon.name}</NormalText>
          <NormalText>{this.state.coupon.number}</NormalText>
        </TouchableOpacity>
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

// const mapStateToProps = state => {
//   return {
//     coupons: state.coupons
//   };
// }

// export default BeforeDownloadScreen;
export default connect(null, mapDispatchToProps)(BeforeDownloadScreen);

//export default connect(null, mapDispatchToProps)(BeforeDownloadScreen)


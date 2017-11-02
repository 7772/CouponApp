'use strict'
import React, { Component } from "react";
import { View, StyleSheet, Modal, TouchableHighlight, Text, ListView, TouchableOpacity } from "react-native";

import { connect } from 'react-redux';

import MyCoupon from './MyCoupon';

import Button from "./../../Button";
import NormalText from "./../../NormalText";
import colors from "./../../../styles/colors";
import Input from "./../../Input";
import LabeledInput from './../../LabeledInput';

import AfterDownloadCouponScreen from './AfterDownloadCouponScreen';

class MyCouponListScreen extends React.Component {

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  // 여기서 .navigate 에 coupon 객체를 함께 보내줘야 함.
  // 누르면 바코드가 나올 다운로드 쿠폰 스크린으로~
  _review = myCoupon => {
    // this.props.reviewCoupon(coupon);
    this.props.navigation.navigate("AfterDownloadCouponScreen", {myCoupon: myCoupon});
  };

  render(){

    // var tmpCouponTest = this.props.coupons;

    var dataSource = this.dataSource.cloneWithRows(this.props.myCoupons);

    return(
      <View>

        <ListView
          dataSource={dataSource}
          renderRow={(rowData, sectionID, rowID) =>
              <MyCoupon
                myCoupon={rowData}
                key={rowData.id}
                review={() => {
                  this._review(rowData)
                }}
                navigation={this.props.navigation}
              />
          }
          enableEmptySections={true}
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
    reviewCoupon: couponID => {
      dispatch(reviewCoupon(couponID));
    }
  }
}

const mapStateToProps = state => {
  return {
    myCoupons: state.myCoupons
  };
} 

export default connect(mapStateToProps, mapDispatchToProps)(MyCouponListScreen);

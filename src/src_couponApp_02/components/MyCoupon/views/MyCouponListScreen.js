'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ListView } from 'react-native'

import Button from "./../../Button"
import NormalText from "./../../NormalText"
import colors from "./../../../styles/colors"

import Coupon from '../../CouponList/views/Coupon'
import { reviewCoupon } from './../../../actions/creators';

import AfterDownloadCouponScreen from './AfterDownloadCouponScreen'

class MyCouponListScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coupon: '',
    }
  }

  // componentWillMount() {
  //   this.dataSource = new ListView.DataSource({
  //       rowHasChanged: (row1, row2) => row1 !== row2
  //   });
  // }

  // _review = coupon => {
  //   this.props.reviewCoupon(coupon);
  //   this.props.navigation.navigate("BeforeDownloadScreen", {coupon: coupon});
  // };

  handleChange = coupon => {
    this.setState = {
      coupon: coupon
    }
  }

  _checkProps = () => {
    this.setState = {
      coupon: this.props.navigation.state.params.coupon
    }

    console.log(this.setState.coupon);

    // this.props.navigation.navigate("AfterDownloadCouponScreen", {coupon: this.setState.coupon});
  }

  render(){

    const coupon = this.props.navigation.state.params.coupon;

    return(

      <View style={styles.container}>
      

        <NormalText>내가 받은 쿠폰 리스트 들어갈 자리~</NormalText>
        <Button 
          onPress={ () => this.props.navigation.navigate('AfterDownloadCouponScreen') 
        }>
          <NormalText>AfterDownloadCouponScreen</NormalText>
        </Button>

        <Button 
          onChange={ () => this.handleChange(coupon) }
          onPress={ () => this._checkProps()
        }>
          <NormalText>click me</NormalText>
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

export default MyCouponListScreen;

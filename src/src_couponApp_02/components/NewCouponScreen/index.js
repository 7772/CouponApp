import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { connect } from 'react-redux';

import { addCoupon } from './../../actions/creators';
import CouponCreation from './CouponCreation';

class NewCoupon extends React.Component {
  static displayName = "CouponScreen";

  _createCoupon = (name, number, photoSource) => {
    // console.log('name in newCoupon index :: ' + name);
    // console.log('number in newCoupon index :: ' + number);
    // console.log('photoSource in newCoupon index :: ' + photoSource);
    let createCouponAction = addCoupon(name, number, photoSource);
    this.props.createCoupon(createCouponAction);
  }

  _offModal = () => {
    this.props.offModal(this.props.modalVisible);
  }

  render() {
    return (
      <View style={styles.couponCreationBox}>
        <View>
          <CouponCreation
            create={this._createCoupon}
            offModal={this._offModal} 
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  couponCreationBox: {
    marginTop: 30
  }
});

const mapDispatchToProps = dispatch => {
  return {
    createCoupon: couponAction => {
      dispatch(couponAction);
    }
  };
};

export default connect(null, mapDispatchToProps)(NewCoupon);

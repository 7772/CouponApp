import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { CreateCouponButton, EnterCoupon } from "./CouponCreationFields";


class CouponCreation extends Component {
  constructor(props) {
    super(props);
    this.state = { showingNameField: false };
  }

  _newCoupon = (name, number, photoSource) => {
    this.setState({ showingNameField: false });
    // console.log('name in CouponCreation :: ' + name);
    // console.log('number in CouponCreation :: ' + number);
    this.props.create(name, number, photoSource);
  };

  _offModal = () => {
    this.props.offModal(this.props.modalVisible);
  }

  render() {
    let contents = <EnterCoupon 
                      create={this._newCoupon} 
                      offModal={this._offModal}
                    />
    return contents;
  }
}

export default CouponCreation;


// let contents = this.state.showingNameField
//   ? <EnterCoupon create={this._newCoupon} />
//   : <CreateCouponButton create={this._showField} />;

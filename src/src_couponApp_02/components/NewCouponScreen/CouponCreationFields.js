import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./../Button";
import NormalText from "./../NormalText";
import Input from "./../Input";

import colors from "./../../styles/colors";
import LabeledInput from './../LabeledInput';
import PickPicture from './PickPicture';

class CreateCouponButton extends React.Component {
  render() {
    return  (
      <Button style={styles.createCoupon} onPress={this.props.onPress}>
        <NormalText>Create Coupon</NormalText>
      </Button>
    );
  }
}

class EnterCoupon extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', number: '', photoSource: '' };
  }

  _handleName = text => {
    this.setState({ name: text });
  }

  _handleNumber = text => {
    this.setState({ number: text });
  }

  _handlePhotoSource = source => {
    this.setState({ photoSource: source});
    // 2. 여기서 this.setState({ photoSource: '이미지 주소' }); 를 해봐서 사진이 잘 나오는지 확인해볼 것.
  }

  // 1. 여기서 photosource 안찍히니까, 로컬로 연결해서 테스트 하던지, 아니면 pick 이미지를 다양화 시키는 법 확인.

  _create = () => {
    // console.log('name :: ' + this.state.name);
    // console.log('number :: ' + this.state.number);
    // console.log(this.state.photoSource);
    this.props.create(this.state.name, this.state.number, this.state.photoSource);
    this.props.offModal(false);
  };

  render() {
    return (
      <View>
        <PickPicture
          onEntry={this._handlePhotoSource} />

        <LabeledInput
          label="Name"
          clearOnSubmit={false}
          onEntry={this._handleName}
          onChange={this._handleName}
        />
        <LabeledInput
          label="Number"
          clearOnSubmit={false}
          onEntry={this._handleNumber}
          onChange={this._handleNumber}
        />
        <CreateCouponButton
          onPress={this._create}
          offModal={this._offModal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  createCoupon: { backgroundColor: colors.green }
});

export { CreateCouponButton, EnterCoupon };

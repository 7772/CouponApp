import React, { Component } from 'react';
import { StyleSheet, View, Image } from "react-native";

import Button from "./../../Button";
import NormalText from "./../../NormalText";
import colors from "./../../../styles/colors";

import Picture from './../../Picture';


class Coupon extends Component {
  static displayName = 'Coupon';

  _review = () => {
    this.props.review();
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

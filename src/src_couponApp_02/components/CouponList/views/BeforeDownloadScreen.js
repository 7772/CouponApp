'use strict'

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { StyleSheet, Image } from "react-native";

import Button from "./../../Button";
import NormalText from "./../../NormalText";
import colors from "./../../../styles/colors";

import Picture from './../../Picture';

class BeforeDownloadScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  // _contents() {

  //   return (
  //     <ViewCard
  //       onReview={this.onReview}
  //       continue={this._nextReview}
  //       quit={this._quitReviewing}
  //       {...this.props.reviews[this.props.currentReview]}
  //     />
  //   );

  // }

  _click = () => {
    console.log(this.props.navigation.state.params.coupon);
    console.log(this.props.navigation.state.key);
    console.log('state : ' + this.state);
  }

  render() {

    return(

      <View style={styles.container}>
        <Button onPress={() => this._click()}>
          <NormalText>{this.props.navigation.state.params.coupon.name}</NormalText>
          <NormalText>{this.props.navigation.state.params.coupon.number}</NormalText>
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


export default BeforeDownloadScreen;

'use strict'
import React, { Component } from "react";
import { View, StyleSheet, Modal, TouchableHighlight, Text, ListView, TouchableOpacity } from "react-native";

import { connect } from 'react-redux';

import Coupon from './Coupon';
import NewCouponScreen from './../../NewCouponScreen';

import { reviewCoupon } from './../../../actions/creators';

import colors from "./../../../styles/colors";

import NormalText from './../../NormalText';
import Button from "./../../Button";
import Input from "./../../Input";
import LabeledInput from './../../LabeledInput';

class CouponListScreen extends React.Component {

  componentWillMount() {
      this.dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
      });
  }

  // Modal
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onModal = () => {
    this.setModalVisible(true);
  };

  _offModal = () => {
    this.setModalVisible(!this.state.modalVisible);
  };

  // 여기서 .navigate 에 coupon 객체를 함께 보내줘야 함.
  _review = coupon => {
    //this.props.reviewCoupon(coupon);
    this.props.navigation.navigate("BeforeDownloadScreen", {coupon: coupon});
  };

  render() {

    var dataSource = this.dataSource.cloneWithRows(this.props.coupons);

    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >

          <NewCouponScreen
            offModal={this._offModal} />

        </Modal>

        <View>
          <Button style={styles.createCoupon} onPress={this._onModal} >
            <NormalText>Create Coupon</NormalText>
          </Button>
        </View>

        <ListView
          dataSource={dataSource}
          renderRow={(rowData, sectionID, rowID) =>
              <Coupon
                coupon={rowData}
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
    );
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
    coupons: state.coupons
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CouponListScreen);

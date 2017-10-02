'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Button from "./../../Button";
import NormalText from "./../../NormalText";
import colors from "./../../../styles/colors";

class MyCouponListScreen extends React.Component {
  render(){
    return(

      <View style={styles.container}>
        <NormalText>내가 받은 쿠폰 리스트 들어갈 자리~</NormalText>
        <Button 
          onPress={ () => this.props.navigation.navigate('AfterDownloadCouponScreen') 
        }>
          <NormalText>각 쿠폰리스트를 클릭하면 하나의 쿠폰정보를 보여주기.</NormalText>
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

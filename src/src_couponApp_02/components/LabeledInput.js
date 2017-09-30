import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";

import Input from "./Input";
import NormalText from "./NormalText";

// this.props.label 이 Front: Back: 을 담고 있음.
class LabeledInput extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <NormalText style={styles.label}>
          {this.props.label} :
        </NormalText>
        <Input
          onEntry={this.props.onEntry}
          onChange={this.props.onChange}
          clearOnSubmit={this.props.clearOnSubmit}
          style={this.props.inputStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: { paddingLeft: 10 },
  wrapper: { padding: 5 }
});

export default LabeledInput;

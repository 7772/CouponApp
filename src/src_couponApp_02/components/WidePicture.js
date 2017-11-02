import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';

class WidePicture extends Component {
  render() {
    return (
      <Image
        style={{alignSelf: 'stretch', height: 300}}
        source={this.props.source} />
    );
  }
}

export default WidePicture;

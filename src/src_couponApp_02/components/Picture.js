import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';

class Picture extends Component {
  render() {
    return (
      <Image
        style={{width: 85, height: 85}}
        source={this.props.source} />
    );
  }
}

export default Picture;

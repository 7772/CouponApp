import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Button,
  Platform,
} from 'react-native';

import Picture from './../Picture';

// https://github.com/react-community/react-native-image-picker
import ImagePicker from 'react-native-image-picker';

class PickPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSource : require('../../../images/icon.png')
    };

    
  }
  static navigationOptions = {
    title: 'CameraTest App',
  };

  _pickImage(){

      //this.props.onEntry(this.state.photoSource);

      let options = {
        title: '사진을 선택해주세요.',
        cancelButtonTitle: 'Cancel',
        chooseFromLibraryButtonTitle: '앨범에서 가져올래요!',
        takePhotoButtonTitle: '직접 찍을래요!',
        cameraType: 'back',
        mediaType: 'photo'
      };

      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePickerManager Error: ', response.error);
        }
        else {
          let source = { uri: response.uri };
          if(Platform.OS === 'ios') {
            source = {uri: response.uri.replace('file://', ''), isStatic: true};
          }
          else {
            source = {uri: response.uri, isStatic: true};
          }
          this.setState({
            photoSource: source
          });

          // onEntry 로 걸어주지 않으면 갱신이 안됨!!!
          this.props.onEntry(this.state.photoSource);
        }
      }
    );
  }

  render() {
    return (
     <View style={{height: 150, flexDirection: 'row', alignItems: 'center'}}>
       <View style={styles.pictureBox}>
         <Picture
           source={this.state.photoSource}
           onEntry={this.props.onEntry} />
       </View>
       <Button
         style={styles.button}
         title="쿠폰 이미지 선택"
         onPress={this._pickImage.bind(this)}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    height: 200,
    marginTop : 50,
    flexDirection: 'column'
  },
  button: {
    borderWidth: 2
  },
  pictureBox: {
    width: 100,
    padding: 10
  }
});

export default PickPicture;

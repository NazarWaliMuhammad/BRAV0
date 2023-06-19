import React, {useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';

import PlaySound from '../../assets/sound/pressSound';
import Entypo from 'react-native-vector-icons/Entypo';
const AppBackground = props => {
  const gradientColors = [
    '#053717',
    '#056029',
    '#048c3c',
    '#07ba4f',
    '#12eb62',
  ];
  return (
    // <LinearGradient
    //   colors={gradientColors}
    //   start={{x: 0, y: 0}}
    //   end={{x: 1, y: 1}}
    //   style={{flex: 1}}>
    //   {props.children}
    // </LinearGradient>
    <ImageBackground
      source={require('../../assets/image/appBackground.png')}
      style={{flex: 1}}>
      {props.children}
    </ImageBackground>
  );
};

export default AppBackground;

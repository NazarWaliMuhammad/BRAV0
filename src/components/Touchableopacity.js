import React, {useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import PlaySound from '../../assets/sound/pressSound';
import Entypo from 'react-native-vector-icons/Entypo';
import {useTranslation} from 'react-i18next';
const Touchableopacity = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={props.style}
      onPress={() => {
        PlaySound();
        props.onPress();
      }}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Touchableopacity;

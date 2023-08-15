import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

import PlaySound from '../../assets/sound/pressSound';
import Entypo from 'react-native-vector-icons/Entypo';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Touchableopacity = props => {
  const stateSound = useSelector(state => state.sound);
  // const [soundState, setSoundState] = useState(null);
  // useEffect(() => {
  //   setSoundState(stateSound);
  // }, [stateSound]);

  // const [soundState, setSoundState] = useState(true);
  // useEffect(() => {
  //   const getSound = async () => {
  //     const isSound = await AsyncStorage.getItem('SETTING_SOUND');
  //     setSoundState(isSound);
  //   };
  //   getSound();
  // }, [soundState]);

  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={props.style}
      onPress={() => {
        if (stateSound === 'true') {
          PlaySound();
        }
        props.onPress();
      }}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Touchableopacity;

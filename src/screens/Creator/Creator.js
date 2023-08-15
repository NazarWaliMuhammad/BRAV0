import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import AppBackground from '../../components/appBackground ';

import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {setSound, setMusic} from '../../../redux/Action/Action';
const CreatorScreen = props => {
  const {i18n} = useTranslation();
  const dispatch = useDispatch();
  // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const MUSIC = useSelector(state => state.music);

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('FirstTimeLogin');
    }, 3000);
  }, []);
  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      source={require('../../../assets/image/creator.jpeg')}></ImageBackground>
  );
};

export default CreatorScreen;

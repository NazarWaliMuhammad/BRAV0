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
const SplashScreen = props => {
  const {i18n} = useTranslation();
  const dispatch = useDispatch();
  // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const MUSIC = useSelector(state => state.music);

  useEffect(() => {
    const getLang = async () => {
      const soundState = await AsyncStorage.getItem('SETTING_SOUND');
      const musicState = await AsyncStorage.getItem('SETTING_MUSIC');
      // console.log(JSON.stringify(soundState));
      dispatch(setSound(soundState));
      dispatch(setMusic(musicState));
      const lang = await AsyncStorage.getItem('LANGUAGE');
      i18n.changeLanguage(lang);
    };
    getLang();
    setTimeout(() => {
      auth().onAuthStateChanged(user => {
        if (user) {
          props.navigation.replace('Home');
        } else {
          props.navigation.replace('Login');
        }
      });
    }, 2000);
  }, []);
  return (
    <AppBackground>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 280,
            height: 110,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/image/bravo.png')}
            style={{width: 220, height: 220}}
          />
        </View>
        {/* <Text
          style={{
            fontFamily: 'LeagueSpartan-Black',
            fontSize: 60,
            color: 'white',
          }}>
          BRAVO!!
        </Text> */}
        <Text
          style={{
            fontFamily: 'LeagueSpartan-Medium',
            fontSize: 26,
            color: 'white',
          }}>
          Refine your memories....
        </Text>
        <ActivityIndicator style={{marginTop: 10}} size="large" color="white" />
      </View>
    </AppBackground>
  );
};

export default SplashScreen;

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
import WinModal from '../../components/WinModal';
import LoseModal from '../../components/loseModal';
import auth from '@react-native-firebase/auth';
const SplashScreen = props => {
  const {i18n} = useTranslation();
  // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    const getLang = async () => {
      AsyncStorage.setItem('SETTING_SOUND', 'true');
      const lang = await AsyncStorage.getItem('Selected_Language');
      i18n.changeLanguage(lang);
    };
    getLang();
    setTimeout(() => {
      auth().onAuthStateChanged(user => {
        if (user) {
          props.navigation.navigate('Home');
        } else {
          props.navigation.navigate('Login');
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
            style={{width: 300, height: 300}}
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

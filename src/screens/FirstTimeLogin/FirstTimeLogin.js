import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Image, Text, View} from 'react-native';
import AppBackground from '../../components/appBackground ';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Touchableopacity from '../../components/Touchableopacity';

import Spinner from 'react-native-loading-spinner-overlay';

const FirstTimeLogin = props => {
  const [isSelectedIt, setIsSelectedIt] = useState(null);
  const [isSelectedEn, setIsSelectedEn] = useState(null);
  const [button, setButton] = useState(true);
  const [langauge, setLanguage] = useState(null);
  const [firstTimeLogin, setFirstTimeLogin] = useState(null);
  const LanguageSetter = async () => {
    await AsyncStorage.setItem('LANGUAGE', langauge);
    await AsyncStorage.setItem('SETTING_MUSIC', `${true}`);
    await AsyncStorage.setItem('SETTING_SOUND', `${true}`);
    setFirstTimeLogin(false);
  };
  console.log(langauge);

  const checkFirstTimeLogin = async () => {
    const music = await AsyncStorage.getItem('SETTING_MUSIC');
    const sound = await AsyncStorage.getItem('SETTING_SOUND');
    const value = await AsyncStorage.getItem('LANGUAGE');

    if (value === null || music === null || sound === null) {
      setFirstTimeLogin(true);
    } else {
      setFirstTimeLogin(false);
    }
  };
  useEffect(() => {
    checkFirstTimeLogin();
  }, []);

  if (firstTimeLogin === null) {
    // Render a loading screen or any other component while checking the storage
    return (
      <AppBackground>
        <Spinner
          visible={true}
          // textContent={'Loading'}
          textStyle={{color: '#FFF'}}
        />
      </AppBackground>
    );
  } else if (firstTimeLogin === true) {
    return (
      <AppBackground>
        <View
          style={{
            marginTop: 40,
            width: '100%',
            flex: 0.8,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '82%',
              backgroundColor: 'white',
              height: 270,
              borderRadius: 10,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 100,
                borderBottomWidth: 0.3,
                borderBottomColor: 'gray',
                //   marginVertical: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Bold',
                  fontSize: 30,
                  color: 'black',
                }}>
                Select Language
              </Text>
            </View>
            <Touchableopacity
              onPress={() => {
                setIsSelectedEn(false);
                setIsSelectedIt(true);
                setLanguage('it');
                setButton(false);
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: 80,
                borderBottomWidth: 0.3,
                borderBottomColor: 'gray',
                //   marginVertical: 20,
              }}>
              <Touchableopacity
                onPress={() => {
                  setIsSelectedEn(false);
                  setIsSelectedIt(true);
                  setLanguage('it');
                  setButton(false);
                }}
                style={{margin: 20}}>
                {isSelectedIt ? (
                  <FontAwesome name="circle" size={33} color="#d4d4ff" />
                ) : (
                  <FontAwesome name="circle-thin" size={33} color="#d4d4ff" />
                )}
              </Touchableopacity>
              <Image
                source={require('../../../assets/image/italy.png')}
                style={{width: 55, height: 40}}
              />
              <Text
                style={{
                  marginStart: 20,
                  fontSize: 28,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  color: 'black',
                }}>
                Italian
              </Text>
            </Touchableopacity>
            <Touchableopacity
              onPress={() => {
                setIsSelectedEn(true);
                setIsSelectedIt(false);
                setLanguage('en');
                setButton(false);
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: 80,

                //   marginVertical: 20,
              }}>
              <Touchableopacity
                onPress={() => {
                  setIsSelectedEn(true);
                  setIsSelectedIt(false);
                  setLanguage('en');
                  setButton(false);
                }}
                style={{margin: 20}}>
                {isSelectedEn ? (
                  <FontAwesome name="circle" size={33} color="#d4d4ff" />
                ) : (
                  <FontAwesome name="circle-thin" size={33} color="#d4d4ff" />
                )}
              </Touchableopacity>
              <Image
                source={require('../../../assets/image/usa.png')}
                style={{width: 55, height: 40}}
              />
              <Text
                style={{
                  marginStart: 20,
                  fontSize: 28,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  color: 'black',
                }}>
                English
              </Text>
            </Touchableopacity>
          </View>
          <Touchableopacity
            onPress={() => {
              props.navigation.replace('Splash');
              LanguageSetter();
            }}
            disabled={button}
            style={{
              width: '82%',
              backgroundColor: '#d4d4ff',
              height: 60,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 40,
              opacity: button === true ? 0.5 : 1,
            }}>
            <Text
              style={{
                marginStart: 20,
                fontSize: 28,
                fontFamily: 'LeagueSpartan-SemiBold',
                color: '#301934',
              }}>
              Proceed
            </Text>
          </Touchableopacity>
        </View>
      </AppBackground>
    );
  } else {
    props.navigation.replace('Splash');
  }
};

export default FirstTimeLogin;

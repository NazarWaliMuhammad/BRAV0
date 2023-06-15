import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import AppBackground from '../../components/appBackground ';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Touchableopacity from '../../components/Touchableopacity';

const FirstTimeLogin = props => {
  const [isSelectedIt, setIsSelectedIt] = useState(null);
  const [isSelectedEn, setIsSelectedEn] = useState(null);
  const [button, setButton] = useState(true);
  const [langauge, setLanguage] = useState(null);
  console.log(langauge);

  const LanguageSetter = async () => {
    await AsyncStorage.setItem('Selected_Language', langauge);
  };
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
          <View
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
                <FontAwesome name="circle" size={33} color="#0bda51" />
              ) : (
                <FontAwesome name="circle-thin" size={33} color="#0bda51" />
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
              }}>
              Italia
            </Text>
          </View>
          <View
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
                <FontAwesome name="circle" size={33} color="#0bda51" />
              ) : (
                <FontAwesome name="circle-thin" size={33} color="#0bda51" />
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
              }}>
              English
            </Text>
          </View>
        </View>
        <Touchableopacity
          onPress={() => {
            props.navigation.replace('Splash');
            LanguageSetter();
          }}
          disabled={button}
          style={{
            width: '82%',
            backgroundColor: '#0bda51',
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
              color: 'white',
            }}>
            Proceed
          </Text>
        </Touchableopacity>
      </View>
    </AppBackground>
  );
};

export default FirstTimeLogin;

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import RNExitApp from 'react-native-exit-app';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontiso from 'react-native-vector-icons/Fontisto';
import PlaySound from '../../../assets/sound/pressSound';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import Touchableopacity from '../../components/Touchableopacity';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import SettingModal from '../../components/settingModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {
  setGameCompletion,
  setMainlevel,
  setMainLvlCompleted,
  setScore,
  setSublevel1,
  setSublevel2,
  setSublevel3,
  setSublevel4,
  setSublevel5,
  setSublevel6,
  setUserName,
} from '../../../redux/Action/Action';
import FirstTimeModal from '../FirstTimeLogin/FirstTimeModal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import _default from 'react-native-svg/lib/typescript/fabric/CircleNativeComponent';
const HomeScreen = props => {
  const {t, i18n} = useTranslation();
  const [settingModal, setSettingModal] = useState(false);
  const [firstTimeModal, setFirstTimeModal] = useState(true);

  const SOUND = useSelector(state => state.sound);
  const dispatch = useDispatch();
  // const authentication = auth;
  const isFocused = useIsFocused();
  const userCheck = firestore()
    .collection('gameRecord')
    .doc(auth().currentUser.uid)
    .get();

  useEffect(() => {
    const getData = async () => {
      const user = await firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .get();
      // const extractedData = user.map(item => {
      //   return item;
      // });
      dispatch(setMainlevel(user._data.mainLevel));
      dispatch(setSublevel1(user._data.subLevel1));
      dispatch(setSublevel2(user._data.subLevel2));
      dispatch(setSublevel3(user._data.subLevel3));
      dispatch(setSublevel4(user._data.subLevel4));
      dispatch(setSublevel5(user._data.subLevel5));
      dispatch(setSublevel6(user._data.subLevel6));

      dispatch(setUserName(user._data.userName));
      dispatch(setScore(user._data.score));
      dispatch(setGameCompletion(user._data.completed));
      // dispatch(setSubLvlCompleted(user._data.subLevelCompleted));
      dispatch(setMainLvlCompleted(user._data.mainLevelCompleted));
      // console.log(SOUND);
      console.group(SOUND);

      // console.log();
      console.log(user._data.subLevel1);
      console.log(user._data.subLevel2);
      console.log(user._data.subLevel3);
      console.log(user._data.subLevel4);
      console.log(user._data.subLevel5);
      console.log(user._data.subLevel6);

      console.log(user._data.userName);
      console.log(user._data.score);
      // console.log(user._data.subLevelCompleted + ' Hello');
      console.log(user._data.mainLevelCompleted + 'Completed');
    };
    getData();
    // console.log('Hello');
    // if()
  }, [isFocused, userCheck]);
  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  const data = [
    {
      level: '1st',
      name: 'Animals',
      img: 'https://cdn.pixabay.com/photo/2013/07/13/13/14/tiger-160601_1280.png',
    },
    {
      level: '2nd',
      name: 'People',
      img: 'https://cdn.pixabay.com/photo/2022/03/24/16/30/gardener-7089417_1280.png',
    },
    {
      level: '3rd',
      name: 'Sports',
      img: 'https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png',
    },
    {
      level: '4th',
      name: 'Fantasy Forms 1',
      img: 'https://cdn.pixabay.com/photo/2019/02/19/16/53/rock-4007203_1280.png',
    },
    {
      level: '5th',
      name: 'Fantasy Forms 2',
      img: 'https://cdn.pixabay.com/photo/2021/02/07/19/37/drawing-5992475_1280.png',
    },
    {
      level: '6th',
      name: 'Fantasy Forms 3',
      img: 'https://cdn.pixabay.com/photo/2017/12/16/22/26/snowflake-3023441_1280.png',
    },
  ];
  return (
    <AppBackground>
      <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}
          // style={styles.sview}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 5,
              width: '100%',
            }}>
            <View
              style={{
                width: 280,
                height: 100,

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/image/bravo.png')}
                style={{width: 300, height: 300}}
              />
            </View>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-Medium',
                fontSize: 26,
                color: 'white',
                textAlign: 'center',
              }}>
              Refine your memories....
            </Text>
            <View
              style={{
                // flex: 1,
                width: '100%',
                marginTop: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Touchableopacity
                onPress={() => {
                  props.navigation.navigate('Main');
                }}
                style={{
                  // marginTop: 20,
                  // paddingBottom: 2x0,

                  width: '75%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255,255, 0.1)',
                  borderRadius: 10,
                  elevation: 4,
                  shadowOffset: {width: 0, height: 0},
                  shadowColor: 'black',
                  shadowRadius: 10,
                  shadowOpacity: 0.1,
                  borderWidth: 1,
                  borderColor: 'white',
                  // marginEnd: 19,
                }}>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    // color: '#FFB600',
                    color: 'white',

                    fontSize: 25,
                  }}>
                  {t('Play')}
                </Text>
              </Touchableopacity>
              <Touchableopacity
                onPress={() => {
                  props.navigation.navigate('Scoreboard');
                }}
                style={{
                  // marginTop: 15,
                  marginVertical: 18,
                  width: '75%',
                  height: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255,255, 0.1)',
                  borderRadius: 10,
                  elevation: 4,
                  shadowOffset: {width: 0, height: 0},
                  shadowColor: 'black',
                  shadowRadius: 10,
                  shadowOpacity: 0.1,
                  borderWidth: 1,
                  borderColor: 'white',
                }}>
                <FontAwesome5 name="crown" size={24} color="white" />

                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    // color: '#FFB600',
                    color: 'white',

                    fontSize: 24,
                    marginStart: 5,
                  }}>
                  {t('Scoreboard')}
                </Text>
              </Touchableopacity>
              <Touchableopacity
                onPress={() => {
                  // dispatch(setTimer(0));
                  props.navigation.navigate('Credits'); // dispatch(setScore(0));
                }}
                style={{
                  // marginTop: 15,
                  marginBottom: 18,

                  width: '75%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255,255, 0.1)',
                  borderRadius: 10,
                  elevation: 4,
                  shadowOffset: {width: 0, height: 0},
                  shadowColor: 'black',
                  shadowRadius: 10,
                  shadowOpacity: 0.1,
                  borderWidth: 1,
                  borderColor: 'white',
                  // width: 120,
                  // height: 60,
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // backgroundColor: 'purple',
                  // borderRadius: 20,
                  // elevation: 4,
                  // shadowOffset: {width: 0, height: 0},
                  // shadowColor: 'black',
                  // shadowRadius: 20,
                  // shadowOpacity: 0.1,
                  // marginEnd: 19,
                }}>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    // color: 'skyblue',
                    color: 'white',

                    fontSize: 25,
                  }}>
                  {t('Credits')}
                </Text>
              </Touchableopacity>
              <Touchableopacity
                onPress={() => {
                  // dispatch(setTimer(0));
                  // props.navigation.navigate('Settings');
                  setSettingModal(true); // dispatch(setScore(0));
                }}
                style={{
                  // marginTop: 15,
                  marginBottom: 18,

                  width: '75%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255,255, 0.1)',
                  borderRadius: 10,
                  elevation: 4,
                  shadowOffset: {width: 0, height: 0},
                  shadowColor: 'black',
                  shadowRadius: 10,
                  shadowOpacity: 0.1,
                  borderWidth: 1,
                  borderColor: 'white',
                  // width: 120,
                  // height: 60,
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // backgroundColor: 'purple',
                  // borderRadius: 20,
                  // elevation: 4,
                  // shadowOffset: {width: 0, height: 0},
                  // shadowColor: 'black',
                  // shadowRadius: 20,
                  // shadowOpacity: 0.1,
                  // marginEnd: 19,
                }}>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    color: 'white',
                    fontSize: 25,
                  }}>
                  {/* {t('Quit')}
                   */}
                  {t('Settings')}
                </Text>
              </Touchableopacity>
              <Touchableopacity
                onPress={() => {
                  RNExitApp.exitApp();
                }}
                style={{
                  // marginTop: 15,
                  // marginVertical: 26,
                  width: '75%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255,255, 0.1)',
                  borderRadius: 10,
                  elevation: 4,
                  shadowOffset: {width: 0, height: 0},
                  shadowColor: 'black',
                  shadowRadius: 10,
                  shadowOpacity: 0.1,
                  borderWidth: 1,
                  borderColor: 'white',
                  // width: 100,
                  // height: 60,
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // backgroundColor: 'red',
                  // borderRadius: 20,
                  // elevation: 4,
                  // shadowOffset: {width: 0, height: 0},
                  // shadowColor: 'black',
                  // shadowRadius: 20,
                  // shadowOpacity: 0.1,
                  // marginEnd: 19,
                }}>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    // color: 'red',
                    color: 'white',

                    fontSize: 25,
                  }}>
                  {/* {t('Quit')} */}
                  {/* Close */}
                  {t('Close')}
                </Text>
              </Touchableopacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',

              // flexDirection: 'column-reverse',
              flexDirection: 'column',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SettingModal
              onPressLogOut={() => {
                props.navigation.navigate('Login');
                setSettingModal(false);
              }}
              onPressK={() => {
                setSettingModal(false);
                // PlaySound();
              }}
              visible={settingModal}
              onPressC={() => {
                setSettingModal(false);
                // PlaySound();
              }}
            />
            <FirstTimeModal />
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </AppBackground>
  );
};
const styles = StyleSheet.create({
  sview: {
    // flex: 1,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default HomeScreen;

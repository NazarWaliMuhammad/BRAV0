import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Picker,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import PlaySound from '../../assets/sound/pressSound';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import Touchableopacity from './Touchableopacity';
import {useDispatch, useSelector} from 'react-redux';
import {setMusic, setSound, setTimer} from '../../redux/Action/Action';
import Sound from 'react-native-sound';

const SettingModal = props => {
  const [soundIcon, setSoundIcon] = useState(null);
  const [musicIcon, setMusicIcon] = useState(null);
  const [isSelected, setIsSelected] = useState(null);
  const {t, i18n} = useTranslation();
  const [applangauge, setAppLanguage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const dispatch = useDispatch();
  const SOUND = useSelector(state => state.sound);
  const MUSIC = useSelector(state => state.music);

  // useEffect(() => {
  //   const getData = async () => {
  //     const soundData = await AsyncStorage.getItem('Sound');
  //     const musicData = await AsyncStorage.getItem('Music');
  //     console.log(soundData);
  //     console.log(musicData);
  //   };
  //   getData();
  // }, [soundIcon]);
  // const handleSoundMusic = async () => {
  //   await AsyncStorage.setItem('Sound', `${soundIcon}`);
  //   await AsyncStorage.setItem('Music', `${musicIcon}`);
  //   // await AsyncStorage.setItem('Sound', `${soundIcon}`);
  // };
  // MUSIC SETTINGS

  const setMusicState = async () => {
    dispatch(setMusic(JSON.stringify(musicIcon)));
    await AsyncStorage.setItem('SETTING_MUSIC', JSON.stringify(musicIcon));
  };

  useEffect(() => {
    console.log(MUSIC);
    if (MUSIC === 'true') {
      setMusicIcon(true);
    } else {
      setMusicIcon(false);
    }
    // dispatch(setMusic(musicIcon));
  }, []);

  // // SOUND SETTINGS

  const setSoundState = async () => {
    dispatch(setSound(JSON.stringify(soundIcon)));
    await AsyncStorage.setItem('SETTING_SOUND', JSON.stringify(soundIcon));
  };
  useEffect(() => {
    console.log(SOUND);

    if (SOUND === 'true') {
      setSoundIcon(true);
    } else {
      setSoundIcon(false);
    }
    // dispatch(setSound(soundIcon));
  }, []);

  // LANGUAGE GETTING

  const handleChangeLanguage = async () => {
    i18n.changeLanguage(applangauge);
    setSelectedLanguage(applangauge);
    await AsyncStorage.setItem('LANGUAGE', applangauge);
  };
  useEffect(() => {
    if (i18n.language === 'en') {
      setAppLanguage('en');
      setIsSelected(true);
    } else {
      setIsSelected(false);
      setAppLanguage('it');
    }
  }, []);
  //   const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  //   const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
  //   const renderItem = ({item}) => {
  //     return (
  //       <View
  //         style={{
  //           //   borderWidth: 1,
  //           padding: 20,
  //           borderRadius: 20,
  //           alignItems: 'center',
  //           backgroundColor: 'white',
  //         }}>
  //         <Image source={{uri: item.url}} style={{width: 200, height: 200}} />
  //         <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
  //           {item.name}
  //         </Text>
  //       </View>
  //     );
  //   };

  return (
    <Modal transparent={true} visible={props.visible}>
      <View
        style={{
          backgroundColor: '#000000aa',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '85%',
            height: 410,
            borderRadius: 10,
            alignItems: 'center',
            borderWidth: 3,
            borderColor: '#FFB600',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 100,
            }}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-Bold',
                fontSize: 35,
                color: 'darkgreen',
                // marginTop: 30,
              }}>
              {t('Settings')}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 200,
              // padding: 20,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '100%',
                // height: 40,
                paddingVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
              }}>
              <Text
                style={{
                  marginStart: 10,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 22,
                  color: '#301934',
                }}>
                Sound
              </Text>
              <Touchableopacity
                style={{marginEnd: 10}}
                onPress={() => {
                  setSoundIcon(prev => !prev);
                }}>
                {soundIcon ? (
                  <FontAwesome5 name="toggle-on" size={30} color="darkgreen" />
                ) : (
                  <FontAwesome5 name="toggle-off" size={30} color="red" />
                )}
              </Touchableopacity>
            </View>
            <View
              style={{
                width: '100%',
                paddingVertical: 15,
                // height: 60,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
              }}>
              <Text
                style={{
                  marginStart: 10,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 22,
                  color: '#301934',
                }}>
                {t('Music')}
              </Text>
              <Touchableopacity
                style={{marginEnd: 10}}
                onPress={() => {
                  setMusicIcon(prev => !prev);
                }}>
                {musicIcon ? (
                  <FontAwesome5 name="toggle-on" size={30} color="darkgreen" />
                ) : (
                  <FontAwesome5 name="toggle-off" size={30} color="red" />
                )}
              </Touchableopacity>
            </View>
            <View
              style={{
                width: '100%',
                // height: 50,
                paddingVertical: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // borderBottomColor :""
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
              }}>
              <Text
                style={{
                  marginStart: 10,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 22,
                  color: '#301934',
                }}>
                {t('Language')}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Touchableopacity
                  // disabled={selectedLanguage === 'en'}
                  style={{marginEnd: 10}}
                  onPress={() => {
                    setIsSelected(true);
                    setAppLanguage('en');
                  }}>
                  <Text
                    style={{
                      marginStart: 10,
                      fontFamily: 'LeagueSpartan-SemiBold',
                      fontSize: 20,
                      color: isSelected ? 'darkgreen' : '#d3d3d3',
                    }}>
                    En
                  </Text>
                </Touchableopacity>
                <Touchableopacity
                  // disabled={selectedLanguage === 'en'}
                  style={{marginEnd: 10}}
                  onPress={() => {
                    setIsSelected(false);
                    setAppLanguage('it');
                  }}>
                  <Text
                    style={{
                      marginStart: 10,
                      fontFamily: 'LeagueSpartan-SemiBold',
                      fontSize: 20,
                      color: isSelected ? '#d3d3d3' : 'darkgreen',
                    }}>
                    It
                  </Text>
                </Touchableopacity>
              </View>
            </View>
            <Touchableopacity
              onPress={() => {
                props.onPressLogOut();
              }}
              style={{
                // paddingVertical: 15,s
                borderBottomWidth: 1,
                borderBottomColor: 'white',
                // marginTop: 14,
                width: '100%',
                // height: 50,
                // backgroundColor: 'red',
                paddingVertical: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignItems: 'center',
                alignSelf: 'center',
                // borderRadius: 10,
              }}>
              <Text
                style={{
                  marginStart: 10,
                  fontFamily: 'LeagueSpartan-Bold',
                  fontSize: 24,
                  color: 'red',
                }}>
                Log out
              </Text>
              <AntDesign
                style={{marginEnd: 10}}
                name="logout"
                size={24}
                color="red"
              />
            </Touchableopacity>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
              width: '100%',
              // height: 100,
              paddingVertical: 40,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Touchableopacity
              onPress={() => {
                // setSoundIcon(true);
                // setIsSelected(true);
                props.onPressC();
              }}
              style={{
                width: '40%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'darkgreen',
                marginStart: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 20,
                  color: 'white',
                  borderRadius: 10,
                }}>
                {t('Cancel')}
              </Text>
            </Touchableopacity>

            <Touchableopacity
              onPress={() => {
                setSoundState();
                setMusicState();
                handleChangeLanguage();
                props.onPressK();
              }}
              style={{
                width: '40%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'darkgreen',
                marginEnd: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 20,
                  color: 'white',
                  borderRadius: 10,
                }}>
                Ok
              </Text>
            </Touchableopacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SettingModal;

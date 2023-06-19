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
import {useTranslation} from 'react-i18next';
import Touchableopacity from './Touchableopacity';
import {useDispatch, useSelector} from 'react-redux';
import {setSound, setTimer} from '../../redux/Action/Action';

const SettingModal = props => {
  const [soundIcon, setSoundIcon] = useState(true);
  const [musicIcon, setMusicIcon] = useState(true);
  const [isSelected, setIsSelected] = useState(true);
  const {t, i18n} = useTranslation();
  const [applangauge, setAppLanguage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const dispatch = useDispatch();
  const SOUND = useSelector(state => state.sound);
  const handleChangeLanguage = async () => {
    i18n.changeLanguage(applangauge);
    setSelectedLanguage(applangauge);
    await AsyncStorage.setItem('Selected_Language', applangauge);
  };

  const handleSound = () => {};
  useEffect(() => {
    dispatch(setSound(soundIcon));
    if (SOUND === true) {
      setSoundIcon(true);
    } else {
      setSoundIcon(false);
    }
  }, [soundIcon]);
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
            width: '80%',
            height: 400,
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
                fontSize: 50,
                color: '#00b200',
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
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  marginStart: 10,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 26,
                  color: '#FFB600',
                }}>
                Sound
              </Text>
              <Touchableopacity
                style={{marginEnd: 10}}
                onPress={() => {
                  setSoundIcon(prev => !prev);
                }}>
                {SOUND ? (
                  <FontAwesome5 name="toggle-on" size={32} color="green" />
                ) : (
                  <FontAwesome5 name="toggle-off" size={32} color="red" />
                )}
              </Touchableopacity>
            </View>
            <View
              style={{
                width: '100%',
                height: 60,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
              }}>
              <Text
                style={{
                  marginStart: 10,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 26,
                  color: '#FFB600',
                }}>
                {t('Music')}
              </Text>
              <Touchableopacity
                style={{marginEnd: 10}}
                onPress={() => {
                  setMusicIcon(prev => !prev);
                }}>
                {musicIcon ? (
                  <FontAwesome5 name="toggle-on" size={34} color="green" />
                ) : (
                  <FontAwesome5 name="toggle-off" size={34} color="red" />
                )}
              </Touchableopacity>
            </View>
            <View
              style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 8,
              }}>
              <Text
                style={{
                  marginStart: 10,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 26,
                  color: '#FFB600',
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
                      color: isSelected ? '#00b200' : '#d3d3d3',
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
                      color: isSelected ? '#d3d3d3' : '#00b200',
                    }}>
                    It
                  </Text>
                </Touchableopacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 100,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Touchableopacity
              onPress={() => {
                setSoundIcon(true);
                setIsSelected(true);
                props.onPressC();
              }}
              style={{
                width: '40%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00b200',
                marginStart: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 23,
                  color: 'white',
                  borderRadius: 10,
                }}>
                {t('Cancel')}
              </Text>
            </Touchableopacity>

            <Touchableopacity
              onPress={() => {
                handleSound();
                handleChangeLanguage();
                props.onPressK();
              }}
              style={{
                width: '40%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00b200',
                marginEnd: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 23,
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

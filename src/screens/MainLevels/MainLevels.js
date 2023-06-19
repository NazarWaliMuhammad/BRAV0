import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlaySound from '../../../assets/sound/pressSound';
import SettingModal from '../../components/settingModal';

import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import Touchableopacity from '../../components/Touchableopacity';
import GameStartModal from '../../components/gameStartModal';
import {useSelector} from 'react-redux';
import {MAIN_BUNDLE} from 'react-native-sound';
const MainScreen = props => {
  const {t, i18n} = useTranslation();
  const [score, setScore] = useState(null);
  const [icon, setIcon] = useState(true);
  const [settingModal, setSettingModal] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [name, setName] = useState();
  const [mainLvl, setMainLvl] = useState(1);
  const main_level = useSelector(state => state.mainLevel);
  const scoreState = useSelector(state => state.score);
  useEffect(() => {
    setScore(scoreState);
  }, [scoreState]);
  // const _getSubLevels = () => {
  //   const tiles = [2, 3, 4, 5, 6, 7, 8, 9];
  //   let sub_levels = [];
  //   for (var a = 0; a < tiles.length; a++) {
  //     sub_levels.push({
  //       id: a + 1,
  //       numTiles: tiles[a],
  //     });
  //   }
  //   return sub_levels;
  // };
  useEffect(() => {
    setMainLvl(main_level);
    console.log(main_level);
  }, [main_level]);
  // const MAIN_LEVELS = [
  //   {
  //     id:1,
  //     name:'Animals',
  //     img:'',
  //     isLocked:false,

  //   }
  // ]
  // const filtered_sub_levels = SUB_LEVELS.filter(lvl => lvl.mainLevelId == )
  // const SUB_LEVELS = [
  //   {
  //     id:1,
  //     mainLevelId:1,
  //     numTiles:2,

  //   },   {
  //     id:2,
  //     mainLevelId:2,
  //     numTiles:3,

  //   },   {
  //     id:4,
  //     mainLevelId:,
  //     numTiles:2,

  //   },   {
  //     id:01,
  //     mainLevelId:01,
  //     numTiles:2,

  //   },   {
  //     id:01,
  //     mainLevelId:01,
  //     numTiles:2,

  //   },   {
  //     id:01,
  //     mainLevelId:01,
  //     numTiles:2,

  //   },   {
  //     id:01,
  //     mainLevelId:01,
  //     numTiles:2,

  //   },   {
  //     id:01,
  //     mainLevelId:01,
  //     numTiles:2,

  //   }
  // ]
  const data = [
    {
      level: '1st',
      name: 'Animals',
      img: '../../../assets/image/animal01.png',
      isLocked: false,
    },
    {
      level: '2nd',
      name: 'People',
      img: '',
      isLocked: true,
    },
    {
      level: '3rd',
      name: 'Sports',
      img: '',
      isLocked: true,
    },
    {
      level: '4th',
      name: 'Fantasy Forms 1',
      img: '',
      isLocked: true,
    },
    {
      level: '5th',
      name: 'Fantasy Forms 2',
      img: '',
      isLocked: true,
    },
    {
      level: '6th',
      name: 'Fantasy Forms 3',
      img: '',
      isLocked: true,
    },
  ];
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
    //     backgroundColor: '#00b200',
    //   }}>
    <AppBackground>
      <View
        style={{
          flexDirection: 'row-reverse',
          marginTop: 40,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '35%',
            height: 55,
            backgroundColor: 'white',
            marginEnd: 10,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: '#00b200',
              textAlign: 'center',
            }}>
            {t('ScoreBoard')}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: '#FFB600',
              marginTop: 5,
            }}>
            {scoreState}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 130,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: 'LeagueSpartan-SemiBold',
            color: 'white',
          }}>
          {t('Main Levels')}
        </Text>
      </View>
      <FlatList
        style={{alignSelf: 'center'}}
        data={data}
        numColumns={3}
        renderItem={({item, index}) => {
          return (
            <Touchableopacity
              disabled={mainLvl < index + 1 ? true : false}
              onPress={() => {
                props.navigation.navigate('Sub', {
                  name: item.name,
                });

                // props.navigation.navigate('Sub', {
                //   name: item.name,
                // });
              }}
              style={{
                alignSelf: 'center',
                width: '29%',
                height: 180,
                margin: 8,
                backgroundColor: 'white',
                borderRadius: 15,
                opacity: mainLvl < index + 1 ? 0.5 : 1,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 180,
                  width: '100%',
                }}>
                <View
                  style={{
                    // width: '100%',
                    // height: 0,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'LeagueSpartan-SemiBold',
                      fontSize: 18,

                      color: '#00b200',
                    }}>
                    {item.level}
                  </Text>
                </View>
                <View
                  style={{
                    // width: '100%',
                    // height: 26,
                    marginBottom: 3,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'LeagueSpartan-SemiBold',
                      fontSize: 22,

                      color: '#FFB600',
                    }}>
                    {t('Level')}
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri: 'https://cdn.pixabay.com/photo/2013/07/13/13/14/tiger-160601_1280.png',
                  }}
                  style={{width: 85, height: 88}}>
                  {mainLvl < index + 1 ? (
                    <Ionicons
                      style={{alignSelf: 'center'}}
                      name="lock-closed"
                      size={85}
                      color="red"
                    />
                  ) : (
                    ''
                  )}
                </ImageBackground>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 8,
                    // width: '100%',
                    // height: 25,
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'LeagueSpartan-SemiBold',
                      fontSize: 15,
                      color: '#00b200',
                      // marginTop: 8,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </View>
            </Touchableopacity>
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          marginBottom: 40,
        }}>
        <Touchableopacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 40,
            margin: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="arrow-back" size={40} color="#00b200" />
        </Touchableopacity>
        <Touchableopacity
          onPress={() => {
            setSettingModal(true);
          }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 40,
            margin: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="settings" size={40} color="#00b200" />
        </Touchableopacity>
      </View>
      {/* <GameStartModal
        onPressStart={() => {
          setInfoModalVisible(false);
          props.navigation.navigate('Sub', {
            name: name,
          });
        }}
        onPressCancel={() => {
          setInfoModalVisible(false);
        }}
        visible={infoModalVisible}
      /> */}
      <SettingModal
        onPressK={() => {
          setSettingModal(false);
        }}
        visible={settingModal}
        onPressC={() => {
          setSettingModal(false);
        }}
      />
    </AppBackground>
  );
};

export default MainScreen;

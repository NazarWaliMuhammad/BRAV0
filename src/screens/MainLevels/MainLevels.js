import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import PlaySound from '../../../assets/sound/pressSound';
import SettingModal from '../../components/settingModal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import Touchableopacity from '../../components/Touchableopacity';
import GameStartModal from '../../components/gameStartModal';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {MAIN_BUNDLE} from 'react-native-sound';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {setMainIndex, setMainLvlName} from '../../../redux/Action/Action';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
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
  const LvlName = useSelector(state => state.name);
  const mainLevelCompleted = useSelector(state => state.mainLvlCmplt);

  // const cmP = useSelector(state => state.gameCompletion);

  const dispatch = useDispatch();
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
      img: require('../../../assets/image/animal_08.png'),
      isLocked: false,
    },
    {
      level: '2nd',
      name: 'People',
      img: require('../../../assets/image/people_01.png'),
      isLocked: true,
    },
    {
      level: '3rd',
      name: 'Sports',
      img: require('../../../assets/image/sports_01.png'),
      isLocked: true,
    },
    {
      level: '4th',
      name: 'Fantasy 1',
      img: require('../../../assets/image/ff1_01.png'),
      isLocked: true,
    },
    {
      level: '5th',
      name: 'Fantasy 2',
      img: require('../../../assets/image/ff2_01.png'),
      isLocked: true,
    },
    {
      level: '6th',
      name: 'Fantasy 3',
      img: require('../../../assets/image/ff3_01.png'),
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
      <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}>
          <View
            style={{
              flexDirection: 'row-reverse',
              marginTop: 40,
              alignItems: 'center',
              width: '100%',
              // justifyContent: 'space-between',s
            }}>
            <View
              style={{
                width: '30%',
                height: 40,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                marginEnd: 10,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <AntDesign name="star" size={24} color="#FFB600" />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  color: 'white',
                  // marginTop: 5,
                }}>
                {score}
              </Text>
            </View>
            {/* <Touchableopacity
          onPress={() => {
            props.navigation.navigate('Scoreboard');
          }}
          style={{
            width: 120,
            height: 50,
            // borderRadius: 10,
            marginTop: 10,

            marginStart: 10,
            backgroundColor: '#FFB600',
            justifyContent: 'center',
            alignItems: 'center',
            // flexDirection: 'row',
            borderRadius: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'LeagueSpartan-SemiBold',
              color: 'white',
              fontSize: 18,
              // marginStart: 7,
              // mar,
            }}>
            Scoreboard
          </Text>
        </Touchableopacity> */}
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
            style={{alignSelf: 'center', marginTop: 30}}
            data={data}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <Touchableopacity
                  disabled={mainLvl < index + 1 ? true : false}
                  onPress={() => {
                    dispatch(setMainLvlName(item.name));
                    props.navigation.navigate('Sub');
                    dispatch(setMainIndex(index + 1));
                    // props.navigation.navigate('Sub', {
                    //   name: item.name,
                    // });
                  }}
                  style={{
                    alignSelf: 'center',
                    width: '29%',
                    height: 155,
                    margin: 8,
                    // backgroundColor: 'white',
                    borderRadius: 15,
                    opacity: mainLvl < index + 1 ? 0.5 : 1,
                    // borderWidth: 1,
                    // borderColor: '#FFB600',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',

                      // height: 200,
                      // width: '100%',
                    }}>
                    {/* <View
                  style={{
                    // width: '100%',
                    // height: 20,
                    // alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}> */}

                    {/* </View> */}
                    {/* <View
                  style={{
                    width: '100%',
                    
                    // marginBottom: 3,
                    // alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}> */}

                    {/* </View> */}
                    <ImageBackground
                      imageStyle={{
                        borderRadius: 15,
                        borderWidth: 3,
                        borderColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      source={item.img}
                      style={{
                        width: 100,
                        height: 100,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'rgba(0,0,0,0,0.6)',
                        }}>
                        {mainLevelCompleted.includes(index + 1) ? (
                          <Entypo name="check" color="#0bda51" size={50} />
                        ) : (
                          ''
                        )}
                        {mainLvl < index + 1 ? (
                          <Ionicons
                            style={{alignSelf: 'center', paddingTop: 10}}
                            name="lock-closed"
                            size={50}
                            color="black"
                          />
                        ) : (
                          ''
                        )}
                      </View>
                    </ImageBackground>
                    {/* <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    // paddingVertical: 8,
                    width: '100%',
                    alignSelf: 'center',
                  }}> */}
                    <Text
                      style={{
                        fontFamily: 'LeagueSpartan-Black',
                        fontSize: 22,
                        color: 'white',
                        textAlign: 'center',
                        // marginTop: 8,
                        paddingTop: 10,
                      }}>
                      {item.name}
                    </Text>
                    {/* </View> */}
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
              width: '100%',
            }}>
            <Touchableopacity
              // disabled={subLvl < index + 1 ? true : false}
              onPress={() => {
                props.navigation.goBack();
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 40,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                opacity: 1,
              }}>
              <LinearGradient
                colors={['#FF9800', '#FF5722']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.gradient}>
                <Ionicons name="arrow-back" size={40} color="white" />
                {/* <Ionicons
              style={{alignSelf: 'center'}}
              name="lock-closed"
              size={50}
              color="white"
            /> */}
              </LinearGradient>
            </Touchableopacity>
            <Touchableopacity
              // disabled={subLvl < index + 1 ? true : false}
              onPress={() => {
                // props.navigation.goBack();
                setSettingModal(true);
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 40,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                opacity: 1,
              }}>
              <LinearGradient
                colors={['#FF9800', '#FF5722']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.gradient}>
                <Ionicons name="settings" size={40} color="white" />
              </LinearGradient>
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
            onPressLogOut={() => {
              props.navigation.navigate('Login');
              setSettingModal(false);
            }}
            onPressK={() => {
              setSettingModal(false);
            }}
            visible={settingModal}
            onPressC={() => {
              setSettingModal(false);
            }}
          />
        </ScrollView>
      </GestureHandlerRootView>
    </AppBackground>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 60,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 50,
    color: '#FFF',
    fontWeight: '900',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default MainScreen;

import React, {useEffect, useState, useRef} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

import SettingModal from '../../components/settingModal';
import GameStartModal from '../../components/gameStartModal';
import AppBackground from '../../components/appBackground ';

import Touchableopacity from '../../components/Touchableopacity';
// import LoseModal from '../../components/loseModal';
import {
  setIndex,
  setMainIndex,
  setMainLvlName,
  setTimerState,
} from '../../../redux/Action/Action';
import LinearGradient from 'react-native-linear-gradient';
import {Svg, Circle} from 'react-native-svg';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {ANIMALS_IMGS} from '../../utils/services/GameServices/LevelUtils';
const SubScreen = props => {
  const dispatch = useDispatch();
  const [isTimer, setIsTimer] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [category, setCategory] = useState(null);

  const [modalLoseVisible, setModalLoseVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [subLvl, setSubLvl] = useState(null);
  const [score, setScore] = useState(null);
  const sub_levels1 = useSelector(state => state.subLevel1);
  const sub_levels2 = useSelector(state => state.subLevel2);
  const sub_levels3 = useSelector(state => state.subLevel3);
  const sub_levels4 = useSelector(state => state.subLevel4);
  const sub_levels5 = useSelector(state => state.subLevel5);
  const sub_levels6 = useSelector(state => state.subLevel6);

  const timer = useSelector(state => state.time);
  const scoreState = useSelector(state => state.score);
  const timerState = useSelector(state => state.timerState);
  const LEVEL_NAME = useSelector(state => state.name);
  const main_level = useSelector(state => state.mainLevel);
  const subLevelCompleted = useSelector(state => state.subLvlCmplt);
  // console.log(sub_levels + 'levels');
  // const [value, setValue] = useState(0);
  // const fadeAnim = useState(new Animated.Value(0))[0];
  const array = [
    require('../../../assets/image/ff2_01.png'),
    require('../../../assets/image/ff2_02.png'),
    require('../../../assets/image/ff2_03.png'),
    require('../../../assets/image/ff2_04.png'),
    require('../../../assets/image/ff2_05.png'),
    require('../../../assets/image/ff2_06.png'),
    require('../../../assets/image/ff2_07.png'),
    require('../../../assets/image/ff2_08.png'),
    require('../../../assets/image/ff2_09.png'),
    require('../../../assets/image/ff2_10.png'),
    require('../../../assets/image/ff2_11.png'),
    require('../../../assets/image/ff2_12.png'),
    require('../../../assets/image/ff2_13.png'),
    require('../../../assets/image/ff2_14.png'),
    require('../../../assets/image/ff2_15.png'),
    require('../../../assets/image/ff2_16.png'),
    require('../../../assets/image/ff2_17.png'),
    require('../../../assets/image/ff2_18.png'),
    require('../../../assets/image/ff2_19.png'),
    require('../../../assets/image/ff2_20.png'),
  ];
  const index = 1;
  console.log(array[2]);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  // const fadeAnim = useRef(new Animated.Value(0)).current;
  let blinkingAnimation = useRef(null);

  useEffect(() => {
    const blinkAnimation = () => {
      blinkingAnimation.current = Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500, // Adjust the duration as needed
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500, // Adjust the duration as needed
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    if (subLvl === 4) {
      blinkAnimation();
      setTimeout(() => {
        blinkingAnimation.current && blinkingAnimation.current.stop();
        fadeAnim.setValue(1);
      }, 5000); // Stop the blinking after 5 seconds
    } else {
      blinkingAnimation.current && blinkingAnimation.current.stop(); // Stop the blinking if level is not 3
      fadeAnim.setValue(1); // Set the opacity value to 1 (fully opaque)
    }

    return () => {
      blinkingAnimation.current && blinkingAnimation.current.stop(); // Stop the blinking animation when the component is unmounted
    };
  }, [fadeAnim, subLvl]);

  useEffect(() => {
    if (LEVEL_NAME === 'Animals') {
      setSubLvl(sub_levels1);
      setCategory([
        require('../../../assets/image/animal_01.png'),
        require('../../../assets/image/animal_02.png'),
        require('../../../assets/image/animal_03.png'),
        require('../../../assets/image/animal_04.png'),
        require('../../../assets/image/animal_05.png'),
        require('../../../assets/image/animal_06.png'),
        require('../../../assets/image/animal_07.png'),
        require('../../../assets/image/animal_08.png'),
        require('../../../assets/image/animal_09.png'),
        require('../../../assets/image/animal_10.png'),
        require('../../../assets/image/animal_11.png'),
        require('../../../assets/image/animal_12.png'),
        require('../../../assets/image/animal_13.png'),
        require('../../../assets/image/animal_14.png'),
        require('../../../assets/image/animal_15.png'),
        require('../../../assets/image/animal_16.png'),
        require('../../../assets/image/animal_17.png'),
        require('../../../assets/image/animal_18.png'),
        require('../../../assets/image/animal_19.png'),
        require('../../../assets/image/animal_20.png'),
      ]);
    }
    if (LEVEL_NAME === 'People') {
      console.log(LEVEL_NAME);
      setSubLvl(sub_levels2);

      setCategory([
        require('../../../assets/image/people_01.png'),
        require('../../../assets/image/people_02.png'),
        require('../../../assets/image/people_03.png'),
        require('../../../assets/image/people_04.png'),
        require('../../../assets/image/people_05.png'),
        require('../../../assets/image/people_06.png'),
        require('../../../assets/image/people_07.png'),
        require('../../../assets/image/people_08.png'),
        require('../../../assets/image/people_09.png'),
        require('../../../assets/image/people_10.png'),
        require('../../../assets/image/people_11.png'),
        require('../../../assets/image/people_12.png'),
        require('../../../assets/image/people_13.png'),
        require('../../../assets/image/people_14.png'),
        require('../../../assets/image/people_15.png'),
        require('../../../assets/image/people_16.png'),
        require('../../../assets/image/people_17.png'),
        require('../../../assets/image/people_18.png'),
        require('../../../assets/image/people_19.png'),
        require('../../../assets/image/people_20.png'),
      ]);
    }
    if (LEVEL_NAME === 'Sports') {
      setSubLvl(sub_levels3);
      setCategory([
        require('../../../assets/image/sports_01.png'),
        require('../../../assets/image/sports_02.png'),
        require('../../../assets/image/sports_03.png'),
        require('../../../assets/image/sports_04.png'),
        require('../../../assets/image/sports_05.png'),
        require('../../../assets/image/sports_06.png'),
        require('../../../assets/image/sports_07.png'),
        require('../../../assets/image/sports_08.png'),
        require('../../../assets/image/sports_09.png'),
        require('../../../assets/image/sports_10.png'),
        require('../../../assets/image/sports_11.png'),
        require('../../../assets/image/sports_12.png'),
        require('../../../assets/image/sports_13.png'),
        require('../../../assets/image/sports_14.png'),
        require('../../../assets/image/sports_15.png'),
        require('../../../assets/image/sports_16.png'),
        require('../../../assets/image/sports_17.png'),
        require('../../../assets/image/sports_18.png'),
        require('../../../assets/image/sports_19.png'),
        require('../../../assets/image/sports_20.png'),
      ]);
    }
    if (LEVEL_NAME === 'Fantasy 1') {
      setSubLvl(sub_levels4);

      // console.log(LEVEL_NAME);
      setCategory([
        require('../../../assets/image/ff1_01.png'),
        require('../../../assets/image/ff1_02.png'),
        require('../../../assets/image/ff1_03.png'),
        require('../../../assets/image/ff1_04.png'),
        require('../../../assets/image/ff1_05.png'),
        require('../../../assets/image/ff1_06.png'),
        require('../../../assets/image/ff1_07.png'),
        require('../../../assets/image/ff1_08.png'),
        require('../../../assets/image/ff1_09.png'),
        require('../../../assets/image/ff1_10.png'),
        require('../../../assets/image/ff1_11.png'),
        require('../../../assets/image/ff1_12.png'),
        require('../../../assets/image/ff1_13.png'),
        require('../../../assets/image/ff1_14.png'),
        require('../../../assets/image/ff1_15.png'),
        require('../../../assets/image/ff1_16.png'),
        require('../../../assets/image/ff1_17.png'),
        require('../../../assets/image/ff1_18.png'),
        require('../../../assets/image/ff1_19.png'),
        require('../../../assets/image/ff1_20.png'),
      ]);
    }
    if (LEVEL_NAME === 'Fantasy 2') {
      setSubLvl(sub_levels5);

      setCategory([
        require('../../../assets/image/ff2_01.png'),
        require('../../../assets/image/ff2_02.png'),
        require('../../../assets/image/ff2_03.png'),
        require('../../../assets/image/ff2_04.png'),
        require('../../../assets/image/ff2_05.png'),
        require('../../../assets/image/ff2_06.png'),
        require('../../../assets/image/ff2_07.png'),
        require('../../../assets/image/ff2_08.png'),
        require('../../../assets/image/ff2_09.png'),
        require('../../../assets/image/ff2_10.png'),
        require('../../../assets/image/ff2_11.png'),
        require('../../../assets/image/ff2_12.png'),
        require('../../../assets/image/ff2_13.png'),
        require('../../../assets/image/ff2_14.png'),
        require('../../../assets/image/ff2_15.png'),
        require('../../../assets/image/ff2_16.png'),
        require('../../../assets/image/ff2_17.png'),
        require('../../../assets/image/ff2_18.png'),
        require('../../../assets/image/ff2_19.png'),
        require('../../../assets/image/ff2_20.png'),
      ]);
    }
    if (LEVEL_NAME === 'Fantasy 3') {
      setSubLvl(sub_levels6);

      setCategory([
        require('../../../assets/image/ff3_01.png'),
        require('../../../assets/image/ff3_02.png'),
        require('../../../assets/image/ff3_03.png'),
        require('../../../assets/image/ff3_04.png'),
        require('../../../assets/image/ff3_05.png'),
        require('../../../assets/image/ff3_06.png'),
        require('../../../assets/image/ff3_07.png'),
        require('../../../assets/image/ff3_08.png'),
        require('../../../assets/image/ff3_09.png'),
        require('../../../assets/image/ff3_10.png'),
        require('../../../assets/image/ff3_11.png'),
        require('../../../assets/image/ff3_12.png'),
        require('../../../assets/image/ff3_13.png'),
        require('../../../assets/image/ff3_14.png'),
        require('../../../assets/image/ff3_15.png'),
        require('../../../assets/image/ff3_16.png'),
        require('../../../assets/image/ff3_17.png'),
        require('../../../assets/image/ff3_18.png'),
        require('../../../assets/image/ff3_19.png'),
        require('../../../assets/image/ff3_20.png'),
      ]);
    }
  }, [
    LEVEL_NAME,
    sub_levels1,
    sub_levels2,
    sub_levels3,
    sub_levels4,
    sub_levels5,
    sub_levels6,
  ]);

  useEffect(() => {
    console.log(category);
  }, [LEVEL_NAME]);
  useEffect(() => {
    setIsTimer(timerState);
  }, [timerState]);
  useEffect(() => {
    setScore(scoreState);
  }, [scoreState]);

  const onNext = () => {
    if (LEVEL_NAME === 'Animals' && main_level >= 2) {
      dispatch(setMainLvlName('People'));
      // dispatch(setSublevel(1));
      dispatch(setMainIndex(2));
      // dispatch(setSubLvlCompleted([]));

      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     subLevel: 1,
      //     subLevelCompleted: [],
      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
    } else if (LEVEL_NAME === 'People' && main_level >= 3) {
      dispatch(setMainLvlName('Sports'));
      // dispatch(setSublevel(1));
      dispatch(setMainIndex(3));
      // dispatch(setSubLvlCompleted([]));

      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     subLevel: 1,
      //     subLevelCompleted: [],

      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
    } else if (LEVEL_NAME === 'Sports' && main_level >= 4) {
      dispatch(setMainLvlName('Fantasy 1'));
      // dispatch(setSublevel(1));
      dispatch(setMainIndex(4));
      // dispatch(setSubLvlCompleted([]));

      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     subLevel: 1,
      //     subLevelCompleted: [],

      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
    } else if (LEVEL_NAME === 'Fantasy 1' && main_level >= 5) {
      dispatch(setMainLvlName('Fantasy 2'));
      // dispatch(setSublevel(1));
      dispatch(setMainIndex(5));
      // dispatch(setSubLvlCompleted([]));

      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     subLevel: 1,
      //     subLevelCompleted: [],

      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
    } else if (LEVEL_NAME === 'Fantasy 2' && main_level >= 6) {
      dispatch(setMainLvlName('Fantasy 3'));
      // dispatch(setSublevel(1));
      dispatch(setMainIndex(6));
      // dispatch(setSubLvlCompleted([]));

      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     subLevel: 1,
      //     subLevelCompleted: [],

      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
    } else if (LEVEL_NAME === 'Fantasy 3') {
      alert('All Levels are unlocked!!');
    } else {
      alert('Next Level is Locked');
    }
  };
  const onBack = () => {
    if (LEVEL_NAME === 'Fantasy 3') {
      dispatch(setMainLvlName('Fantasy 2'));
      // dispatch(setSublevel(1));
      dispatch(setMainIndex(5));
      // dispatch(setSubLvlCompleted([]));
      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     subLevel: 1,
      //     subLevelCompleted: [],

      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
    } else if (LEVEL_NAME === 'Fantasy 2') {
      // dispatch(setSublevel(1));
      dispatch(setMainIndex(4));
      // dispatch(setSubLvlCompleted([]));

      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     subLevel: 1,
      //     subLevelCompleted: [],

      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
      dispatch(setMainLvlName('Fantasy 1'));
    } else if (LEVEL_NAME === 'Fantasy 1') {
      // dispatch(setSublevel(1));
      dispatch(setMainIndex(3));
      // dispatch(setSubLvlCompleted([]));

      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     subLevel: 1,
      //     subLevelCompleted: [],

      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
      dispatch(setMainLvlName('Sports'));
    } else if (LEVEL_NAME === 'Sports') {
      // dispatch(setSublevel(1));
      dispatch(setMainIndex(2));
      // dispatch(setSubLvlCompleted([]));

      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     subLevel: 1,
      //     subLevelCompleted: [],

      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
      dispatch(setMainLvlName('People'));
      // dispatch(setSubLvlCompleted([]));
    } else if (LEVEL_NAME === 'People') {
      // dispatch(setSubLvlCompleted([]));

      // dispatch(setSublevel(1));
      dispatch(setMainIndex(1));
      // dispatch(setSubLvlCompleted([]));

      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     subLevel: 1,
      //     subLevelCompleted: [],

      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
      dispatch(setMainLvlName('Animals'));
    }
  };

  // console.log(category);

  // // }, 2000);
  // console.log(imagesData);

  // props.navigation.navigate('Game', {
  //   data: imagesData,
  // });
  // console.log(imagesData);

  const data = [
    {
      level: 1,

      onPress: () => {
        // setInfoModalVisible(true);
        props.navigation.navigate('Game', {
          data: category,
          tiles: 1,
          flipTime: 1500,
          lvl: 1,
        });
      },
    },
    {
      level: 2,

      onPress: () => {
        dispatch(setTimerState(true));
        props.navigation.navigate('Game', {
          data: category,
          tiles: 2,
          flipTime: 2000,
          lvl: 2,
        });
      },
      img: require('../../../assets/image/level02.png'),

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: 3,

      img: 'https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png',
      color: '#FFBB66',
      difficulty: 'Intermediate',

      onPress: () => {
        dispatch(setTimerState(true));
        props.navigation.navigate('Game', {
          data: category,
          tiles: 3,
          flipTime: 2500,
          lvl: 3,
        });
      },
      img: require('../../../assets/image/level03.png'),
      isLocked: true,

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: 4,

      img: 'https://cdn.pixabay.com/photo/2019/02/19/16/53/rock-4007203_1280.png',
      color: '#FF8866',
      difficulty: 'Advanced',

      onPress: () => {
        dispatch(setTimerState(true));
        props.navigation.navigate('Game', {
          data: category,
          tiles: 4,
          flipTime: 3200,
          lvl: 4,
        });
      },
      img: require('../../../assets/image/level04.png'),
      isLocked: true,

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: 5,
      onPress: () => {
        dispatch(setTimerState(true));
        props.navigation.navigate('Game', {
          data: category,
          tiles: 5,
          flipTime: 3800,
          lvl: 5,
        });
      },

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: 6,

      onPress: () => {
        dispatch(setTimerState(true));
        props.navigation.navigate('Game', {
          data: category,
          tiles: 6,
          flipTime: 4500,
          lvl: 6,
        });
      },

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: 7,

      onPress: () => {
        dispatch(setTimerState(true));
        props.navigation.navigate('Game', {
          data: category,
          tiles: 7,
          flipTime: 5300,
          lvl: 7,
        });
      },

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: 8,

      onPress: () => {
        dispatch(setTimerState(true));
        props.navigation.navigate('Game', {
          data: category,
          tiles: 8,
          flipTime: 6000,
          lvl: 8,
        });
      },

      // .map(item => {
      //   return item.image;
      // }),
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
          }}>
          <View
            style={{
              flexDirection: 'row-reverse',
              marginTop: 45,
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
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
          </View>
          <View
            style={{
              width: '100%',
              height: 100,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Touchableopacity
              style={{}}
              onPress={() => {
                onBack();
              }}>
              <Image
                source={require('../../../assets/image/back.png')}
                style={{width: 60, height: 60}}
              />
            </Touchableopacity>
            {/* <View></View> */}
            <Text
              style={{
                width: '83%',
                fontSize: 34.5,
                fontFamily: 'LeagueSpartan-SemiBold',
                color: 'white',
                textAlign: 'center',
                marginBottom: 5,
              }}>
              {LEVEL_NAME}
            </Text>
            <Touchableopacity
              style={{}}
              onPress={() => {
                onNext();
              }}>
              <Animated.View style={{opacity: fadeAnim}}>
                <Image
                  source={require('../../../assets/image/next.png')}
                  style={{width: 60, height: 60}}
                />
              </Animated.View>
            </Touchableopacity>
          </View>
          <View>
            {/* {timerState ? (
          <View
            style={{
              width: 100,
              height: 40,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              flexDirection: 'row',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <AntDesign
              name="clockcircleo"
              size={20}
              color="white"
              style={{marginStart: 14}}
            />
            <View
              style={{
                width: '70%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Timer />
            </View>
          </View>
        ) : (
          <Text></Text>
        )} */}
          </View>
          <FlatList
            style={{alignSelf: 'center'}}
            data={data}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <Touchableopacity
                  disabled={subLvl < index + 1 ? true : false}
                  onPress={() => {
                    item.onPress();
                    dispatch(setIndex(item.level));
                  }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 60,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                    opacity: subLvl < index + 1 ? 0.5 : 1,
                  }}>
                  {/* {subLvl > index + 1 ? (
                <Entypo name="check" color="#0bda51" size={50} />
              ) : (
                ''
              )} */}
                  <LinearGradient
                    colors={['#FF9800', '#FF5722']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.gradient}>
                    {/* {subLvl > index + 1 ? (
                  <Entypo name="check" color="#0bda51" size={50} />
                ) : (
                  ''
                )} */}
                    {subLvl < index + 1 ? (
                      <Ionicons
                        style={{alignSelf: 'center'}}
                        name="lock-closed"
                        size={50}
                        color="white"
                      />
                    ) : (
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        {subLvl > index + 1 ? (
                          // subLevelCompleted.lvlCmplt.includes(index + 1)
                          // subLevelCompleted.includes(index + 1)
                          <Entypo name="check" color="#0bda51" size={50} />
                        ) : (
                          <View
                            style={{
                              width: '100%',
                              height: '100%',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Text style={styles.levelText}>{item.level}</Text>
                          </View>
                        )}
                      </View>
                    )}
                  </LinearGradient>
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
          <GameStartModal
            onPressStart={() => {
              // console.log(category);
              dispatch(setTimerState(true));
              setInfoModalVisible(false);
            }}
            onPressCancel={() => {
              setInfoModalVisible(false);
            }}
            visible={infoModalVisible}
          />

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
export default SubScreen;

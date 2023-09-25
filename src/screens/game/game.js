import React, {useEffect, useState, useRef} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import IconModal from './iconModal';
import Entypo from 'react-native-vector-icons/Entypo';
import PlaySound from '../../../assets/sound/pressSound';
import FlipCard from 'react-native-flip-card';
import GameStartModal from '../../components/gameStartModal';
import AppBackground from '../../components/appBackground ';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Timer from '../../components/Timer';
import Touchableopacity from '../../components/Touchableopacity';
import LoseModal from './loseModal';
import WinModal from '../../components/WinModal';
import {
  setTimerState,
  setTimerPlaying,
  setTimer,
} from '../../../redux/Action/Action';
import GiveUpModal from '../../components/giveUpModal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GreetingModal from '../../components/greeting';
import {
  // Gesture,
  GestureHandlerRootView,
  // ScrollView,
} from 'react-native-gesture-handler';
import GameReset from '../../components/gameReset';
import CardShowing from '../../components/cardShowing';
import {INDEX} from '../../../redux/ActionTyped';

const GameScreen = props => {
  const {t, i18n} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalGiveUpVisible, setModalGiveUpVisible] = useState(false);
  const [modalLoseVisible, setModalLoseVisible] = useState(false);
  const [modalWinVisible, setModalWinVisible] = useState(false);
  const [modalGreetingVisible, setModalGreetingVisible] = useState(false);
  const [modalGameResetVisible, setModalGameResetVisible] = useState(false);
  const [cardShowingVisible, setCardShowingVisible] = useState(false);
  const [length, setLength] = useState(null);
  const [score, setScore] = useState(null);
  const scoreState = useSelector(state => state.score);
  const flipIndex = useSelector(state => state.flipIndex);
  // console.log(flipIndex);
  // const index = useSelector(state => state.score);
  const index = useSelector(state => state.index);
  const time = useSelector(state => state.time);

  const mainLevel = useSelector(state => state.mainLevel);
  const [sublvlState, setSubLvlState] = useState();

  const sublvl1 = useSelector(state => state.subLevel1);
  const sublvl2 = useSelector(state => state.subLevel2);
  const sublvl3 = useSelector(state => state.subLevel3);
  const sublvl4 = useSelector(state => state.subLevel4);
  const sublvl5 = useSelector(state => state.subLevel5);
  const sublvl6 = useSelector(state => state.subLevel6);
  // const subLevel = useSelector(state => state.subLevel);
  const subLevelCompleted = useSelector(state => state.subLvlCmplt);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const numTiles = props.route.params.tiles;
  const Carouseldata = props.route.params.data;
  const flipTimer = props.route.params.flipTime;
  const lvl = props.route.params.lvl;
  const mainIndex = useSelector(state => state.mainIndex);
  const [attempts, setAttempts] = useState();

  // const [Carouseldata, setCarouseldata] = us  eState(props.route.params.data);
  const generateRandomImages = async () => {
    let randomImg = [];
    for (let a = 0; a < numTiles; a++) {
      const randomIndex = Math.floor(Math.random() * Carouseldata.length);
      // console.log(randomIndex);
      if (randomImg.includes(Carouseldata[randomIndex])) {
        a--;
        continue;
      } else {
        randomImg.push(Carouseldata[randomIndex]);
        // console.log(Carouseldata[randomIndex] + 'hhhhhh');
      }
    }
    setData(randomImg);
    // console.log(randomImg + 'cheeeck');
    setLength(randomImg.length);
    setAttempts(randomImg.length);
  };
  // console.log(data);

  useEffect(() => {
    setScore(scoreState);
  }, [scoreState]);

  useEffect(() => {
    if (time === 0) {
      setModalLoseVisible(true);
      setModalVisible(false);
      dispatch(setTimer(50));
      dispatch(setTimerPlaying(false));
    }
  }, [time]);
  // useEffect(() => {
  //   if (mainIndex === 1) {
  //     setSubLvlState(1);
  //   } else if (mainIndex === 2) {
  //     setSubLvlState(2);
  //   } else if (mainIndex === 3) {
  //     setSubLvlState(3);
  //   } else if (mainIndex === 4) {
  //     setSubLvlState(4);
  //   } else if (mainIndex === 5) {
  //     setSubLvlState(5);
  //   } else if (mainIndex === 6) {
  //     setSubLvlState(6);
  //   }
  // }, [mainIndex]);
  useEffect(() => {
    if (index === 1) {
      setSubLvlState(1);
    } else if (index === 2) {
      setSubLvlState(2);
    } else if (index === 3) {
      setSubLvlState(3);
    } else if (index === 4) {
      setSubLvlState(4);
    } else if (index === 5) {
      setSubLvlState(5);
    } else if (index === 6) {
      setSubLvlState(6);
    } else if (index === 7) {
      setSubLvlState(7);
    } else if (index === 8) {
      setSubLvlState(8);
    }
  }, [index]);
  // useEffect(() => {
  //   if (timer === 0) {
  //     setModalLoseVisible(true);
  //     setModalVisible(false);
  //   }

  // }, [timer]);
  const FlippingLogics = item => {
    if (!flipIndex.includes(item)) {
      return true;
    } else {
      return false;
    }
  };
  // useEffect(() => {
  //   if (!flipIndex.includes(index)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }, [flipIndex]);
  useEffect(() => {
    setTimeout(() => {
      setFlipped(true);
      dispatch(setTimerPlaying(true));
      setModalVisible(true);
    }, flipTimer);
  }, [flipped]);
  useEffect(() => {
    generateRandomImages();
  }, []);
  useEffect(() => {
    if (index === 1) {
      setFlipped(true);
    }
    setFlipped();
  }, []);

  // useEffect()
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
              flexDirection: 'row',
              height: 90,
              // marginTop: 25,
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(48, 16, 107, 0.5)',
              width: '100%',
            }}>
            <Image
              source={require('../../../assets/image/bravo.png')}
              style={{width: 100, height: 100, marginTop: 40}}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginEnd: 20,
                width: 80,
                height: 80,
                paddingTop: 30,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'LeagueSpartan-Bold',
                  fontSize: 22,
                }}>
                {t('Level')}
              </Text>
              <Text
                style={{
                  color: '#FFB600',
                  fontFamily: 'LeagueSpartan-Bold',
                  fontSize: 28,
                }}>
                {lvl}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(48, 16, 107, 0.5)',
              marginTop: 5,
              height: 60,
              width: '100%',
            }}>
            <View
              style={{
                // flexDirection: 'row',
                marginStart: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  color: 'white',
                  // marginTop: 5,
                }}>
                {t('Points')}
              </Text>
              {/* <AntDesign name="star" size={24} color="#FFB600" /> */}
              <Text
                style={{
                  fontSize: 26,
                  fontFamily: 'LeagueSpartan-SemiBold',
                  color: '#FFB600',
                  // marginTop: 5,
                }}>
                {score}
              </Text>
            </View>
            <View
              style={{
                marginEnd: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
                backgroundColor: 'rgba(255, 255, 255, 0)',
              }}>
              <Entypo
                style={{marginEnd: 10}}
                name="clock"
                size={20}
                color="white"
              />
              <Timer />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 130,
            }}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-Bold',
                color: 'white',
                fontSize: 40,
              }}>
              {t('Guess The Tiles')}
            </Text>
          </View>
          <FlatList
            style={{alignSelf: 'center'}}
            data={data}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <View>
                  <FlipCard
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flip={flipped ? FlippingLogics(item) : false}
                    clickable={false}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                      }}>
                      {/* <Touchableopacity onPress={() => {}}> */}
                      <View
                        style={{
                          // flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: 90,
                          width: 90,
                          backgroundColor: 'white',
                          borderRadius: 10,
                          margin: 4,
                          borderWidth: 5,
                          borderColor: '#FFB600',
                        }}>
                        <Image
                          source={item}
                          style={{width: '100%', height: '100%'}}
                        />
                      </View>
                      {/* </Touchableopacity> */}
                    </View>
                    <View>
                      <Touchableopacity
                        onPress={() => {
                          // setModalVisible(true);
                        }}
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                        }}>
                        <View
                          style={{
                            // flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 85,
                            width: 85,
                            backgroundColor: 'white',
                            borderRadius: 10,
                            margin: 4,
                            borderWidth: 5,
                            borderColor: '#FFB600',
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                              fontFamily: 'LeagueSpartan-SemiBold',
                              color: '#d4d4ff',
                            }}>
                            ???
                          </Text>
                        </View>
                      </Touchableopacity>
                    </View>
                  </FlipCard>
                </View>
              );
            }}
          />
          <IconModal
            onPressCross={() => {
              setModalGiveUpVisible(true);
              setModalVisible(false);
              dispatch(setTimerPlaying(false));
            }}
            dataLength={length}
            tilesImgs={data}
            visible={modalVisible}
            data={Carouseldata}
            winModal={() => {
              setModalWinVisible(true);
              setModalVisible(false);
              dispatch(setTimer(50));
              dispatch(setTimerPlaying(false));
            }}
            loseModal={() => {
              setModalLoseVisible(true);
              setModalVisible(false);
              dispatch(setTimer(50));
              dispatch(setTimerPlaying(false));
            }}
            onPress={() => {
              if (attempts > 0) {
                setAttempts(prev => prev - 1);
              }
            }}
          />
          <WinModal
            onPressWin={() => {
              if (sublvlState === 8 && mainLevel === 6) {
                setModalGameResetVisible(true);
                setModalWinVisible(false);
                // props.navigation.navigate('');
              } else if (sublvlState === 8 && mainLevel < 6) {
                setModalGreetingVisible(true);
                setModalWinVisible(false);
                // props.navigation.navigate('Main');
                // setModalGreetingVisible(false);
              }
              dispatch(setTimer(50));
              dispatch(setTimerPlaying(false));
              // dispatch(setTimerPlaying(true));
            }}
            onPress={() => {
              if (sublvlState === 8 && mainLevel === 6) {
                // props.navigation.navigate('Main');
              } else {
                props.navigation.goBack();
              }

              setModalWinVisible(false);
              // dispatch(setTimerPlaying(true));
            }}
            visible={modalWinVisible}
          />
          <LoseModal
            imgs={data}
            onPressCancel={() => {
              props.navigation.navigate('Main');
              setModalVisible(false);
              setModalLoseVisible(false);
            }}
            onPressRetry={() => {
              props.navigation.goBack();
              // setCardShowingVisible(true);
              setModalLoseVisible(false);
            }}
            visible={modalLoseVisible}
          />
          <GiveUpModal
            visible={modalGiveUpVisible}
            onPressSi={() => {
              setModalLoseVisible(true);
              setModalVisible(false);
              setModalGiveUpVisible(false);
              dispatch(setTimer(50));
              dispatch(setTimerPlaying(false));
              // dispatch(setTimerPlaying(true));
            }}
            onPressNo={() => {
              setModalGiveUpVisible(false);
              setModalVisible(true);
              dispatch(setTimerPlaying(true));
            }}
          />
          <GreetingModal
            onPress={() => {
              props.navigation.navigate('Main');
              setModalGreetingVisible(false);
              dispatch(setTimer(50));
              dispatch(setTimerPlaying(false));
            }}
            visible={modalGreetingVisible}
          />
          <GameReset
            onPressYes={() => {
              props.navigation.navigate('Main');
              setModalGameResetVisible(false);
              dispatch(setTimer(50));
              dispatch(setTimerPlaying(false));
            }}
            onPressNo={() => {
              props.navigation.navigate('Main');
              setModalGameResetVisible(false);
              dispatch(setTimer(50));
              dispatch(setTimerPlaying(false));
            }}
            visible={modalGameResetVisible}
          />
          {/* visible={modalGreetingVisible} */}
          {/* <CardShowing
        onPressC={() => {
          setCardShowingVisible(false);
        }}
        tilesImgs={data}
        visible={cardShowingVisible}
      /> */}
        </ScrollView>
      </GestureHandlerRootView>
    </AppBackground>
  );
};

export default GameScreen;

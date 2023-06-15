import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import IconModal from './iconModal';
import PlaySound from '../../../assets/sound/pressSound';
import FlipCard from 'react-native-flip-card';
import GameStartModal from '../../components/gameStartModal';
import AppBackground from '../../components/appBackground ';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Timer from '../../components/Timer';
import Touchableopacity from '../../components/Touchableopacity';
import LoseModal from '../../components/loseModal';
import WinModal from '../../components/WinModal';
const GameScreen = props => {
  const {t, i18n} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalLoseVisible, setModalLoseVisible] = useState(false);
  const [modalWinVisible, setModalWinVisible] = useState(false);

  const time = useSelector(state => state.time);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const numTiles = props.route.params.tiles;
  const Carouseldata = props.route.params.data;

  // const [Carouseldata, setCarouseldata] = useState(props.route.params.data);
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
      }
    }
    setData(randomImg);
    console.log(randomImg);
  };

  useEffect(() => {
    generateRandomImages();

    setTimeout(() => {
      setFlipped(true);
      setModalVisible(true);
    }, 2000);
  }, []);
  const data2 = [
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
    {
      level: '6th',
      name: 'Fantasy Forms 3',
      img: 'https://cdn.pixabay.com/photo/2017/12/16/22/26/snowflake-3023441_1280.png',
    },
    {
      level: '6th',
      name: 'Fantasy Forms 3',
      img: 'https://cdn.pixabay.com/photo/2017/12/16/22/26/snowflake-3023441_1280.png',
    },
    {
      level: '6th',
      name: 'Fantasy Forms 3',
      img: 'https://cdn.pixabay.com/photo/2017/12/16/22/26/snowflake-3023441_1280.png',
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
          marginTop: 45,
          alignItems: 'center',
          justifyContent: 'space-between',
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
            2432
          </Text>
        </View>
        <View
          style={{
            width: '35%',
            height: 55,
            backgroundColor: 'whit',
            marginStart: 10,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: '#00b200',
            }}>
            {t('Time Remaining')}
          </Text>
          <Timer />
          {/* <Text
            style={{
              fontSize: 18,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: '#FFB600',
              marginTop: 5,
            }}>
            {time}
          </Text> */}
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 150,
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
        renderItem={({item}) => {
          return (
            <View>
              <FlipCard
                friction={6}
                perspective={1000}
                flipHorizontal={true}
                flip={flipped}
                clickable={true}>
                <View>
                  <Touchableopacity
                    onPress={() => {
                      // PlaySound();
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
                        height: 110,
                        width: 110,
                        // backgroundColor: 'white',
                        //   borderRadius: 10,
                        //   margin: 4,
                        borderWidth: 5,
                        borderColor: '#FFB600',
                      }}>
                      <Image
                        source={item}
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                  </Touchableopacity>
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
                        height: 110,
                        width: 110,
                        backgroundColor: 'white',
                        //   borderRadius: 10,
                        //   margin: 4,
                        borderWidth: 5,
                        borderColor: '#FFB600',
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: 'LeagueSpartan-SemiBold',
                          color: '#00b200',
                        }}>
                        {t('Guess')}
                      </Text>
                    </View>
                  </Touchableopacity>
                </View>
              </FlipCard>
            </View>
          );
        }}
      />
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Touchableopacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{
            width: '90%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            marginBottom: 40,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: 'LeagueSpartan-Bold',
              color: 'white',
            }}>
            {t('End the level')}
          </Text>
        </Touchableopacity>
      </View>

      <IconModal
        tilesImgs={data}
        visible={modalVisible}
        data={Carouseldata}
        winModal={() => {
          setModalWinVisible(true);
          setModalVisible(false);
        }}
        loseModal={() => {
          setModalLoseVisible(true);
          setModalVisible(false);
        }}
        // onPressUp={() => {
        //   setModalLoseVisible(true);
        //   setModalVisible(false);
        // }}
        // onPressDown={() => {
        //   setModalLoseVisible(true);
        //   setModalVisible(false);
        // }}
      />
      <WinModal
        onPress={() => {
          props.navigation.goBack();
          setModalWinVisible(false);
        }}
        visible={modalWinVisible}
      />
      <LoseModal
        onPress={() => {
          props.navigation.navigate('Main');
          setModalLoseVisible(false);
        }}
        visible={modalLoseVisible}
      />
    </AppBackground>
  );
};

export default GameScreen;

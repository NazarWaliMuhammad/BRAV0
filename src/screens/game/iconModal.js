import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  AppRegistry,
  Alert,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

import Touchableopacity from '../../components/Touchableopacity';
const IconModal = props => {
  const imgs = props.data;
  const tilesImgs = props.tilesImgs;
  const imgsLength = props.dataLength;
  // console.log(tilesImgs);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [pressed, setPressed] = useState(0);
  //   const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  //   const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
  const shuffleImgs = () => {
    let randomImg = [];
    for (let a = 0; a < imgs.length; a++) {
      const randomIndex = Math.floor(Math.random() * imgs.length);
      if (randomImg.includes(imgs[randomIndex])) {
        a--;
        continue;
      } else {
        randomImg.push(imgs[randomIndex]);
      }
    }
    setData(randomImg);
    console.log(randomImg.length);
    // console.log(randomImg.length);
  };
  useEffect(() => {
    console.log(imgsLength);
    setPressed(0);
    setCurrentIndex(0);
    shuffleImgs();
  }, []);
  // const width = Dimensions.get('window').width;
  const checkImageUp = () => {
    if (tilesImgs.includes(data[currentIndex])) {
      setRightAnswers(prev => prev + 1);
      // alert('Points Earned');s
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };
  const checkImageDown = () => {
    if (!tilesImgs.includes(data[currentIndex])) {
      // setRightAnswers(prev => prev + 1);

      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(prev => prev + 1);
      // props.();
    }
  };
  const checkRightAnswers = () => {
    console.log(rightAnswers);
    if (rightAnswers === imgsLength) {
      props.winModal();
    } else {
      props.loseModal();
    }
  };
  useEffect(() => {
    if (pressed == imgsLength) {
      checkRightAnswers();
    }
  }, [pressed]);
  return (
    <Modal transparent={true} visible={props.visible}>
      <GestureHandlerRootView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#000000aa',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              height: 200,
              marginBottom: 45,
              borderRadius: 10,
            }}>
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Touchableopacity
                onPress={() => {
                  if (currentIndex > 19) {
                    // checkRightAnswers();
                    setCurrentIndex(0);
                    props.loseModal();
                    console.log(currentIndex);
                    // checkImage()
                    // props.onPressUp();
                  } else {
                    checkImageDown();
                    console.log(currentIndex);
                  }
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name="thumbs-down" size={28} color="white" />
              </Touchableopacity>
              <Image
                source={data[currentIndex]}
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: 10,
                }}
              />
              <Touchableopacity
                onPress={() => {
                  props.onPress();
                  if (currentIndex > 19) {
                    setCurrentIndex(0);
                    props.loseModal();
                    console.log(currentIndex);
                    // checkRightAnswers();
                  } else {
                    setPressed(prev => prev + 1);
                    checkImageUp();
                    console.log(currentIndex);
                  }
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  backgroundColor: 'green',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name="thumbs-up" size={28} color="white" />
              </Touchableopacity>
            </View>
          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

export default IconModal;

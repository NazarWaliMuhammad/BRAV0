import React, {useEffect, useState} from 'react';
import {Image, Modal, View, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {Text} from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {setFlipIndex} from '../../../redux/Action/Action';

import Touchableopacity from '../../components/Touchableopacity';
const IconModal = props => {
  const imgs = props.data;
  const tilesImgs = props.tilesImgs;
  const imgsLength = props.dataLength;
  const flipIndex = useSelector(state => state.flipIndex);
  // console.log(flipIndex);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWronngAnswers] = useState(0);
  // console.log(tilesImgs);
  const [pressed, setPressed] = useState(0);

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
    // console.log(randomImg.length);
  };
  useEffect(() => {
    // console.log(imgsLength);
    setPressed(0);
    setCurrentIndex(0);
    shuffleImgs();
  }, []);

  // const checkFirstImgUp = () => {
  //   if (!tilesImgs.includes(data[0])) {
  //     props.loseModal();
  //   }
  // console.log(data[currentIndex]);

  // };
  const checkImageUp = () => {
    if (tilesImgs.includes(data[currentIndex])) {
      flipIndex.push(data[currentIndex]);
      setRightAnswers(prev => prev + 1);
      setCurrentIndex(prev => prev + 1);
    } else {
      props.loseModal();
      // setCurrentIndex(prev => prev + 1);
      setWronngAnswers(prev => prev + 1);
    }
  };
  // const checkFirstImgDown = () => {
  //   if (tilesImgs.includes(data[0])) {
  //     props.loseModal();

  //     //  setCurrentIndex(prev => prev + 1);
  //   }
  // };
  const checkImageDown = () => {
    if (!tilesImgs.includes(data[currentIndex])) {
      setCurrentIndex(prev => prev + 1);
    } else {
      props.loseModal();
      setCurrentIndex(prev => prev + 1);
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
            // backgroundColor: '#000000aa',ss
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              // backgroundColor: 'white',
              width: '90%',
              height: 230,
              marginBottom: 45,
              borderRadius: 10,
            }}>
            <View
              style={{
                width: '100%',
                height: '10%',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'red',
                // borderTopRightRadius: 10,
                // borderTopLeftRadius: 10,
              }}>
              <Touchableopacity
                style={{
                  // width: 80,
                  height: 40,
                  // backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // borderRadius: 6,
                }}
                onPress={() => {
                  props.onPressCross();
                }}>
                <Entypo name="cross" size={30} color="red" />
              </Touchableopacity>
            </View>

            <View
              style={{
                width: '100%',
                height: '90%',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
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
                  width: 45,
                  height: 45,
                  borderRadius: 30,
                  backgroundColor: 'green',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name="thumbs-up" size={28} color="white" />
              </Touchableopacity>

              <Image
                source={data[currentIndex]}
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: 10,
                  resizeMode: 'stretch',
                }}
              />
              {/*  */}
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
                  width: 45,
                  height: 45,
                  borderRadius: 30,
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo name="thumbs-down" size={28} color="white" />
              </Touchableopacity>
            </View>
          </View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

export default IconModal;

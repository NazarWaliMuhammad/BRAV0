import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import PlaySound from '../../assets/sound/pressSound';
import {useTranslation} from 'react-i18next';
import Touchableopacity from './Touchableopacity';
import {useDispatch, useSelector} from 'react-redux';
import {
  setMainlevel,
  setScore,
  setSublevel,
  setTimer,
} from '../../redux/Action/Action';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const WinModal = props => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(0);
  const [prevMain, setPrevMain] = useState();
  const sublvlState = useSelector(state => state.subLevel);
  const mainlvlState = useSelector(state => state.mainLevel);
  const scoreState = useSelector(state => state.score);
  const [total, setTotalScore] = useState(0);
  //   const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  //   const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
  useEffect(() => {
    setIsOpen(sublvlState);
  }, [sublvlState]);
  useEffect(() => {
    setPrevMain(mainlvlState);
  }, [mainlvlState]);
  useEffect(() => {
    setTotalScore(scoreState);
  }, [scoreState]);
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
  const addToFirestore = async () => {
    if (isOpen === 8) {
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          subLevel: 1,
          mainLevel: mainlvlState + 1,
          score: total,
        })
        .then(() => {
          console.log('User updated!');
        });
    } else {
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          subLevel: sublvlState + 1,
        })
        .then(() => {
          console.log('User updated!');
        });
    }
  };

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
            height: 200,
            borderRadius: 10,
            alignItems: 'center',
            borderWidth: 3,
            borderColor: '#FFB600',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              width: '100%',
              height: 80,
            }}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-Bold',
                fontSize: 50,
                color: '#03D1FF',
              }}>
              BRAVO!!
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              width: '100%',
              height: 45,
            }}>
            <View
              style={{
                width: '63%',
                height: 45,
                backgroundColor: '#FFB600',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 20,
                  color: 'white',
                }}>
                50+ {t('Points Earned')}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              width: '100%',
              height: 55,
            }}>
            <Touchableopacity
              onPress={() => {
                if (isOpen === 8) {
                  dispatch(setSublevel(1));
                  dispatch(setMainlevel(prevMain + 1));
                  // setScore(prev => prev + 50)
                  dispatch(setScore(scoreState + 50));
                  dispatch(setTimer(300));

                  addToFirestore();
                  props.onPressWin();
                  console.log('Done');
                } else {
                  dispatch(setSublevel(isOpen + 1));
                  dispatch(setScore(scoreState + 50));

                  console.log(isOpen);
                  addToFirestore();
                  props.onPress();
                }
              }}
              style={{
                // marginTop: 10,
                width: '50%',
                height: 40,
                backgroundColor: '#03D1FF',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 24,
                  color: 'white',
                  // marginTop: 30,
                }}>
                {t('Continue')}
              </Text>
            </Touchableopacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WinModal;

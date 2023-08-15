import React, {useEffect, useState} from 'react';
import {
  //   Image,
  Modal,
  Text,
  //   TextInput,
  //   TouchableOpacity,
  View,
  //   Dimensions,
} from 'react-native';
// import PlaySound from '../../assets/sound/pressSound';
import {useTranslation} from 'react-i18next';
import Touchableopacity from './Touchableopacity';
import {useDispatch, useSelector} from 'react-redux';
import {
  setGameCompletion,
  setMainlevel,
  setMainLvlCompleted,
  setScore,
  setSublevel,
  setSublevel1,
  setSublevel2,
  setSublevel3,
  setSublevel4,
  setSublevel5,
  setSublevel6,
  setSubLvlCompleted,
  setTimer,
  setTimerPlaying,
  setTimerState,
} from '../../redux/Action/Action';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const GameReset = props => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const sublvlState = useSelector(state => state.subLevel);
  const mainlvlState = useSelector(state => state.mainLevel);
  const scoreState = useSelector(state => state.score);
  const isGameCompleted = useSelector(state => state.gameCompletion);
  const [total, setTotalScore] = useState(0);
  useEffect(() => {
    setTotalScore(scoreState);
  }, [scoreState]);
  //   const mainlvlState = useSelector(state => state.mainLevel);
  //
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
  //   const addToFirestore = async () => {

  //     //  else {
  //     //   firestore()
  //     //     .collection('gameRecord')
  //     //     .doc(auth().currentUser.uid)
  //     //     .update({
  //     //       subLevel: sublvlState + 1,
  //     //     })
  //     //     .then(() => {
  //     //       console.log('User updated!');
  //     //     });
  //     // }
  //   };

  const updatedData = async () => {
    // if (mainlvlState === 6) {
    dispatch(setGameCompletion(isGameCompleted + 1));
    firestore()
      .collection('gameRecord')
      .doc(auth().currentUser.uid)
      .update({
        completed: isGameCompleted + 1,
        subLevel1: 1,
        subLevel2: 1,
        subLevel3: 1,
        subLevel4: 1,
        subLevel5: 1,
        subLevel6: 1,
        mainLevel: 1,
        // subLevelCompleted: [],
        mainLevelCompleted: [],
      })
      .then(() => {
        console.log('data updated');
      });

    dispatch(setSublevel1(1));
    dispatch(setSublevel2(1));
    dispatch(setSublevel3(1));
    dispatch(setSublevel4(1));
    dispatch(setSublevel5(1));
    dispatch(setSublevel6(1));

    // dispatch(setSubLvlCompleted([]));
    dispatch(setMainLvlCompleted([]));
    dispatch(setMainlevel(1));
  };
  const onNo = () => {
    firestore()
      .collection('gameRecord')
      .doc(auth().currentUser.uid)
      .update({
        completed: isGameCompleted + 1,
        mainLevel: 6,
        subLevel: 8,
        subLevelCompleted: [1, 2, 3, 4, 5, 6, 7, 8],
        maiLevelCompleted: [1, 2, 3, 4, 5, 6],
      })
      .then(() => {
        console.log('data updated');
      });
    dispatch(setGameCompletion(isGameCompleted + 1));
    dispatch(setMainlevel(6));
    dispatch(setSublevel(8));
    dispatch(setSubLvlCompleted([1, 2, 3, 4, 5, 6, 7, 8]));
    dispatch(setMainLvlCompleted([1, 2, 3, 4, 5, 6]));
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
            height: 170,
            borderRadius: 10,
            alignItems: 'center',
            borderWidth: 3,
            borderColor: '#FFB600',
            justifyContent: 'center',
          }}>
          {/* <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              width: '100%',
               // height: 80,
            }}> */}
          <Text
            style={{
              fontFamily: 'LeagueSpartan-Bold',
              fontSize: 30,
              color: '#FFB600',
              textAlign: 'center',
              paddingVertical: 8,
            }}>
            {t('Game Completed')}
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'LeagueSpartan-Medium',
              textAlign: 'center',
              fontSize: 20,
              color: 'gray',
              // paddingTop: 5,
            }}>
            {t('Congratulations!! you won the game continue to reset')}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 8,
            }}>
            <Touchableopacity
              onPress={() => {
                updatedData();
                props.onPressYes();
              }}
              style={{
                // marginTop: 10,
                width: '40%',
                height: 40,
                backgroundColor: '#03D1FF',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                // marginTop: 14,
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

export default GameReset;

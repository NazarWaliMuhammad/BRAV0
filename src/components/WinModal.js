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
  setMainLvlCompleted,
  setScore,
  // setSublevel,,
  setSublevel1,
  setSublevel2,
  setSublevel3,
  setSublevel4,
  setSublevel5,
  setSublevel6,
  setSubLvlCompleted,
  setTimer,
  setTimerPlaying,
  setFlipIndex,
} from '../../redux/Action/Action';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {SUB_LEVELS} from '../utils/services/GameServices/LevelUtils';

const WinModal = props => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(0);
  const [prevMain, setPrevMain] = useState();

  // const sublvlState = useSelector(state => state.subLevel);
  const mainlvlState = useSelector(state => state.mainLevel);
  const scoreState = useSelector(state => state.score);
  const index = useSelector(state => state.index);
  const mainIndex = useSelector(state => state.mainIndex);
  const [sublvlState, setSubLvlState] = useState();
  const [sublvl, setSubLvl] = useState();

  const sublvl1 = useSelector(state => state.subLevel1);
  const sublvl2 = useSelector(state => state.subLevel2);
  const sublvl3 = useSelector(state => state.subLevel3);
  const sublvl4 = useSelector(state => state.subLevel4);
  const sublvl5 = useSelector(state => state.subLevel5);
  const sublvl6 = useSelector(state => state.subLevel6);
  const isGameCompleted = useSelector(state => state.gameCompletion);
  const subLevelCompleted = useSelector(state => state.subLvlCmplt);
  const mainLevelCompleted = useSelector(state => state.mainLvlCmplt);

  console.log(sublvlState);
  // const [levelScore, setLevelScore] = useState();
  // console.log(subLevelCompleted.push(index));

  //   const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  //   const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
  useEffect(() => {
    if (mainIndex === 1) {
      setSubLvlState(sublvl1);
    } else if (mainIndex === 2) {
      setSubLvlState(sublvl2);
    } else if (mainIndex === 3) {
      setSubLvlState(sublvl3);
    } else if (mainIndex === 4) {
      setSubLvlState(sublvl4);
    } else if (mainIndex === 5) {
      setSubLvlState(sublvl5);
    } else if (mainIndex === 6) {
      setSubLvlState(sublvl6);
    }
  }, [mainIndex, index]);

  useEffect(() => {
    if (index === 1) {
      setSubLvl(1);
    } else if (index === 2) {
      setSubLvl(2);
    } else if (index === 3) {
      setSubLvl(3);
    } else if (index === 4) {
      setSubLvl(4);
    } else if (index === 5) {
      setSubLvl(5);
    } else if (index === 6) {
      setSubLvl(6);
    } else if (index === 7) {
      setSubLvl(7);
    } else if (index === 8) {
      setSubLvl(8);
    }
  }, [index]);
  // useEffect(() => {
  //   setSubLvlState(sublvlState);
  // }, [sublvlState]);
  useEffect(() => {
    setPrevMain(mainlvlState);
  }, [mainlvlState]);

  const firstIndexCheck = () => {
    console.log(mainIndex);
    if (mainIndex === 1) {
      dispatch(setSublevel1(sublvl1 + 1));
      dispatch(setScore(scoreState + 10));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel1: sublvl1 + 1,
          score: scoreState + 10,
          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 2) {
      dispatch(setSublevel2(sublvl2 + 1));
      dispatch(setScore(scoreState + 10));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel2: sublvl2 + 1,
          score: scoreState + 10,
          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 3) {
      dispatch(setSublevel3(sublvl3 + 1));
      dispatch(setScore(scoreState + 10));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel3: sublvl3 + 1,
          score: scoreState + 10,
          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 4) {
      dispatch(setSublevel4(sublvl4 + 1));
      dispatch(setScore(scoreState + 10));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel4: sublvl4 + 1,
          score: scoreState + 10,
          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 5) {
      dispatch(setSublevel5(sublvl5 + 1));
      dispatch(setScore(scoreState + 10));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel5: sublvl5 + 1,
          score: scoreState + 10,
          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 6) {
      dispatch(setSublevel6(sublvl6 + 1));
      dispatch(setScore(scoreState + 10));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel6: sublvl6 + 1,
          score: scoreState + 10,
          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    }
  };

  const secondIndexCheck = () => {
    if (mainIndex === 1) {
      dispatch(setSublevel1(sublvl1 + 1));
      dispatch(setScore(scoreState + 10));
      dispatch(setMainlevel(mainlvlState + 1));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel1: sublvl1 + 1,
          score: scoreState + 10,
          mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 2) {
      dispatch(setSublevel2(sublvl2 + 1));
      dispatch(setScore(scoreState + 10));
      dispatch(setMainlevel(mainlvlState + 1));

      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel2: sublvl2 + 1,
          score: scoreState + 10,
          mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 3) {
      dispatch(setSublevel3(sublvl3 + 1));
      dispatch(setScore(scoreState + 10));
      dispatch(setMainlevel(mainlvlState + 1));

      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel3: sublvl3 + 1,
          score: scoreState + 10,
          mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 4) {
      dispatch(setSublevel4(sublvl4 + 1));
      dispatch(setScore(scoreState + 10));
      dispatch(setMainlevel(mainlvlState + 1));

      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel4: sublvl4 + 1,
          score: scoreState + 10,
          mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 5) {
      dispatch(setSublevel5(sublvl5 + 1));
      dispatch(setScore(scoreState + 10));
      dispatch(setMainlevel(mainlvlState + 1));

      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel5: sublvl5 + 1,
          score: scoreState + 10,
          mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 6) {
      dispatch(setSublevel6(sublvl6 + 1));
      dispatch(setScore(scoreState + 10));
      dispatch(setMainlevel(mainlvlState + 1));

      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel6: sublvl6 + 1,
          score: scoreState + 10,
          mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    }
  };
  const thirdIndexCheck = () => {
    if (mainIndex === 1) {
      const completed_main_lvls = [...mainLevelCompleted];
      completed_main_lvls.push(mainIndex);
      dispatch(setMainLvlCompleted(completed_main_lvls));
      dispatch(setSublevel1(sublvl1 + 1));
      dispatch(setScore(scoreState + 30));
      //  dispatch(setMainlevel(mainlvlState + 1));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel1: sublvl1 + 1,
          score: scoreState + 30,
          mainLevelCompleted: completed_main_lvls,

          //  mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 2) {
      const completed_main_lvls = [...mainLevelCompleted];
      completed_main_lvls.push(mainIndex);
      dispatch(setMainLvlCompleted(completed_main_lvls));
      dispatch(setSublevel2(sublvl2 + 1));
      dispatch(setScore(scoreState + 30));
      //  dispatch(setMainlevel(mainlvlState + 1));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel2: sublvl2 + 1,
          score: scoreState + 30,
          mainLevelCompleted: completed_main_lvls,

          //  mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 3) {
      const completed_main_lvls = [...mainLevelCompleted];
      completed_main_lvls.push(mainIndex);
      dispatch(setMainLvlCompleted(completed_main_lvls));
      dispatch(setSublevel3(sublvl3 + 1));
      dispatch(setScore(scoreState + 30));
      //  dispatch(setMainlevel(mainlvlState + 1));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel3: sublvl3 + 1,
          score: scoreState + 30,
          mainLevelCompleted: completed_main_lvls,

          //  mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 4) {
      const completed_main_lvls = [...mainLevelCompleted];
      completed_main_lvls.push(mainIndex);
      dispatch(setMainLvlCompleted(completed_main_lvls));
      dispatch(setSublevel4(sublvl4 + 1));
      dispatch(setScore(scoreState + 30));
      //  dispatch(setMainlevel(mainlvlState + 1));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel4: sublvl4 + 1,
          score: scoreState + 30,
          mainLevelCompleted: completed_main_lvls,

          //  mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 5) {
      const completed_main_lvls = [...mainLevelCompleted];
      completed_main_lvls.push(mainIndex);
      dispatch(setMainLvlCompleted(completed_main_lvls));
      dispatch(setSublevel5(sublvl5 + 1));
      dispatch(setScore(scoreState + 30));
      //  dispatch(setMainlevel(mainlvlState + 1));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel5: sublvl5 + 1,
          score: scoreState + 30,
          mainLevelCompleted: completed_main_lvls,

          //  mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
    } else if (mainIndex === 6) {
      const completed_main_lvls = [...mainLevelCompleted];
      completed_main_lvls.push(mainIndex);
      dispatch(setMainLvlCompleted(completed_main_lvls));
      dispatch(setSublevel6(sublvl6 + 1));
      dispatch(setScore(scoreState + 30));
      //  dispatch(setMainlevel(mainlvlState + 1));
      firestore()
        .collection('gameRecord')
        .doc(auth().currentUser.uid)
        .update({
          // subLevel: sublvlState + 1,
          subLevel6: sublvl6 + 1,
          score: scoreState + 30,
          mainLevelCompleted: completed_main_lvls,

          //  mainLevel: mainlvlState + 1,

          // subLevelCompleted: completed_sub_lvls,
          // score: scoreState + 50 ,
        })
        .then(() => {
          console.log('data updated');
        });
      // thirdIndexCheck();
      // const completed_main_lvls = [...mainLevelCompleted];
      // completed_main_lvls.push(mainIndex);
      // dispatch(setMainLvlCompleted(completed_main_lvls));
      // dispatch(setSublevel1(sublvl6 + 1));
      // dispatch(setScore(scoreState + 30));
      // //  dispatch(setMainlevel(mainlvlState + 1));
      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     subLevel1: sublvl6 + 1,
      //     score: scoreState + 30,
      //     mainLevelCompleted: completed_main_lvls,

      //     //  mainLevel: mainlvlState + 1,

      //     // subLevelCompleted: completed_sub_lvls,
      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
    }
  };
  const addToFirestore = async () => {
    // if (
    //   subLevelCompleted.length === 7 &&
    //   mainlvlState < 6 &&
    //   mainIndex < 6 &&
    //   !subLevelCompleted.includes(index) &&
    //   !mainLevelCompleted.includes(mainIndex)
    // ) {
    //   const array = [];

    //   const completed_main_lvls = [...mainLevelCompleted];
    //   completed_main_lvls.push(mainIndex);
    //   dispatch(setSubLvlCompleted([]));
    //   firestore()
    //     .collection('gameRecord')
    //     .doc(auth().currentUser.uid)
    //     .update({
    //       subLevel: 1,
    //       mainLevel: mainlvlState + 1,
    //       mainLevelCompleted: completed_main_lvls,
    //       subLevelCompleted: [],
    //     })
    //     .then(() => {
    //       console.log('data updated');
    //     });

    //   dispatch(setSublevel(1));
    //   dispatch(setMainlevel(prevMain + 1));
    //   dispatch(setMainLvlCompleted(completed_main_lvls));
    //   // dispatch(setSubLvlCompleted([]))
    // } else if (
    //   subLevelCompleted.length === 7 &&
    //   mainlvlState < 6 &&
    //   !subLevelCompleted.includes(index)
    // ) {
    //   const array = [];

    //   firestore()
    //     .collection('gameRecord')
    //     .doc(auth().currentUser.uid)
    //     .update({
    //       subLevel: 1,

    //       subLevelCompleted: [],
    //     })
    //     .then(() => {
    //       console.log('data updated');
    //     });

    //   dispatch(setSublevel(1));
    //   dispatch(setSubLvlCompleted([]));
    // }

    if (
      sublvl < 8 &&
      sublvl != 3 &&
      !mainLevelCompleted.includes(index) &&
      sublvlState === index
    ) {
      console.log(sublvlState + ' Main Levels');

      firstIndexCheck();
    } else if (
      sublvl === 3 &&
      !mainLevelCompleted.includes(index) &&
      sublvlState === index
    ) {
      console.log(mainlvlState + ' Main Levels');
      secondIndexCheck();
    } else if (
      sublvl === 8 &&
      !mainLevelCompleted.includes(index) &&
      sublvlState === index
    ) {
      thirdIndexCheck();
      // const completed_main_lvls = [...mainLevelCompleted];
      // completed_main_lvls.push(mainIndex);
      // dispatch(setMainLvlCompleted(completed_main_lvls));

      // // dispatch(setSublevel(sublvlState + 1));
      // dispatch(setScore(scoreState + 30));
      // firestore()
      //   .collection('gameRecord')
      //   .doc(auth().currentUser.uid)
      //   .update({
      //     // subLevel: sublvlState + 1,
      //     //  subLevel: sublvlState + 1,
      //     score: scoreState + 30,
      //     mainLevelCompleted: completed_main_lvls,

      //     // subLevelCompleted: completed_sub_lvls,
      //     // score: scoreState + 50 ,
      //   })
      //   .then(() => {
      //     console.log('data updated');
      //   });
    }

    // if(subLevelCompleted.length ==)
    // if (sublvlState === 8 && mainlvlState === 6) {
    //   dispatch(setSublevel(1))
    //   // dispatch(setSubLvlCompleted(0));
    //   dispatch(setSubLvlCompleted(0));
    //   dispatch(setScore(scoreState + 30));
    //   firestore()
    //     .collection('gameRecord')
    //     .doc(auth().currentUser.uid)
    //     .update({
    //       // subLevel: sublvlState + 1,
    //       subLevel: 1,
    //       subLevelCompleted: 0,
    //       score: scoreState + 30,s
    //       // score: scoreState + 50 ,
    //     })
    //     .then(() => {
    //       console.log('data updated');
    //     });
    // }

    // if (
    //   (subLevelCompleted.includes(1) ||
    //     subLevelCompleted.includes(2) ||
    //     subLevelCompleted.length < 4) &&
    //   index < 3 &&
    //   !subLevelCompleted.includes(index) &&
    //   !mainLevelCompleted.includes(mainIndex)

    //   // && !subLevelCompleted.includes(index)
    // ) {
    //   const completed_sub_lvls = [...subLevelCompleted];
    //   completed_sub_lvls.push(index);
    //   dispatch(setSubLvlCompleted(completed_sub_lvls));
    //   dispatch(setSublevel(sublvlState + 1));
    //   dispatch(setScore(scoreState + 10));
    //   firestore()
    //     .collection('gameRecord')
    //     .doc(auth().currentUser.uid)
    //     .update({
    //       // subLevel: sublvlState + 1,
    //       subLevel: sublvlState + 1,
    //       score: scoreState + 10,
    //       subLevelCompleted: completed_sub_lvls,
    //       // score: scoreState + 50 ,
    //     })
    //     .then(() => {
    //       console.log('data updated');
    //     });
    // } else if (
    //   subLevelCompleted.includes(1) &&
    //   subLevelCompleted.includes(2) &&
    //   subLevelCompleted.includes(3) &&
    //   index > 3 &&
    //   index < 8 &&
    //   !subLevelCompleted.includes(index) &&
    //   !mainLevelCompleted.includes(mainIndex) &&
    //   subLevelCompleted.length < 7
    // ) {
    //   const completed_sub_lvls = [...subLevelCompleted];
    //   completed_sub_lvls.push(index);
    //   firestore()
    //     .collection('gameRecord')
    //     .doc(auth().currentUser.uid)
    //     .update({
    //       //  subLevel: 1,
    //       //  mainLevel: mainlvlState + 1,
    //       score: scoreState + 10,
    //       subLevelCompleted: completed_sub_lvls,
    //       // score: scoreState + 50 ,
    //     })
    //     .then(() => {
    //       console.log('data updated');
    //     });
    //   dispatch(setScore(scoreState + 10));
    //   dispatch(setSubLvlCompleted(completed_sub_lvls));
    // } else if (
    //   sublvlState === 3 &&
    //   subLevelCompleted.includes(2) &&
    //   index === 3 &&
    //   !subLevelCompleted.includes(index) &&
    //   !mainLevelCompleted.includes(mainIndex)
    // ) {
    //   const completed_sub_lvls = [...subLevelCompleted];
    //   completed_sub_lvls.push(index);
    //   dispatch(setSubLvlCompleted(completed_sub_lvls));
    //   dispatch(setSublevel(8));
    //   dispatch(setScore(scoreState + 10));
    //   firestore()
    //     .collection('gameRecord')
    //     .doc(auth().currentUser.uid)
    //     .update({
    //       // subLevel: sublvlState + 1,
    //       subLevel: 8,
    //       score: scoreState + 10,
    //       subLevelCompleted: completed_sub_lvls,

    //       // score: scoreState + 10,

    //       // score: scoreState + 50 ,
    //     })
    //     .then(() => {
    //       console.log('data updated');
    //     });
    // } else if (
    //   sublvlState === 8 &&
    //   !subLevelCompleted.includes(index) &&
    //   !mainLevelCompleted.includes(mainIndex)
    // ) {
    //   const completed_sub_lvls = [...subLevelCompleted];
    //   completed_sub_lvls.push(index);
    //   dispatch(setScore(scoreState + 30));
    //   // dispatch(setSubLvlCompleted(completed_sub_lvls));

    //   firestore()
    //     .collection('gameRecord')
    //     .doc(auth().currentUser.uid)
    //     .update({
    //       // subLevel: 1,
    //       // mainLevel: mainlvlState + 1,
    //       score: scoreState + 30,
    //       // subLevelCompleted: completed_sub_lvls,
    //       // score: scoreState + 50 ,
    //     })
    //     .then(() => {
    //       console.log('data updated');
    //     });
    // }

    // else if (isOpen === 8 && mainlvlState === 6) {
    //   firestore()
    //     .collection('gameRecord')
    //     .doc(auth().currentUser.uid)
    //     .update({
    //       // subLevel: 1,
    //       mainLevel: 1,
    //       score: total,
    //       completed: isGameCompleted + 1,
    //     })
    //     .then(() => {
    //       console.log('data updated');
    //     });
    //   dispatch(setSublevel(1));
    //   dispatch(setMainlevel(1));
    // }
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
              fontSize: 50,
              color: '#03D1FF',
              textAlign: 'center',
              paddingVertical: 8,
            }}>
            BRAVO!!
          </Text>
          {/* </View> */}
          {/* <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              width: '100%',

              // height: 45,
            }}> */}
          <View
            style={{
              width: '63%',
              height: 45,

              backgroundColor: '#FFB600',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            {sublvlState < 8 ? (
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 18,
                  color: 'white',
                  textAlign: 'center',
                }}>
                10+ {t('Points Earned')}
                {/* { sublvlState < 8 ? 10+ {t('Points Earned')} : ''} */}
              </Text>
            ) : (
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  fontSize: 18,
                  color: 'white',
                  textAlign: 'center',
                }}>
                30+ {t('Points Earned')}
              </Text>
            )}
          </View>
          {/* </View> */}
          {/* <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              width: '100%',
              // height: 55,
              paddingTop: 5,
            }}> */}
          <Touchableopacity
            onPress={() => {
              if (sublvlState === 8) {
                addToFirestore();
                props.onPressWin();
                console.log('Done');
                props.onPress();
                dispatch(setFlipIndex([]));
              } else {
                // dispatch(setTimerPlaying(true));
                dispatch(setFlipIndex([]));
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
              marginTop: 6,
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
          {/* </View> */}
        </View>
      </View>
    </Modal>
  );
};

export default WinModal;

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
  setMainlevel,
  setScore,
  setSublevel,
  setTimer,
  setTimerPlaying,
} from '../../redux/Action/Action';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const GreetingModal = props => {
  const {t, i18n} = useTranslation();

  const mainlvlState = useSelector(state => state.mainLevel);
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
            {t('Congratulations')}
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'LeagueSpartan-Medium',
              textAlign: 'center',
              fontSize: 22,
              color: 'gray',
              paddingTop: 5,
            }}>
            {t('you completed')} {mainlvlState - 1}
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
              props.onPress();
            }}
            style={{
              // marginTop: 10,
              width: '50%',
              height: 40,
              backgroundColor: '#03D1FF',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: 14,
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

export default GreetingModal;

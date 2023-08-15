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

import Entypo from 'react-native-vector-icons/Entypo';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import Touchableopacity from './Touchableopacity';
// import Touchableopacity from '../../components/Touchableopacity';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const GiveUpModal = props => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
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
            height: 150,
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              width: '100%',
              height: 100,
            }}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-Bold',
                fontSize: 30,
                color: '#03D1FF',
                // marginTop: 30,
              }}>
              {t('Do you give up')}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              width: '100%',
              height: 30,
            }}>
            <Touchableopacity
              onPress={() => {
                props.onPressNo();
              }}
              style={{
                marginEnd: 8,
                width: '40%',
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
                {t('No')}
              </Text>
            </Touchableopacity>
            <Touchableopacity
              onPress={() => {
                props.onPressSi();
              }}
              style={{
                // marginTop: 10,
                width: '40%',
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
                {t('Yes')}
              </Text>
            </Touchableopacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GiveUpModal;

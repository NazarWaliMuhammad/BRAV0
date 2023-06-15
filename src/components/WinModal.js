import React, {useState} from 'react';
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
const WinModal = props => {
  const {t, i18n} = useTranslation();
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
            height: 200,
            borderRadius: 10,
            alignItems: 'center',
            borderWidth: 3,
            borderColor: '#FFB600',
          }}>
          <Text
            style={{
              fontFamily: 'LeagueSpartan-Bold',
              fontSize: 50,
              color: '#03D1FF',
              marginTop: 30,
            }}>
            BRAVO!!
          </Text>
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
                marginTop: 10,
              }}>
              50+ {t('Points Earned')}
            </Text>
          </View>
          <Touchableopacity
            onPress={() => {
              props.onPress();
            }}
            style={{
              marginTop: 10,
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
    </Modal>
  );
};

export default WinModal;

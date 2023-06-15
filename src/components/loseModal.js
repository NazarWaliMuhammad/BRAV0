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
import Carousel from 'react-native-reanimated-carousel';
import PlaySound from '../../assets/sound/pressSound';
import Entypo from 'react-native-vector-icons/Entypo';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import Touchableopacity from './Touchableopacity';
import {setTimer} from '../../redux/Action/Action';
const LoseModal = props => {
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
          <Text
            style={{
              fontFamily: 'LeagueSpartan-Bold',
              fontSize: 40,
              color: '#03D1FF',
              marginTop: 30,
            }}>
            GAME OVER!!
          </Text>
          <Touchableopacity
            onPress={() => {
              dispatch(setTimer(300));
              props.onPress();
            }}
            style={{
              marginTop: 10,
              width: '40%',
              height: 50,
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
              {t('Retry')}
            </Text>
          </Touchableopacity>
        </View>
      </View>
    </Modal>
  );
};

export default LoseModal;

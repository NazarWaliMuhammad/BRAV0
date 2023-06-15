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
import Touchableopacity from './Touchableopacity';
const GameStartModal = props => {
  const {t, i18n} = useTranslation();
  const [soundIcon, setSoundIcon] = useState(true);
  const [musicIcon, setMusicIcon] = useState(true);

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
            width: '83%',
            height: 210,
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row-reverse'}}>
            <Touchableopacity style={{marginEnd: 8, marginTop: 8}}>
              <Entypo name="cross" size={30} color="#d3d3d3" />
            </Touchableopacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 4,
            }}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-Bold',
                fontSize: 35,
                color: '#FFB600',
              }}>
              {t('Information')}
            </Text>
          </View>
          <View
            style={{
              width: '60%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-Medium',
                textAlign: 'center',
                fontSize: 19,
                color: 'gray',
              }}>
              {t('Complete All SubLevels In 5 Minutes')}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
            }}>
            <Touchableopacity
              onPress={props.onPressCancel}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '33%',
                height: 40,
                backgroundColor: '#FFCCCB',
                marginEnd: 10,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  textAlign: 'center',
                  fontSize: 17,
                  color: 'red',
                }}>
                {t('Cancel')}
              </Text>
            </Touchableopacity>
            <Touchableopacity
              onPress={props.onPressStart}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '33%',
                height: 40,
                backgroundColor: '#00b200',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-Medium',
                  textAlign: 'center',
                  fontSize: 17,
                  color: 'white',
                }}>
                {t('Start')}
              </Text>
            </Touchableopacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GameStartModal;

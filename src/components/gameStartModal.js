import React from 'react';
import {Modal, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useTranslation} from 'react-i18next';
import Touchableopacity from './Touchableopacity';
const GameStartModal = props => {
  const {t, i18n} = useTranslation();

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
            height: 200,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row-reverse',
              width: '100%',
              height: 20,
              alignItems: 'center',
            }}>
            <Touchableopacity
              onPress={() => {
                props.onPressCancel();
              }}
              style={{
                marginEnd: 8,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Entypo name="cross" size={30} color="#d3d3d3" />
            </Touchableopacity>
          </View>
          {/* <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              width: '100%',
              // height: 40,
            }}> */}
          <Text
            style={{
              fontFamily: 'LeagueSpartan-Bold',
              fontSize: 30,
              color: '#FFB600',
              paddingVertical: 5,
            }}>
            {t('Information')}
          </Text>
          {/* </View> */}
          {/* <View
            style={{
              width: '80%',
              justifyContent: 'center',
              alignItems: 'center',
              // marginTop: 10,
              alignSelf: 'center',
              // height: 50,
            }}> */}
          <Text
            style={{
              width: '90%',
              fontFamily: 'LeagueSpartan-Medium',
              textAlign: 'center',
              fontSize: 19,
              color: 'gray',
              paddingTop: 5,
            }}>
            {t('Complete All SubLevels In 5 Minutes')}
          </Text>
          {/* </View> */}
          <View
            style={{
              // width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              // height: 80,
              paddingTop: 15,
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
              onPress={() => {
                props.onPressStart();
              }}
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

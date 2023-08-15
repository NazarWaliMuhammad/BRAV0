import React from 'react';
import {Image, Modal, View, Text, FlatList} from 'react-native';

import {useTranslation} from 'react-i18next';

import Touchableopacity from './Touchableopacity';
const CardShowing = props => {
  const {t, i18n} = useTranslation();

  return (
    <Modal transparent={true} visible={props.visible}>
      {/* <GestureHandlerRootView style={{flex: 1}}> */}
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
            width: '90%',
            height: 230,
            // marginBottom: 45,
            borderRadius: 10,
          }}>
          <View
            style={{
              // width: '100%',
              height: 165,
              justifyContent: 'center',
              alignItems: 'centers',
            }}>
            <FlatList
              style={{alignSelf: 'center', marginTop: 10}}
              numColumns={4}
              data={props.tilesImgs}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 80,
                      width: 80,
                      backgroundColor: 'white',
                      borderWidth: 5,
                      borderColor: '#FFB600',
                    }}>
                    <Image
                      source={item}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              // height: 130,
            }}>
            <Touchableopacity
              onPress={() => {
                props.onPressC();
              }}
              style={{
                // alignSelf: 'center',
                width: 120,
                height: 45,
                borderRadius: 10,
                backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 7,
              }}>
              {/* <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
               */}
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 18,
                }}>
                {t('Continue')}
              </Text>
              {/* <Entypo name="thumbs-up" size={28} color="white" /> */}
            </Touchableopacity>
          </View>
        </View>
      </View>
      {/* </GestureHandlerRootView>s */}
    </Modal>
  );
};

export default CardShowing;

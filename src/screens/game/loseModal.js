import React from 'react';
import {
  Modal,
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Touchableopacity from '../../components/Touchableopacity';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const LoseModal = props => {
  const {t, i18n} = useTranslation();
  const data = props.imgs;
  return (
    <Modal transparent={true} visible={props.visible}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',

          // backgroundColor: '#000000aa',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <GestureHandlerRootView style={{flex: 1, width: '100%'}}>
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              // width: '100%',
            }}>
            {/* </ScrollView> */}
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.6)',
                width: '100%',
                // height: 270,
                flex: 1,
                // borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '100%',
                  height: 260,
                  justifyContent: 'center',
                  // alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row-reverse'}}>
                  <Touchableopacity
                    style={{
                      // width: 80,
                      // height: 40,
                      margin: 20,
                      // backgroundColor: 'red',

                      // borderRadius: 6,
                    }}
                    onPress={() => {
                      props.onPressCancel();
                    }}>
                    <Entypo name="cross" size={50} color="white" />
                  </Touchableopacity>
                </View>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-Bold',
                    fontSize: 50,
                    color: 'white',
                    paddingVertical: 18,
                    textAlign: 'center',
                  }}>
                  GAME OVER!!
                </Text>
              </View>

              <FlatList
                style={{alignSelf: 'center'}}
                numColumns={3}
                data={data}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                      }}>
                      <Image
                        source={item}
                        style={{
                          width: 100,
                          height: 100,
                          margin: 10,
                          borderRadius: 15,
                          borderWidth: 1,
                          borderColor: 'white',
                        }}
                      />
                    </View>
                  );
                }}
              />

              <View
                style={{
                  width: '100%',
                  height: 200,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Touchableopacity
                  onPress={() => {
                    props.onPressRetry();

                    // setShowSettingsModal(true);
                  }}
                  style={{
                    width: 180,
                    height: 80,
                    borderRadius: 30,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                    opacity: 1,
                    alignSelf: 'center',
                  }}>
                  <LinearGradient
                    colors={['#FF9800', '#FF5722']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.gradient}>
                    <Text
                      style={{
                        fontFamily: 'LeagueSpartan-SemiBold',
                        fontSize: 36,
                        color: 'white',
                      }}>
                      {t('Retry')}
                    </Text>
                    {/* <Ionicons name="settings" size={40} color="white" /> */}
                  </LinearGradient>
                </Touchableopacity>
                {/* <Touchableopacity
              onPress={() => {
              }}
              style={{
                width: '80%',
                height: 50,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                marginBottom: 5,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'LeagueSpartan-SemiBold',
                  fontSize: 24,
                  color: '#03D1FF',
                }}>
                {t('Retry')}
              </Text>
            </Touchableopacity> */}
              </View>
            </View>
          </ScrollView>
        </GestureHandlerRootView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 60,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 50,
    color: '#FFF',
    fontWeight: '900',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default LoseModal;

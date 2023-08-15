import React, {useState, useEffect} from 'react';
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
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const FirstTimeModal = props => {
  const {t, i18n} = useTranslation();
  const [isSelected, setIsSelected] = useState(false);
  const [firstTimeLogin, setFirstTimeLogin] = useState(null);
  //   const [tutorial, setTutorial] = useState(null);

  const data = props.imgs;
  const LanguageSetter = async () => {
    if (isSelected === true) {
      await AsyncStorage.setItem('TUTORIAL', 'TRUE');
    }
    setFirstTimeLogin(false);
  };
  // console.log(langauge);

  const checkFirstTimeLogin = async () => {
    const tutorialData = await AsyncStorage.getItem('TUTORIAL');

    if (tutorialData === null) {
      setFirstTimeLogin(true);
    } else {
      setFirstTimeLogin(false);
    }
  };
  useEffect(() => {
    checkFirstTimeLogin();
  }, []);
  return (
    <Modal transparent={true} visible={firstTimeLogin}>
      <ScrollView
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',

          // backgroundColor: '#000000aa',
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
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
            <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
              <Touchableopacity
                onPress={() => {
                  setFirstTimeLogin(false);
                }}
                style={{marginEnd: 10}}>
                <FontAwesome name="close" size={35} color="white" />
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
              TUTORIAL
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-SemiBold',
                fontSize: 23,
                textAlign: 'center',
                color: 'white',
              }}>
              {t('Tutorial')}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              //   alignSelf: 'center',
              justifyContent: 'space-evenly',
              alignItems: 'flex-end',
              //   width :
              height: 100,
            }}>
            {isSelected ? (
              <Touchableopacity
                onPress={() => {
                  setIsSelected(prev => !prev);
                  // setShowSettingsModal(true);
                }}>
                <Fontisto name="checkbox-active" size={32} color="skyblue" />
              </Touchableopacity>
            ) : (
              <Touchableopacity
                onPress={() => {
                  setIsSelected(prev => !prev);
                  // setShowSettingsModal(true);
                }}>
                <Fontisto name="checkbox-passive" size={32} color="white" />
              </Touchableopacity>
            )}
            <Text
              style={{
                fontFamily: 'LeagueSpartan-SemiBold',
                fontSize: 30,
                color: 'white',
                // paddingVertical: 18,
                marginStart: 16,
                textAlign: 'center',
              }}>
              Do not show again
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 200,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Touchableopacity
              onPress={() => {
                // props.onPressOk();
                LanguageSetter();
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
                  Ok
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
export default FirstTimeModal;

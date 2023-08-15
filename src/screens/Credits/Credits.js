import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import PlaySound from '../../../assets/sound/pressSound';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import SettingModal from '../../components/settingModal';
import Touchableopacity from '../../components/Touchableopacity';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const Credits = props => {
  const {t, i18n} = useTranslation();
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     // try {
  //     const user = await firestore().collection('gameRecord').get();
  //     const extracted = user._docs;
  //     const dataE = extracted.map(item => {
  //       return item._data;
  //     });
  //     // console.log(dataE);

  //     const sortedData = dataE.sort((a, b) => {
  //       // First, compare the scores
  //       if (b.score !== a.score) {
  //         return b.score - a.score;
  //       }
  //       // If scores are the same, compare the names alphabetically
  //       return a.userName.localeCompare(b.userName);
  //     });
  //     // console.log(sortedData);
  //     setData(sortedData);
  //     // } catch (error) {
  //     //   alert(error);
  //     // }
  //     // console.log(dataE);
  //   };
  //   getData();
  // }, [user]);

  return (
    <AppBackground>
      <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}
          // style={styles.sview}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginVertical: 40,
              width: '100%',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 40,
                fontWeight: 900,
                textAlign: 'center',
              }}>
              {t('Credits')}
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 55,
                fontFamily: 'LeagueSpartan-SemiBold',
                // fontWeight: 900,
                textAlign: 'center',
                marginBottom: 30,
              }}>
              Bravo!!
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 26,
                fontFamily: 'LeagueSpartan-SemiBold',
                // fontWeight: 900,
                textAlign: 'center',
                marginBottom: 20,
              }}>
              {t('Created by Marco Dané')}
            </Text>
            <Text
              style={{
                color: 'white',
                // fontSize: 30,
                fontSize: 26,

                fontFamily: 'LeagueSpartan-SemiBold',
                // fontWeight: 900,
                textAlign: 'center',
                marginBottom: 20,
              }}>
              {t('Development and Design: creativeaid.it')}
            </Text>
            <Text
              style={{
                color: 'white',
                // fontSize: 30,
                fontSize: 26,

                fontFamily: 'LeagueSpartan-SemiBold',
                // fontWeight: 900,
                marginBottom: 20,

                textAlign: 'center',
              }}>
              {t('Supervision: Emiliano Dané')}
            </Text>
            <Text
              style={{
                color: 'white',
                // fontSize: 30,
                fontSize: 26,

                fontFamily: 'LeagueSpartan-SemiBold',
                // fontWeight: 900,
                textAlign: 'center',
                marginBottom: 10,
              }}>
              {t('Produced by: Marco Dané and Federica Dané')}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flex: 1,
              marginBottom: 40,
              width: '100%',
            }}>
            <Touchableopacity
              // disabled={subLvl < index + 1 ? true : false}
              onPress={() => {
                props.navigation.goBack();
                // nameCaller();
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 40,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                opacity: 1,
              }}>
              <LinearGradient
                colors={['#FF9800', '#FF5722']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.gradient}>
                <Ionicons name="arrow-back" size={40} color="white" />
              </LinearGradient>
            </Touchableopacity>
            <Touchableopacity
              onPress={() => {
                setShowSettingsModal(true);
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 40,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                opacity: 1,
              }}>
              <LinearGradient
                colors={['#FF9800', '#FF5722']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.gradient}>
                <Ionicons name="settings" size={40} color="white" />
              </LinearGradient>
            </Touchableopacity>
          </View>
          <SettingModal
            onPressK={() => {
              setShowSettingsModal(false);
              PlaySound();
            }}
            visible={showSettingsModal}
            onPressC={() => {
              setShowSettingsModal(false);
              PlaySound();
            }}
          />
        </ScrollView>
      </GestureHandlerRootView>
    </AppBackground>
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
export default Credits;

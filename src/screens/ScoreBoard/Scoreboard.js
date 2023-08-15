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
import PlaySound from '../../../assets/sound/pressSound';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import SettingModal from '../../components/settingModal';
import Touchableopacity from '../../components/Touchableopacity';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Scoreboard = props => {
  const {t, i18n} = useTranslation();
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [data, setData] = useState();
  const user = firestore().collection('gameRecord').get();
  // const extracted = user.docs.map(doc => doc.data());

  const isFocused = useIsFocused();
  console.log(user);
  useEffect(() => {
    const getData = async () => {
      // console.log('Hello');

      try {
        const userSnapshot = await firestore().collection('gameRecord').get();
        const extracted = userSnapshot.docs.map(doc => doc.data());

        // Sort the data based on score and name
        const sortedData = extracted.sort((a, b) => {
          if (b.score !== a.score) {
            // First, compare the scores
            return b.score - a.score;
          } else {
            // If scores are the same, compare the names alphabetically
            return a.userName?.localeCompare(b.userName);
          }
        });
        console.log(sortedData);
        setData(sortedData);
      } catch (error) {
        // Handle the error here
        alert(error);
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [user, isFocused]);

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

  const ScoreCard = ({item, index}) => {
    return (
      <View
        style={{
          width: '95%',
          // width: '100%',

          height: 60,
          borderWidth: 1,
          borderColor: 'white',
          alignSelf: 'center',
          // marginVertical: 4,
          flexDirection: 'row',
          // alignItems: 'center',
          borderTopRightRadius: index + 1 === 1 ? 5 : 0,
          borderTopLeftRadius: index + 1 === 1 ? 5 : 0,
          borderBottomRightRadius: index + 1 === data.length ? 5 : 0,
          borderBottomLeftRadius: index + 1 === data.length ? 5 : 0,
        }}>
        <View
          style={{
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
            height: 55,
            borderWidth: 1,
            borderRightColor: 'white',
            // backgroundColor: 'rgba(0,0,0,0.1)',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>{index + 1}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '75%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '60%',
              // borderLeftWidth: 1,
              height: 60,
              // borderLeftColor: 'white',
              justifyContent: 'center',
              alignItems: 'flex-start',

              // alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontWeight: '500',
                // width: '50%',
                marginLeft: 10,
                textAlign: 'left',
              }}>
              {item.userName}
            </Text>
          </View>
          <View
            style={{
              width: '20%',
              borderLeftWidth: 1,
              height: 60,
              borderLeftColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              // borderRightWidth: 1,
              // borderRightColor: 'white',
              // alignSelf: 'center',
            }}>
            {item.completed === 0 ? (
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  alignSelf: 'center',
                  width: '20%',
                }}>
                *
              </Text>
            ) : (
              // </View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontWeight: 'bold',
                  // textAlign: 'center',
                  alignSelf: 'center',
                  // width: '20%',
                }}>
                Top {item.completed}
              </Text>
            )}
          </View>

          {/* <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: 'bold',
              textAlign: 'center',
              width: '20%',
            }}></Text> */}
          <View
            style={{
              width: '32%',
              borderLeftWidth: 1,
              // borderRightWidth: 1,
              // borderRightColor: 'white',

              height: 60,

              borderLeftColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {item.score}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <AppBackground>
      {/* <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            // flexGrow: 1,
          }}
          // style={styles.sview}
        > */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginVertical: 20,
          width: '100%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 35,
            fontWeight: 900,
            textAlign: 'center',
          }}>
          {t('scoreboard')}
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            fontWeight: 300,
            textAlign: 'center',
          }}>
          Show the scores of different users here
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'flex-start',
          width: '100%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            paddingEnd: 10,
            paddingBottom: 10,
            // fontWeight: 300,
            // textAlign: 'left',
          }}>
          Points
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item, index}) => <ScoreCard item={item} index={index} />}
      />
      {/* </ScrollView>
      </GestureHandlerRootView> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
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
      {/* </View> */}

      <SettingModal
        onPressLogOut={() => {
          props.navigation.navigate('Login');
          setSettingModal(false);
        }}
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
export default Scoreboard;

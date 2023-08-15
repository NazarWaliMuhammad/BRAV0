import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlaySound from '../../../assets/sound/pressSound';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import SettingModal from '../../components/settingModal';
import Touchableopacity from '../../components/Touchableopacity';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
const PlayerDetails = props => {
  const {t, i18n} = useTranslation();
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [data, setData] = useState();
  const user = firestore().collection('gameRecord').get();
  useEffect(() => {
    const getData = async () => {
      const user = await firestore().collection('gameRecord').get();
      const extracted = user._docs;
      const dataE = extracted.map(item => {
        return item._data;
      });
      const sortedData = dataE.sort((a, b) => {
        // First, compare the scores
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        // If scores are the same, compare the names alphabetically
        return a.userName.localeCompare(b.userName);
      });
      // console.log(sortedData);
      setData(sortedData);
    };
    getData();
  }, [user]);

  return (
    <AppBackground>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginVertical: 20,
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
      <FlatList
        data={data}
        renderItem={({item, index}) => <ScoreCard item={item} index={index} />}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          marginBottom: 40,
        }}>
        <Touchableopacity
          // disabled={subLvl < index + 1 ? true : false}
          onPress={() => {
            props.navigation.goBack();
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
export default PlayerDetails;

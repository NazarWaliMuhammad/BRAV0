import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlaySound from '../../../assets/sound/pressSound';
import SettingModal from '../../components/settingModal';
import {MAIN_LEVLES} from '../../utils/services/GameServices/LevelUtils';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import Touchableopacity from '../../components/Touchableopacity';
import GameStartModal from '../../components/gameStartModal';
const MainScreen = props => {
  const {t, i18n} = useTranslation();

  const [icon, setIcon] = useState(true);
  const [settingModal, setSettingModal] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [name, setName] = useState();
  const data = [
    {
      level: '1st',
      name: 'Animals',
      img: '../../../assets/image/animal01.png',
      isLocked: false,
    },
    {
      level: '2nd',
      name: 'People',
      img: '',
      isLocked: true,
    },
    {
      level: '3rd',
      name: 'Sports',
      img: '',
      isLocked: true,
    },
    {
      level: '4th',
      name: 'Fantasy Forms 1',
      img: '',
      isLocked: true,
    },
    {
      level: '5th',
      name: 'Fantasy Forms 2',
      img: '',
      isLocked: true,
    },
    {
      level: '6th',
      name: 'Fantasy Forms 3',
      img: '',
      isLocked: true,
    },
  ];
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
    //     backgroundColor: '#00b200',
    //   }}>
    <AppBackground>
      <View
        style={{
          flexDirection: 'row-reverse',
          marginTop: 40,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '35%',
            height: 55,
            backgroundColor: 'white',
            marginEnd: 10,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: '#00b200',
              textAlign: 'center',
            }}>
            {t('ScoreBoard')}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: '#FFB600',
              marginTop: 5,
            }}>
            2432
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 130,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: 'LeagueSpartan-SemiBold',
            color: 'white',
          }}>
          {t('Main Levels')}
        </Text>
      </View>
      <FlatList
        style={{alignSelf: 'center'}}
        data={data}
        numColumns={3}
        renderItem={({item, index}) => {
          return (
            <Touchableopacity
              disabled={item.isLocked}
              onPress={() => {
                setName(item.name);
                // props.navigation.navigate('Sub', {
                //   name: item.name,
                // });
                setInfoModalVisible(true);
              }}
              style={{
                alignSelf: 'center',
                width: '29%',
                height: 180,
                margin: 8,
                backgroundColor: 'white',
                borderRadius: 15,
                opacity: item.isLocked ? 0.5 : 1,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    fontSize: 18,
                    marginTop: 10,
                    color: '#00b200',
                  }}>
                  {item.level}
                </Text>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    fontSize: 22,
                    marginTop: 5,
                    color: '#FFB600',
                  }}>
                  {t('Level')}
                </Text>
                <ImageBackground
                  source={{
                    uri: 'https://cdn.pixabay.com/photo/2013/07/13/13/14/tiger-160601_1280.png',
                  }}
                  style={{width: 85, height: 88, marginTop: 6}}>
                  {item.isLocked ? (
                    <Ionicons
                      style={{alignSelf: 'center'}}
                      name="lock-closed"
                      size={85}
                      color="red"
                    />
                  ) : (
                    ''
                  )}
                </ImageBackground>
                <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    fontSize: 15,
                    color: '#00b200',
                    marginTop: 8,
                  }}>
                  {item.name}
                </Text>
              </View>
            </Touchableopacity>
          );
        }}
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
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 40,
            margin: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="arrow-back" size={40} color="#00b200" />
        </Touchableopacity>
        <Touchableopacity
          onPress={() => {
            setSettingModal(true);
          }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 40,
            margin: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="settings" size={40} color="#00b200" />
        </Touchableopacity>
      </View>
      <GameStartModal
        onPressStart={() => {
          setInfoModalVisible(false);
          props.navigation.navigate('Sub', {
            name: name,
          });
        }}
        onPressCancel={() => {
          setInfoModalVisible(false);
        }}
        visible={infoModalVisible}
      />
      <SettingModal
        onPressK={() => {
          setSettingModal(false);
        }}
        visible={settingModal}
        onPressC={() => {
          setSettingModal(false);
        }}
      />
    </AppBackground>
  );
};

export default MainScreen;

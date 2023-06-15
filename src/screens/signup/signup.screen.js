import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlaySound from '../../../assets/sound/pressSound';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import Touchableopacity from '../../components/Touchableopacity';
const SignUpScreen = props => {
  const [icon, setIcon] = useState(true);
  const {t, i18n} = useTranslation();

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
    //     // backgroundColor: '#00b200',
    //   }}>
    <AppBackground>
      <View style={{marginTop: 40}}>
        <Touchableopacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{marginStart: 15}}>
          <FontAwesome name="long-arrow-left" size={28} color="white" />
        </Touchableopacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 280,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 280,
            height: 110,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/image/bravo.png')}
            style={{width: 300, height: 300}}
          />
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 26,
            fontFamily: 'LeagueSpartan-Medium',
            marginVertical: -10,
            marginBottom: 20,
          }}>
          {t('Register yourself')}
        </Text>
      </View>
      <View style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '85%',
            height: 55,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 12,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <MaterialCommunityIcons
            style={{marginStart: 10}}
            name="alphabet-latin"
            size={33}
            color="black"
          />
          <TextInput
            placeholder={t('Username')}
            style={{
              width: '80%',
              height: 55,
              marginStart: 10,
              fontFamily: 'LeagueSpartan-Bold',
              fontSize: 19,
            }}
            placeholderTextColor="gray"
          />
        </View>

        <View
          style={{
            width: '85%',
            height: 55,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 12,
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              style={{marginStart: 14}}
              name="key"
              size={30}
              color="black"
            />

            <TextInput
              placeholder={t('Password')}
              style={{
                width: '70%',
                height: 55,
                marginStart: 10,
                fontFamily: 'LeagueSpartan-Bold',
                fontSize: 19,
              }}
              placeholderTextColor="gray"
            />
          </View>

          <Touchableopacity
            onPress={() => {
              setIcon(prev => !prev);
            }}>
            {icon ? (
              <MaterialCommunityIcons
                style={{marginEnd: 30}}
                name="eye-off"
                size={28}
                color="black"
              />
            ) : (
              <MaterialCommunityIcons
                style={{marginEnd: 30}}
                name="eye"
                size={28}
                color="black"
              />
            )}
          </Touchableopacity>
        </View>

        <Touchableopacity
          onPress={() => {}}
          style={{
            marginTop: 30,
            width: '85%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFB600',
            borderRadius: 12,
            elevation: 4,
            shadowOffset: {width: 0, height: 0},
            shadowColor: 'black',
            shadowRadius: 12,
            shadowOpacity: 0.1,
          }}>
          <Text
            style={{
              fontFamily: 'LeagueSpartan-SemiBold',
              color: 'white',
              fontSize: 27,
            }}>
            {t('SignUp')}
          </Text>
        </Touchableopacity>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
          <Text
            style={{
              fontFamily: 'LeagueSpartan-Medium',
              fontSize: 18,
              color: 'white',
            }}>
            {t('Already have an account')}
          </Text>
          <Touchableopacity
            onPress={() => {
              props.navigation.navigate('Login');
            }}
            style={{marginStart: 5}}>
            <Text
              style={{
                fontFamily: 'LeagueSpartan-SemiBold',
                fontSize: 18,
                color: 'red',
              }}>
              {t('Login')}
            </Text>
          </Touchableopacity>
        </View>
      </View>
    </AppBackground>
  );
};

export default SignUpScreen;

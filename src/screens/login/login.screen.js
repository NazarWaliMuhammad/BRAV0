import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, Image, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import firestore from '@react-native-firebase/firestore';
import AppBackground from '../../components/appBackground ';
import Touchableopacity from '../../components/Touchableopacity';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const loginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [icon, setIcon] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [addLanguage, setAddLanguage] = useState(null);
  const {t, i18n} = useTranslation();
  useEffect(() => {
    const getLanguage = async () => {
      const LanguageCode = await AsyncStorage.getItem('Selected_Language');
      setAddLanguage(LanguageCode);
      console.log(LanguageCode);
    };
    getLanguage();
  }, []);

  const signUp = () => {
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(`${email}@Bravo.com`, password)
      .then(() => {
        // alert('Succesfully signed up!');
        props.navigation.navigate('Home');
        firestore()
          .collection('gameRecord')
          .doc(auth().currentUser.uid)
          .set({
            userName: email,
            score: 0,
            mainLevel: 1,
            subLevel1: 1,
            subLevel2: 1,
            subLevel3: 1,
            subLevel4: 1,
            subLevel5: 1,
            subLevel6: 1,
            completed: 0,
            mainLevelCompleted: [],
          })
          .then(() => {
            // getData();
            console.log('User added!');
          });

        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          alert('That Username is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          alert('That Username is invalid!');
        } else if (error.code === 'auth/weak-password') {
          alert('Password should be greater than 6 characters');
        } else if (error.code === 'auth/network-request-failed') {
          alert('Network Request Failed');
        } else {
          setIsLoading(false);
          alert(error.code);
        }

        // alert(JSON.stringify(error));
      });
  };

  const login = () => {
    if (email.length === 0 || password.length === 0) {
      alert('Please enter Email and Password');
    } else if (password.length < 6) {
      alert('Password should be greater than 6 characters');
    } else {
      setIsLoading(true);
      auth()
        .signInWithEmailAndPassword(`${email}@Bravo.com`, password)
        .then(() => {
          props.navigation.navigate('Home');
          setIsLoading(false);
          // getData(auth().currentUser.uid);
        })
        .catch(error => {
          setIsLoading(false);

          if (error.code === 'auth/user-not-found') {
            signUp();
            // alert('That Username is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            alert('That Username is invalid!');
          } else if (error.code === 'auth/weak-password') {
            alert('Password should be greater than 6 characters');
          } else {
            setIsLoading(false);
            alert(error.code);

            // alert(error);
          }
        });
    }
  };
  return (
    <AppBackground>
      <Spinner visible={isLoading} textStyle={{color: '#FFF'}} />

      <GestureHandlerRootView
      // style={{flex: 1}
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}
          // style={styles.sview}
        >
          {/* <ScrollView style={{flex :1 ,jus}} > */}
          {/* <GestureHandlerRootView></GestureHandlerRootView> */}
          <View
            style={{
              width: '100%',
              height: 350,
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
                style={{width: 220, height: 220}}
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
              {t('Login')}/{t('Register yourself')}
            </Text>
            {/* <Text
          style={{
            color: 'white',
            fontSize: 60,
            fontFamily: 'LeagueSpartan-Bold',
            marginTop: 60,
          }}>
          BRAVO!!
        </Text> */}
          </View>

          <View
            style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
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
                autoCapitalize={false}
                value={email}
                onChangeText={val => {
                  setEmail(val);
                }}
                placeholder={t('Username')}
                style={{
                  width: '80%',
                  height: 55,
                  marginStart: 10,
                  fontFamily: 'LeagueSpartan-Bold',
                  fontSize: 19,
                  color: 'black',
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
                  secureTextEntry={icon}
                  autoCapitalize={false}
                  value={password}
                  onChangeText={val => {
                    setPassword(val);
                  }}
                  placeholder={t('Password')}
                  style={{
                    width: '70%',
                    height: 55,
                    marginStart: 10,
                    fontFamily: 'LeagueSpartan-Bold',
                    fontSize: 19,
                    color: 'black',
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
              onPress={() => {
                login();
              }}
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
                {t('Login')}
              </Text>
            </Touchableopacity>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </AppBackground>
  );
};

export default loginScreen;

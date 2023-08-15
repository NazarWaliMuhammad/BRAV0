import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loginScreen from '../screens/login/login.screen';
import HomeScreen from '../screens/Home/Home';
import MainScreen from '../screens/MainLevels/MainLevels';
import SplashScreen from '../screens/splash/splash';
import SubScreen from '../screens/sublevels/sublevels';
import GameScreen from '../screens/game/game';
import FirstTimeLogin from '../screens/FirstTimeLogin/FirstTimeLogin';
import Scoreboard from '../screens/ScoreBoard/Scoreboard';
import {useSelector} from 'react-redux';
import PlayerDetails from '../screens/PlayerDetails/PlayerDetails';
// import Credtis from '../screens/Credits/Credits/Credits';
import Credits from '../screens/Credits/Credits';
import CreatorScreen from '../screens/Creator/Creator';
// import Credits from '../../';

function Main() {
  const Stack = createNativeStackNavigator();
  const MUSIC = useSelector(state => state.music);

  useEffect(() => {
    let Sound = require('react-native-sound');

    // Enable playback in silence mode
    Sound.setCategory('Playback');

    // Load the sound file 'whoosh.mp3' from the app bundle

    let whoosh = new Sound('hipjazz.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully

      whoosh.setNumberOfLoops(-1);
      // Play the sound with an onEnd callback
      if (MUSIC === 'true') {
        whoosh.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      } else {
        whoosh.stop(() => {
          console.log('Stopped');
        });
        // whoosh = new Sound('', Sound.MAIN_BUNDLE);
      }
    });
    return () => {
      if (whoosh) {
        whoosh.stop();
        whoosh.release();
      }
    };
    // See notes below about preloading sounds within initialization code below.
  }, [MUSIC]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Creator" component={CreatorScreen} />
        <Stack.Screen name="FirstTimeLogin" component={FirstTimeLogin} />

        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scoreboard" component={Scoreboard} />
        <Stack.Screen name="Credits" component={Credits} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Sub" component={SubScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;

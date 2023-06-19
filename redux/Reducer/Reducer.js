import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  MAIN_LEVELS,
  SCORE,
  SET_SOUND,
  SET_TIMER,
  SUB_LEVELS,
  TIMER_STATE,
  USER_NAME,
} from '../ActionTyped';
const setSound = AsyncStorage.getItem('SETTING_SOUND');
const INITIAL = {
  time: 300,
  sound: true,
  mainLevel: 1,
  subLevel: 1,
  userName: '',
  score: 0,
  timerState: false,
};
console.log(INITIAL.sound);
export const Reducer = (state = INITIAL, action) => {
  switch (action.type) {
    case SET_TIMER:
      return {...state, time: action.payload};
    case SET_SOUND:
      return {...state, sound: action.payload};
    case MAIN_LEVELS:
      return {...state, mainLevel: action.payload};
    case SUB_LEVELS:
      return {...state, subLevel: action.payload};
    case USER_NAME:
      return {...state, userName: action.payload};
    case SCORE:
      return {...state, score: action.payload};
    case TIMER_STATE:
      return {...state, timerState: action.payload};
    default:
      return state;
  }
};

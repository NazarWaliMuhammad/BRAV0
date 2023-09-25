import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLIP_INDEX,
  GAME_COMPLETION,
  INDEX,
  MAINLVLCOMPLETED,
  MAINLVLINDEX,
  MAINLVL_NAME,
  MAIN_LEVELS,
  SCORE,
  SET_MUSIC,
  SET_SOUND,
  SET_TIMER,
  SUBLVLCOMPLETED,
  // SUB_LEVELS,
  SUB_LEVELS1,
  SUB_LEVELS2,
  SUB_LEVELS3,
  SUB_LEVELS4,
  SUB_LEVELS5,
  SUB_LEVELS6,
  TIMER_PLAYING,
  TIMER_STATE,
  USER_NAME,
} from '../ActionTyped';
const setSound = AsyncStorage.getItem('SETTING_SOUND');
const INITIAL = {
  time: 50,
  sound: true,
  music: true,
  mainLevel: 1,
  subLevel1: 1,
  subLevel2: 1,
  subLevel3: 1,
  subLevel4: 1,
  subLevel5: 1,
  subLevel6: 1,
  userName: '',
  score: 0,
  timerState: false,
  name: '',
  timerPlaying: true,
  gameCompletion: 0,
  index: 0,
  subLvlCmplt: [],
  mainIndex: 0,
  mainLvlCmplt: [],
  flipIndex: [],
};
// console.log(INITIAL.sound);
export const Reducer = (state = INITIAL, action) => {
  switch (action.type) {
    case SET_TIMER:
      return {...state, time: action.payload};
    case SET_SOUND:
      return {...state, sound: action.payload};
    case SET_MUSIC:
      return {...state, music: action.payload};
    case MAIN_LEVELS:
      return {...state, mainLevel: action.payload};
    case SUB_LEVELS1:
      return {...state, subLevel1: action.payload};
    case SUB_LEVELS2:
      return {...state, subLevel2: action.payload};
    case SUB_LEVELS3:
      return {...state, subLevel3: action.payload};
    case SUB_LEVELS4:
      return {...state, subLevel4: action.payload};
    case SUB_LEVELS5:
      return {...state, subLevel5: action.payload};
    case SUB_LEVELS6:
      return {...state, subLevel6: action.payload};
    case USER_NAME:
      return {...state, userName: action.payload};
    case SCORE:
      return {...state, score: action.payload};
    case TIMER_STATE:
      return {...state, timerState: action.payload};
    case MAINLVL_NAME:
      return {...state, name: action.payload};
    case TIMER_PLAYING:
      return {...state, timerPlaying: action.payload};
    case GAME_COMPLETION:
      return {...state, gameCompletion: action.payload};
    case INDEX:
      return {...state, index: action.payload};
    case SUBLVLCOMPLETED:
      return {...state, subLvlCmplt: action.payload};
    case MAINLVLINDEX:
      return {...state, mainIndex: action.payload};
    case MAINLVLCOMPLETED:
      return {...state, mainLvlCmplt: action.payload};
    case FLIP_INDEX:
      return {...state, flipIndex: action.payload};
    default:
      return state;
  }
};

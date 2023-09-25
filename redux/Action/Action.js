import {
  MAINLVL_NAME,
  MAIN_LEVELS,
  SCORE,
  SET_MUSIC,
  SET_SOUND,
  SET_TIMER,
  SUB_LEVELS,
  TIMER_STATE,
  USER_NAME,
  TIMER_PLAYING,
  GAME_COMPLETION,
  INDEX,
  SUBLVLCOMPLETED,
  MAINLVLINDEX,
  MAINLVLCOMPLETED,
  SUB_LEVELS1,
  SUB_LEVELS2,
  SUB_LEVELS3,
  SUB_LEVELS4,
  SUB_LEVELS5,
  SUB_LEVELS6,
  FLIP_INDEX,
} from '../ActionTyped';
export const setTimer = time => ({
  //   return {
  type: SET_TIMER,
  payload: time,
  //   };
});
export const setSound = soundVal => ({
  //   return {
  type: SET_SOUND,
  payload: soundVal,
  //   };
});
export const setMusic = musicVal => ({
  //   return {
  type: SET_MUSIC,
  payload: musicVal,
  //   };
});
export const setMainlevel = mainLvl => ({
  //   return {
  type: MAIN_LEVELS,
  payload: mainLvl,
  //   };
});
export const setSublevel1 = subLvl1 => ({
  //   return {
  type: SUB_LEVELS1,
  payload: subLvl1,
  //   };
});
export const setSublevel2 = subLvl2 => ({
  //   return {
  type: SUB_LEVELS2,
  payload: subLvl2,
  //   };
});
export const setSublevel3 = subLvl3 => ({
  //   return {
  type: SUB_LEVELS3,
  payload: subLvl3,
  //   };
});
export const setSublevel4 = subLvl4 => ({
  //   return {
  type: SUB_LEVELS4,
  payload: subLvl4,
  //   };
});
export const setSublevel5 = subLvl5 => ({
  //   return {
  type: SUB_LEVELS5,
  payload: subLvl5,
  //   };
});
export const setSublevel6 = subLvl6 => ({
  //   return {
  type: SUB_LEVELS6,
  payload: subLvl6,
  //   };
});
export const setUserName = usrname => ({
  //   return {
  type: USER_NAME,
  payload: usrname,
  //   };
});
export const setScore = scr => ({
  //   return {
  type: SCORE,
  payload: scr,
  //   };
});

export const setTimerState = sts => ({
  //   return {
  type: TIMER_STATE,
  payload: sts,
  //   };
});
export const setMainLvlName = name => ({
  //   return {
  type: MAINLVL_NAME,
  payload: name,
  //   };
});
export const setTimerPlaying = playing => ({
  //   return {
  type: TIMER_PLAYING,
  payload: playing,
  //   };
});
export const setGameCompletion = completion => ({
  //   return {
  type: GAME_COMPLETION,
  payload: completion,
  //   };
});
export const setIndex = index => ({
  //   return {
  type: INDEX,
  payload: index,
  //   };
});
export const setSubLvlCompleted = lvlCmplt => ({
  //   return {
  type: SUBLVLCOMPLETED,
  payload: lvlCmplt,
  //   };
});
export const setMainIndex = Mainindex => ({
  //   return {
  type: MAINLVLINDEX,
  payload: Mainindex,
  //   };
});
export const setMainLvlCompleted = MainlvlCmplt => ({
  //   return {
  type: MAINLVLCOMPLETED,
  payload: MainlvlCmplt,
  //   };
});
export const setFlipIndex = Findex => ({
  type: FLIP_INDEX,
  payload: Findex,
});

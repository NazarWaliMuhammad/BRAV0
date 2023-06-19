import {
  MAIN_LEVELS,
  SCORE,
  SET_SOUND,
  SET_TIMER,
  SUB_LEVELS,
  TIMER_STATE,
  USER_NAME,
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
export const setMainlevel = mainLvl => ({
  //   return {
  type: MAIN_LEVELS,
  payload: mainLvl,
  //   };
});
export const setSublevel = subLvl => ({
  //   return {
  type: SUB_LEVELS,
  payload: subLvl,
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

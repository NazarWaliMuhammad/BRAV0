// Timer.js

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, StyleSheet} from 'react-native';
import {setTimer} from '../../redux/Action/Action';

const Timer = () => {
  const time = useSelector(state => state.time);
  const isPlayingTimer = useSelector(state => state.timerPlaying);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isPlayingTimer === true) {
      const interval = setInterval(() => {
        if (time > 0) {
          dispatch(setTimer(time - 1));
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, isPlayingTimer]);

  return (
    <Text
      style={{
        fontSize: 20,
        fontFamily: 'LeagueSpartan-SemiBold',
        color: 'white',

        textAlign: 'center',
      }}>
      {time} Sec
    </Text>
  );
};

export default Timer;

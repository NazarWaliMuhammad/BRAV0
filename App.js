import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from './src/navigator/MainNav';
import {Provider} from 'react-redux';
import {mystore} from './redux/Store/store';
const App = () => {
  const [icon, setIcon] = useState(true);
  return (
    <Provider store={mystore}>
      <Main />
    </Provider>
  );
};

export default App;

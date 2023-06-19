import React, {useEffect, useState} from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PlaySound from '../../../assets/sound/pressSound';
import SettingModal from '../../components/settingModal';
import GameStartModal from '../../components/gameStartModal';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import Timer from '../../components/Timer';
import Touchableopacity from '../../components/Touchableopacity';
import LoseModal from '../../components/loseModal';
import {setTimer, setTimerState} from '../../../redux/Action/Action';

// import {ANIMALS_IMGS} from '../../utils/services/GameServices/LevelUtils';
const SubScreen = props => {
  const dispatch = useDispatch();
  const [isTimer, setIsTimer] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [category, setCategory] = useState(null);
  const [modalLoseVisible, setModalLoseVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [subLvl, setSubLvl] = useState(null);
  const [score, setScore] = useState(null);
  const sub_levels = useSelector(state => state.subLevel);
  const timer = useSelector(state => state.time);
  const scoreState = useSelector(state => state.score);
  const timerState = useSelector(state => state.timerState);
  useEffect(() => {
    if (props.route.params.name === 'Animals') {
      setCategory([
        require('../../../assets/image/animal_01.png'),
        require('../../../assets/image/animal_02.png'),
        require('../../../assets/image/animal_03.png'),
        require('../../../assets/image/animal_04.png'),
        require('../../../assets/image/animal_05.png'),
        require('../../../assets/image/animal_06.png'),
        require('../../../assets/image/animal_07.png'),
        require('../../../assets/image/animal_08.png'),
        require('../../../assets/image/animal_09.png'),
        require('../../../assets/image/animal_10.png'),
        require('../../../assets/image/animal_11.png'),
        require('../../../assets/image/animal_12.png'),
        require('../../../assets/image/animal_13.png'),
        require('../../../assets/image/animal_14.png'),
        require('../../../assets/image/animal_15.png'),
        require('../../../assets/image/animal_16.png'),
        require('../../../assets/image/animal_17.png'),
        require('../../../assets/image/animal_18.png'),
        require('../../../assets/image/animal_19.png'),
        require('../../../assets/image/animal_20.png'),
      ]);
    }
    if (props.route.params.name === 'People') {
      setCategory([
        require('../../../assets/image/animal_01.png'),
        require('../../../assets/image/animal_02.png'),
        require('../../../assets/image/animal_03.png'),
        require('../../../assets/image/animal_04.png'),
        require('../../../assets/image/animal_05.png'),
        require('../../../assets/image/animal_06.png'),
        require('../../../assets/image/animal_07.png'),
        require('../../../assets/image/animal_08.png'),
        require('../../../assets/image/animal_09.png'),
        require('../../../assets/image/animal_10.png'),
        require('../../../assets/image/animal_11.png'),
        require('../../../assets/image/animal_12.png'),
        require('../../../assets/image/animal_13.png'),
        require('../../../assets/image/animal_14.png'),
        require('../../../assets/image/animal_15.png'),
        require('../../../assets/image/animal_16.png'),
        require('../../../assets/image/animal_17.png'),
        require('../../../assets/image/animal_18.png'),
        require('../../../assets/image/animal_19.png'),
        require('../../../assets/image/animal_20.png'),
      ]);
    }
    if (props.route.params.name === 'Sports') {
      setCategory([
        require('../../../assets/image/animal_01.png'),
        require('../../../assets/image/animal_02.png'),
        require('../../../assets/image/animal_03.png'),
        require('../../../assets/image/animal_04.png'),
        require('../../../assets/image/animal_05.png'),
        require('../../../assets/image/animal_06.png'),
        require('../../../assets/image/animal_07.png'),
        require('../../../assets/image/animal_08.png'),
        require('../../../assets/image/animal_09.png'),
        require('../../../assets/image/animal_10.png'),
        require('../../../assets/image/animal_11.png'),
        require('../../../assets/image/animal_12.png'),
        require('../../../assets/image/animal_13.png'),
        require('../../../assets/image/animal_14.png'),
        require('../../../assets/image/animal_15.png'),
        require('../../../assets/image/animal_16.png'),
        require('../../../assets/image/animal_17.png'),
        require('../../../assets/image/animal_18.png'),
        require('../../../assets/image/animal_19.png'),
        require('../../../assets/image/animal_20.png'),
      ]);
    }
    if (props.route.params.name === 'Fantasy Forms 1') {
      setCategory([
        require('../../../assets/image/animal_01.png'),
        require('../../../assets/image/animal_02.png'),
        require('../../../assets/image/animal_03.png'),
        require('../../../assets/image/animal_04.png'),
        require('../../../assets/image/animal_05.png'),
        require('../../../assets/image/animal_06.png'),
        require('../../../assets/image/animal_07.png'),
        require('../../../assets/image/animal_08.png'),
        require('../../../assets/image/animal_09.png'),
        require('../../../assets/image/animal_10.png'),
        require('../../../assets/image/animal_11.png'),
        require('../../../assets/image/animal_12.png'),
        require('../../../assets/image/animal_13.png'),
        require('../../../assets/image/animal_14.png'),
        require('../../../assets/image/animal_15.png'),
        require('../../../assets/image/animal_16.png'),
        require('../../../assets/image/animal_17.png'),
        require('../../../assets/image/animal_18.png'),
        require('../../../assets/image/animal_19.png'),
        require('../../../assets/image/animal_20.png'),
      ]);
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/09/27/16/10/fractal-960918_1280.jpg',
      //   },
      // ]);
    }
    if (props.route.params.name === 'Fantasy Forms 2') {
      setCategory([
        require('../../../assets/image/animal_01.png'),
        require('../../../assets/image/animal_02.png'),
        require('../../../assets/image/animal_03.png'),
        require('../../../assets/image/animal_04.png'),
        require('../../../assets/image/animal_05.png'),
        require('../../../assets/image/animal_06.png'),
        require('../../../assets/image/animal_07.png'),
        require('../../../assets/image/animal_08.png'),
        require('../../../assets/image/animal_09.png'),
        require('../../../assets/image/animal_10.png'),
        require('../../../assets/image/animal_11.png'),
        require('../../../assets/image/animal_12.png'),
        require('../../../assets/image/animal_13.png'),
        require('../../../assets/image/animal_14.png'),
        require('../../../assets/image/animal_15.png'),
        require('../../../assets/image/animal_16.png'),
        require('../../../assets/image/animal_17.png'),
        require('../../../assets/image/animal_18.png'),
        require('../../../assets/image/animal_19.png'),
        require('../../../assets/image/animal_20.png'),
      ]);
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2014/11/20/15/33/balls-539359_1280.jpg',
      //   },
      // ]);
    }
    if (props.route.params.name === 'Fantasy Forms 3') {
      setCategory([
        require('../../../assets/image/animal_01.png'),
        require('../../../assets/image/animal_02.png'),
        require('../../../assets/image/animal_03.png'),
        require('../../../assets/image/animal_04.png'),
        require('../../../assets/image/animal_05.png'),
        require('../../../assets/image/animal_06.png'),
        require('../../../assets/image/animal_07.png'),
        require('../../../assets/image/animal_08.png'),
        require('../../../assets/image/animal_09.png'),
        require('../../../assets/image/animal_10.png'),
        require('../../../assets/image/animal_11.png'),
        require('../../../assets/image/animal_12.png'),
        require('../../../assets/image/animal_13.png'),
        require('../../../assets/image/animal_14.png'),
        require('../../../assets/image/animal_15.png'),
        require('../../../assets/image/animal_16.png'),
        require('../../../assets/image/animal_17.png'),
        require('../../../assets/image/animal_18.png'),
        require('../../../assets/image/animal_19.png'),
        require('../../../assets/image/animal_20.png'),
      ]);
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/12/31/12/46/mystical-1115610_1280.jpg',
      //   },
      // ]);
    }
  }, []);
  useEffect(() => {
    setIsTimer(timerState);
  }, [timerState]);
  useEffect(() => {
    if (timer === 0) {
      setModalLoseVisible(true);
    }
  }, [timer]);
  useEffect(() => {
    setScore(scoreState);
  }, [scoreState]);
  useEffect(() => {
    setSubLvl(sub_levels);
    console.log(sub_levels);
  }, [sub_levels]);
  // console.log(category);

  // // }, 2000);
  // console.log(imagesData);

  // props.navigation.navigate('Game', {
  //   data: imagesData,
  // });
  // console.log(imagesData);

  const data = [
    {
      level: '1st',
      img: 'https://img.freepik.com/free-vector/seamless-pattern-vintage-stone-hexagonal-tiles-textured-paving-background-bright-geometric-tiles_172107-1295.jpg?w=826&t=st=1685810197~exp=1685810797~hmac=a1d2e1d1cb94bc52666246398c4da5d44cb28250fe5ae59d5fde28f04278a2e5',
      color: '#88CCEE',
      difficulty: 'Begginer',
      onPress: () => {
        setInfoModalVisible(true);
        // props.navigation.navigate('Game', {
        //   data: category,
        //   tiles: 2,
        // });
      },
      img: require('../../../assets/image/level01.png'),
      isLocked: false,

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '2nd',

      img: 'https://cdn.pixabay.com/photo/2022/03/24/16/30/gardener-7089417_1280.png',
      color: '#55BBAA',
      difficulty: 'Easy',

      onPress: () => {
        props.navigation.navigate('Game', {
          data: category,
          tiles: 3,
        });
      },
      img: require('../../../assets/image/level02.png'),
      isLocked: true,

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '3rd',

      img: 'https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png',
      color: '#FFBB66',
      difficulty: 'Intermediate',

      onPress: () => {
        props.navigation.navigate('Game', {
          data: category,
          tiles: 4,
        });
      },
      img: require('../../../assets/image/level03.png'),
      isLocked: true,

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '4th',

      img: 'https://cdn.pixabay.com/photo/2019/02/19/16/53/rock-4007203_1280.png',
      color: '#FF8866',
      difficulty: 'Advanced',

      onPress: () => {
        props.navigation.navigate('Game', {
          data: category,
          tiles: 5,
        });
      },
      img: require('../../../assets/image/level04.png'),
      isLocked: true,

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '5th',

      img: 'https://cdn.pixabay.com/photo/2021/02/07/19/37/drawing-5992475_1280.png',
      color: '#FF5555',
      difficulty: 'Expert',

      onPress: () => {
        props.navigation.navigate('Game', {
          data: category,
          tiles: 6,
        });
      },
      img: require('../../../assets/image/level05.png'),
      isLocked: true,

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '6th',

      img: 'https://cdn.pixabay.com/photo/2017/12/16/22/26/snowflake-3023441_1280.png',
      color: '#AA4488',
      difficulty: 'Master',

      onPress: () => {
        props.navigation.replace('Game', {
          data: category,
          tiles: 7,
        });
      },
      img: require('../../../assets/image/level06.png'),
      isLocked: true,

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '7th',

      img: 'https://cdn.pixabay.com/photo/2017/12/16/22/26/snowflake-3023441_1280.png',
      color: '#8844AA',
      difficulty: 'Prodigy',

      onPress: () => {
        props.navigation.replace('Game', {
          data: category,
          tiles: 8,
        });
      },
      img: require('../../../assets/image/level07.png'),
      isLocked: true,

      // .map(item => {
      //   return item.image;
      // }),
    },
    {
      level: '8th',

      img: 'https://cdn.pixabay.com/photo/2017/12/16/22/26/snowflake-3023441_1280.png',
      color: '#332288',
      difficulty: 'Grandmaster',

      onPress: () => {
        props.navigation.navigate('Game', {
          data: category,
          tiles: 9,
        });
      },
      img: require('../../../assets/image/level08.png'),
      isLocked: true,
      // .map(item => {
      //   return item.image;
      // }),
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
          marginTop: 45,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '30%',
            height: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            marginEnd: 10,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <AntDesign name="star" size={24} color="#FFB600" />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: 'white',
              marginTop: 5,
            }}>
            {score}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 100,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Touchableopacity style={{}} onPress={() => {}}>
          <Image
            source={require('../../../assets/image/back.png')}
            style={{width: 60, height: 60}}
          />
        </Touchableopacity>
        <Text
          style={{
            fontSize: 60,
            fontFamily: 'LeagueSpartan-SemiBold',
            color: 'white',
          }}>
          {props.route.params.name}
        </Text>
        <Touchableopacity style={{}} onPress={() => {}}>
          <Image
            source={require('../../../assets/image/next.png')}
            style={{width: 60, height: 60}}
          />
        </Touchableopacity>
      </View>

      <View
        style={{
          width: 100,
          height: 30,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          flexDirection: 'row',
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <AntDesign
          name="clockcircleo"
          size={20}
          color="white"
          style={{marginStart: 14}}
        />
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {timerState ? (
            <Timer />
          ) : (
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'LeagueSpartan-SemiBold',
                color: 'white',
                marginTop: 5,
                textAlign: 'center',
              }}>
              Start
            </Text>
          )}

          {/* <Text
            style={{
              fontSize: 16,
              fontFamily: 'LeagueSpartan-SemiBold',
              color: 'white',
              marginTop: 5,
              textAlign: 'center',
            }}>
            {time}
          </Text> */}
        </View>
      </View>
      <FlatList
        style={{alignSelf: 'center'}}
        data={data}
        numColumns={3}
        renderItem={({item, index}) => {
          return (
            <Touchableopacity
              disabled={subLvl < index + 1 ? true : false}
              onPress={item.onPress}
              style={{
                alignSelf: 'center',
                // width: '28%',
                // height: 135,
                margin: 8,
                // backgroundColor: 'white',
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: subLvl < index + 1 ? 0.5 : 1,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <ImageBackground
                  source={item.img}
                  style={{
                    width: 105,
                    height: 105,
                    marginTop: 6,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {subLvl < index + 1 ? (
                    <Ionicons
                      style={{alignSelf: 'center'}}
                      name="lock-closed"
                      size={70}
                      color="red"
                    />
                  ) : (
                    ''
                  )}
                </ImageBackground>
                {/* <Text
                  style={{
                    fontFamily: 'LeagueSpartan-SemiBold',
                    fontSize: 18,
                    color: '#03D1FF',
                    marginTop: 8,
                  }}>
                  {item.name} Tiles
                </Text> */}
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
            width: 60,
            height: 60,
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
            width: 60,
            height: 60,
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
          dispatch(setTimerState(true));
          setInfoModalVisible(false);
          props.navigation.navigate('Game', {
            data: category,
            tiles: 2,
          });
        }}
        onPressCancel={() => {
          setInfoModalVisible(false);
        }}
        visible={infoModalVisible}
      />
      <LoseModal
        onPress={() => {
          if (timer === 0) {
            props.navigation.navigation('Main');
            setModalLoseVisible(false);
            dispatch(setTimerState(false));
          } else {
            props.navigation.goBack();
            setModalLoseVisible(false);
          }
        }}
        visible={modalLoseVisible}
      />
      <SettingModal
        onPressK={() => {
          setSettingModal(false);
          PlaySound();
        }}
        visible={settingModal}
        onPressC={() => {
          setSettingModal(false);
          PlaySound();
        }}
      />
    </AppBackground>
  );
};

export default SubScreen;

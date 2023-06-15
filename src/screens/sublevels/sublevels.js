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
import {useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PlaySound from '../../../assets/sound/pressSound';
import SettingModal from '../../components/settingModal';
import GameStartModal from '../../components/gameStartModal';
import AppBackground from '../../components/appBackground ';
import {useTranslation} from 'react-i18next';
import Timer from '../../components/Timer';
import Touchableopacity from '../../components/Touchableopacity';

// import {ANIMALS_IMGS} from '../../utils/services/GameServices/LevelUtils';
const SubScreen = props => {
  const [settingModal, setSettingModal] = useState(false);
  const [category, setCategory] = useState(null);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const {t, i18n} = useTranslation();
  const time = useSelector(state => state.time);
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
      // setCategory([
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      //   {
      //     image:
      //       'https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_1280.jpg',
      //   },
      // ]);
    }
    if (props.route.params.name === 'Sports') {
      setCategory([
        'https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png',
        'https://cdn.pixabay.com/photo/2013/07/12/14/07/basketball-147794_1280.png',
        'https://cdn.pixabay.com/photo/2012/04/18/23/18/dart-38220_1280.png',
        'https://cdn.pixabay.com/photo/2012/04/05/01/45/baseball-25761_1280.png',
        'https://cdn.pixabay.com/photo/2013/07/13/10/51/bowling-157933_1280.png',
        'https://cdn.pixabay.com/photo/2016/06/14/15/01/vector-1456759_1280.png',
        'https://cdn.pixabay.com/photo/2017/01/31/23/28/football-2028191_1280.png',
        'https://cdn.pixabay.com/photo/2013/07/13/09/46/baseball-155990_1280.png',
        'https://cdn.pixabay.com/photo/2017/03/18/16/20/chess-2154429_1280.png',
        'https://cdn.pixabay.com/photo/2013/03/22/23/28/football-96041_1280.png',
        'https://cdn.pixabay.com/photo/2017/01/31/23/30/motocross-2028197_1280.png',
        'https://cdn.pixabay.com/photo/2018/02/24/23/01/engine-3179431_1280.png',
        'https://cdn.pixabay.com/photo/2016/04/01/09/42/athletics-1299524_1280.png',
        'https://cdn.pixabay.com/photo/2013/07/13/09/45/tennis-racket-155963_1280.png',
        'https://cdn.pixabay.com/photo/2014/04/02/17/00/golf-307610_1280.png',
        'https://cdn.pixabay.com/photo/2017/01/31/15/31/tennis-2025095_1280.png',
        'https://cdn.pixabay.com/photo/2012/04/05/01/48/volleyball-25782_1280.png',
        'https://cdn.pixabay.com/photo/2013/07/13/09/41/petanque-155945_1280.png',
        'https://cdn.pixabay.com/photo/2019/02/15/02/49/graphic-3997741_1280.png',
        'https://cdn.pixabay.com/photo/2012/04/14/13/10/football-33864_1280.png',
      ]);
    }
    if (props.route.params.name === 'Fantasy Forms 1') {
      // setCategory([
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
      // setCategory([
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
      // setCategory([
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
        props.navigation.navigate('Game', {
          data: category,
          tiles: 2,
        });
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
        props.navigation.navigate('Game', {
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
        props.navigation.navigate('Game', {
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
            2432
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
          <Timer />

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
              disabled={item.isLocked}
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
                opacity: item.isLocked ? 0.5 : 1,
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
                  {item.isLocked ? (
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

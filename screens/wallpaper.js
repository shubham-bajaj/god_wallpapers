import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../assets/index';

const {width} = Dimensions.get('window');

const data = [
  {
    id: 1,
    title: 'image1',
  },
  {
    id: 2,
    title: 'image2',
  },
  {
    id: 3,
    title: 'image3',
  },
  {
    id: 4,
    title: 'image4',
  },
  {
    id: 5,
    title: 'image5',
  },
  {
    id: 6,
    title: 'image6',
  },
  {
    id: 7,
    title: 'image7',
  },
  {
    id: 8,
    title: 'image8',
  },
  {
    id: 9,
    title: 'image9',
  },
];

const WallpaperScreen = ({route}) => {
  let fname = route.params.fname;
  // console.log(fname);
  // console.log("total images: "+Object.keys(Images[fname]).length);
  const noOfImages = Object.keys(Images[fname]).length;
  const limitedData = data.slice(0, noOfImages);
  const numColumns = 2;
  const navigation = useNavigation();
  const [netdata, setNetData] = useState([]);
  const [movies, setMovies] = useState([]);
  // const f = 'shiv'

  const handlePress = item => {
    // navigation.navigate('SetWallpaper', {title: item.title, fname: fname});
    navigation.navigate('SetWallpaper', {imageLink:item.imageLink});

  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => {
          handlePress(item);
        }}>
        <View style={styles.card}>
          {/* <Image style={styles.image} source={Images[fname][item.title]} /> */}
          <Image style={styles.image} source={{
          uri: item.imageLink,
        }} />
        <Text>{item.imageLink}</Text>
          
        </View>
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    fetch(`http://192.168.29.80:8000/api/images/?fname=${fname}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(jsonRes => setNetData(jsonRes))
      .catch(error => console.log(error));
    
  }

  , []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFF', '#FFA07A', '#FF7F50']}
        style={styles.linearGradient}>
        <FlatList
          // data={limitedData}
          data={netdata}

          renderItem={renderItem}
          // keyExtractor={item => item.id.toString()}
          numColumns={numColumns}
          initialNumToRender={2}
          showsVerticalScrollIndicator={false}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 5,
    width: (width - 20) / 2,
    padding: 12,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: (width - 20) / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 0,
  },
});

export default WallpaperScreen;


// [
//   {"fname": "ganesh", 
//   "imageLink": "https://images.news18.com/ibnlive/uploads/2022/08/lord-ganesha-ganesh-festival-700-172145429.jpg",
//   },
//   {"fname": "hindugod", 
//   "imageLink": "https://images.news18.com/ibnlive/uploads/2022/08/lord-ganesha-ganesh-festival-700-172145429.jpg",
//   }

// ]
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

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
];

const WallpaperScreen = () => {
  const imageSource = require('../assets/ganesh/ganesh_img_1.jpeg');
  const numColumns = 2;
  const [selectedImage, setSelectedImage] = useState();
  const navigation = useNavigation();


  const handlePress = (item) => {
   console.log("Hello")
    navigation.navigate('SetWallpaper', {title: item.title});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={{flex: 1}} onPress={()=>{handlePress(item)}}>
        <View style={styles.card}>
          <Image style={styles.image} source={Images.ganesh[item.title]} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 5,
    width: (width - 20) / 2,
  },
  image: {
    width: '100%',
    height: (width - 20) / 2,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});

export default WallpaperScreen;

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

const {width} = Dimensions.get('window');

const data = [
  {
    id: 1,
    image: require('../assets/ganesh/ganesh_img_1.jpeg'),
    title: 'Image 1',
  },
  {
    id: 2,
    image: require('../assets/ganesh/ganesh_img_2.jpeg'),
    title: 'Image 2',
  },

  {
    id: 4,
    image: require('../assets/ganesh/ganesh_img_4.jpeg'),
    title: 'Image 4',
  },
  {
    id: 5,
    image: require('../assets/ganesh/ganesh_img_5.jpeg'),
    title: 'Image 5',
  },
  {
    id: 6,
    image: require('../assets/ganesh/ganesh_img_6.jpeg'),
    title: 'Image 6',
  },
];

const WallpaperScreen = () => {
  const imageSource = require('../assets/ganesh/ganesh_img_1.jpeg');
  const numColumns = 2;
  const [selectedImage, setSelectedImage] = useState();
  const navigation = useNavigation();
  const handlePress = (item) => {
   console.log("Hello")
    navigation.navigate('SetWallpaper');
  };

  const renderItem = ({item}) => {
    
    return (
      <TouchableOpacity style={{flex: 1}} onPress={()=>{handlePress(item)}}>
        <View style={styles.card}>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
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

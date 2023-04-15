// import React from 'react';
// import {View, Text, Button} from 'react-native';

// function WallpaperScreen({navigation,route}) {
//     const {title} = route.params
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>{title}</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => navigation.push('Details')}
//         />
//         <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//         <Button title="Go back" onPress={() => navigation.goBack()} />
//       </View>
//     );
//   }

//   export default WallpaperScreen;
import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

const { width } = Dimensions.get('window');
//assets/ganesh/ganesh_img_ 0.jpg
const data = [
  { id: 1, image: require('../assets/ganesh/ganesh_img_1.jpeg'), title: 'Image 1' },
  { id: 2, image: require('../assets/ganesh/ganesh_img_2.jpeg'), title: 'Image 2' },

  { id: 4, image: require('../assets/ganesh/ganesh_img_4.jpeg'), title: 'Image 4' },
  { id: 5, image: require('../assets/ganesh/ganesh_img_5.jpeg'), title: 'Image 5' },
  { id: 6, image: require('../assets/ganesh/ganesh_img_6.jpeg'), title: 'Image 6' },
];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image style={styles.image} source={item.image} />
    {/* <Text style={styles.title}>{item.title}</Text> */}
  </View>
);

const WallpaperScreen = () => {
  const numColumns = 2;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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

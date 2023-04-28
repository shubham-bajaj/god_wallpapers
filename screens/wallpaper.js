import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');


const WallpaperScreen = ({route}) => {
  const navigation = useNavigation();
  const fname = route.params.fname;
  const name = route.params.name;
  const numColumns = 2;
  const [netdata, setNetData] = useState([]);
  const handlePress = item => {
    navigation.navigate('SetWallpaper', {imageLink: item.image, name: name});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => {
          handlePress(item);
        }}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    navigation.setOptions({title: `${name}`});
  }, []);
  useEffect(() => {
    fetch(`http://192.168.29.80:8000/api/?fname=${fname}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(jsonRes => setNetData(jsonRes))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFF', '#FFA07A', '#FF7F50']}
        style={styles.linearGradient}>
        <FlatList
          // data={limitedData}
          data={netdata}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
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

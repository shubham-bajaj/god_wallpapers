import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import NameCard from '../components/nameCardView';
import LinearGradient from 'react-native-linear-gradient';
import {Images, godInfo} from '../assets/index';

function HomeScreen({navigation}) {
 
  const goToWallpaperPage = item => {
    navigation.navigate('Wallpaper', {fname: item.fname, name: item.name});
  };
  const [listData,setListData]=useState(godInfo)
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{justifyContent: 'center', alignItems: 'center'}}
      onPress={() => {
        goToWallpaperPage(item);
      }}
      title={item.name}>
      <NameCard
        title={item.name}
        subtitle={item.subtitle}
        imageSource={Images.icon[item.iconName]}
        bgColor={item.color}
      />
    </TouchableOpacity>
  );
  useEffect(() => {
    fetch(`http://192.168.29.80:8000/category/`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(jsonRes =>setListData(godInfo.concat(jsonRes)))
      
      .catch(error => console.log(error));
   
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFFF', '#FFA07A', '#FF7F50']}
        style={styles.linearGradient}>
        <FlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={item => item.fname}
          style={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 0,
  },
  listContent: {
    paddingBottom: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
  },
});
export default HomeScreen;

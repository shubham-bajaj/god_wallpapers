import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import NameCard from '../components/nameCardView'

function HomeScreen({navigation}) {
    const goToWallpaperPage = () => {
        navigation.navigate('Wallpaper',{title:"Ganeshji"});
      };
  return (
    <View style={{flex: 1,marginTop:10}}>
     
      <TouchableOpacity onPress={goToWallpaperPage} title="Ganesji">
        <NameCard
        title="Ganeshji"
        subtitle="ॐ श्री गणेशाय नमः"
        imageSource={require('../assets/ganeshIcon.png')}
        />
      </TouchableOpacity>
      
    </View>
  );
}

export default HomeScreen;
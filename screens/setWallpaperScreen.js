import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, ToastAndroid, View, Alert} from 'react-native';
import FloatingButton from '../components/floatingButton';

import {useNavigation} from '@react-navigation/native';
//import WallPaperManager from 'react-native-set-wallpaper';
import { setWall } from 'rn-set-wallpaper';
// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6931860583577865/7039403020';


const SetWallpaperScreen = ({route}) => {
  const navigation = useNavigation();
  const imageLink = route.params.imageLink;
  let name = route.params.name;
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Wallpaper Applied Successfully',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  useEffect(() => {
    navigation.setOptions({title: `${name}`});
  }, []);
  async function sw(imageLink){
    //showToastWithGravity();
    const result = await setWall(imageLink);
    if(result===true){
      showToastWithGravity();
    }
    
    
  }
  const handlePress = () => {
    //DIRECTLY FROM NATIVE MODULE
    // NativeModules.WallPaperManager.setWallpaper(
    //     // Image.resolveAssetSource(Images[fname][imgTitle]),
    //     Image.resolveAssetSource(imageLink),
    //     res => {
    //         console.log(res);
    //         showToastWithGravity();
    //         //navigation.navigate('Wallpaper');
    //         //createTwoButtonAlert();
    //       }
    // );
    //WallPaperManager.setWallpaper({uri: imageLink}, (res)=> console.log(res));
    sw(imageLink);
    // WallPaperManager.setWallpaper({uri: imageLink}, res => {
    //   console.log(res);
    //   showToastWithGravity();
    // });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageLink,
        }}
      />
      <FloatingButton onPress={handlePress} />
      {/* <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
export default SetWallpaperScreen;

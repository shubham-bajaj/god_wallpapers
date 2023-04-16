import React from 'react';
import {Image, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import FloatingButton from '../components/floatingButton';
//import {WallpaperManager} from 'react-native-wallpaper-manager';
import RNSetWallpaper from 'react-native-set-wallpaper';

import WallPaperManager from 'react-native-set-wallpaper';
//import SetWallpaper from 'react-native-set-wallpaper';
import SetWallpaper, {
  WallpaperOptions,
  WallpaperType,
  WallpaperScale,
} from 'react-native-set-wallpaper';

const SetWallpaperScreen = () => {
  // console.log(itemImage)

  // console.log(typeof(image))



  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Wallpaper set successfully',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const handlePress = () => {
    // This code is working where wallpapermanage is from react-native-set-wallpaper
    WallPaperManager.setWallpaper(
      {
        uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      },
      res => {
        console.log(res);
        showToastWithGravity();
      },
    );
  };
  return (
    <View style={styles.container}>
      
      <FloatingButton style={{fontSize: 40}} onPress={handlePress} />
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

// setWallpaperWithOptions
// SetWallpaper.setWallpaperWithOptions({
//     uri: '../assets/ganesh/ganesh_img_1.jpeg', // replace with the path or URL of your image
//     options: {
//       fit: true, // scale the image to fit the screen
//       scale: 'fitXY', // scale the image to fit the screen without preserving aspect ratio
//       wallpaperType: 'lock', // set the wallpaper for the lock screen only
//       cropRect: { x: 0, y: 0, width: 1080, height: 1920 }, // crop the image to a rectangular area
//       outputFormat: 'JPEG', // set the output format to JPEG
//     }
//   }, (res) => {
//     console.log(res);
//   });
// setWallpaperWithOptions();

// handle button press
//setWallpaper('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');
// WallpaperManager.setWallpaper({
//     uri: 'https://i.pinimg.com/originals/76/5e/1d/765e1dc8cb1cc115fb3b0b39a895fdeb.jpg',
//     scale: WallpaperManager.Scales.CENTER_CROP,
//     resizeMode: WallpaperManager.Resolution.FULL,
//   })
//     .then(() => console.log('Wallpaper set'))
//     .catch((error) => console.log(error));

//const setWallpaper = async (imageUrl) => {
//     try {
//       WallpaperManager.setWallpaper({
//         uri: imageUrl,
//         scale: WallpaperManager.Scales.CENTER_CROP,
//         resizeMode: WallpaperManager.Resolution.FULL,
//       });
//       console.log('Wallpaper set:', result);
//     } catch (error) {
//       console.error('Error setting wallpaper:', error);
//     }
//   };
//   const setWallpaper = () => {
//     RNSetWallpaper.se('./assets/ganesh/ganesh_img_1.jpeg', 'HomeScreen')
//       .then(result => console.log('Wallpaper set successfully', result))
//       .catch(error => console.log('Error setting wallpaper', error));
//   };
//   const setWallpaperWithOptions = async () => {
//     const options = {
//     //   wallpaperType: WallpaperType.HOME,
//     //   scale: WallpaperScale.CENTER_CROP,
//     };

//     try {
//       await SetWallpaper.setWallpaperWithOptions('./assets/ganesh/ganesh_img_1.jpeg', options);
//       console.log('Wallpaper set successfully');
//     } catch (error) {
//       console.log('Error setting wallpaper:', error);
//     }
//   };

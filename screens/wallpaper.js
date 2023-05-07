import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
// const adUnitId = __DEV__
//   ? TestIds.BANNER
//   : 'ca-app-pub-6931860583577865/2388071525';
//const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6931860583577865/7039403020';

const {width} = Dimensions.get('window');

import {InterstitialAd, AdEventType} from 'react-native-google-mobile-ads';

// const adUnitId2 = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-6931860583577865/1283733217';

// const interstitial = InterstitialAd.createForAdRequest(adUnitId2, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });

const WallpaperScreen = ({route}) => {
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
  //     setLoaded(true);
  //   });

  //   // Start loading the interstitial straight away
  //   interstitial.load();

  //   // Unsubscribe from events on unmount
  //   return unsubscribe;
  // }, []);

  // // No advert ready to show yet
  // if (!loaded) {
  //   return null;
  // }

  const navigation = useNavigation();
  const fname = route.params.fname;
  const name = route.params.name;
  const numColumns = 2;
  const [netdata, setNetData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handlePress = item => {
    navigation.navigate('SetWallpaper', {imageLink: item.image, name: name});
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            handlePress(item);
          }}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  useEffect(() => {
    navigation.setOptions({title: `${name}`});
    console.log(netdata);
    // interstitial.show();
  }, []);

  useEffect(() => {
    // setIsLoading(true);
    // fetch(`https://shubham204.pythonanywhere.com/api/?fname=${fname}`, {
    //   method: 'GET',
    // })
    //   .then(res => res.json())
    //   .then(jsonRes => setNetData(jsonRes))
    //   .then(setIsLoading(false))
    //   .catch(error => console.log(error));

    async function fetchWallpapaers() {
      try {
        const response = await fetch(
          `https://shubham204.pythonanywhere.com/api/?fname=${fname}`,
          {
            method: 'GET',
          },
        );
        const jsonData = await response.json();
        setNetData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWallpapaers();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        // Render your data here
        <LinearGradient
          colors={['#FFFF', '#FFA07A', '#FF7F50']}
          style={styles.linearGradient}>
          <FlatList
            // data={limitedData}
            data={netdata}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={numColumns}
            initialNumToRender={20}
            showsVerticalScrollIndicator={false}
          />
        </LinearGradient>
      )}

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
    backgroundColor: '#fff',
  },
  card: {
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 0,
    width: (width - 20) / 2,
    padding:12,
    
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

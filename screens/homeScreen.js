import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import NameCard from '../components/nameCardView';
import LinearGradient from 'react-native-linear-gradient';
import {Images, godInfo} from '../assets/index';
// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6931860583577865/7039403020';

// const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });

// // Preload an app open ad
// appOpenAd.load();

// // Show the app open ad when user brings the app to the foreground.
// appOpenAd.show();



function HomeScreen({navigation}) {
 
  const goToWallpaperPage = item => {
    navigation.navigate('Wallpaper', {fname: item.fname, name: item.name});
  };
  const [listData,setListData]=useState(godInfo)
  const [isLoading, setIsLoading] = useState(true);
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
    
    async function categoryData(){
      try {
        const response = await fetch(`http://shubham204.pythonanywhere.com/category/`, {
          method: 'GET',
        });
        const jsonData = await response.json();
        console.log(jsonData)
        setListData(godInfo.concat(jsonData))
        setIsLoading(false)
      } catch (error) {
        console.error(error);
      }
    }
    categoryData()
   
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : (
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
      )}
      {/* <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    /> */}
      
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

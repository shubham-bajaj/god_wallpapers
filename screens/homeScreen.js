import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import NameCard from '../components/nameCardView';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../assets/index';


const godInfo = [
  {
    id: '0',
    name: 'Hindu Gods',
    color: '#FFD580',
    subtitle: 'ॐ नमः शिवाय',
    iconName: 'shivIcon',
    fname:'hinduGod',
  },
  {
    id: '1',
    name: 'Shivji',
    color: '#FFD580',
    subtitle: 'ॐ नमः शिवाय',
    iconName: 'shivIcon',
    fname:'shiva',
  },
  {
    id: '2',
    name: 'Hanumanji',
    color: '#FFD580',
    subtitle: 'जय श्री राम',
    iconName: 'hanumanIcon',
    fname:'hanuman',
  },
  {
    id: '3',
    name: 'Ganeshji',
    color: '#FFD580',
    subtitle: 'ॐ श्री गणेशाय नमः',
    iconName: 'ganeshIcon',
    fname:'ganesh',
  },
  {
    id: '4',
    name: 'krishnaji',
    color: '#FFD580',
    subtitle: 'ॐ जय जगदीश हरे',
    iconName: 'vishnuIcon',
    fname:'vishnu',
  },
  {
    id: '5',
    name: 'Lakshmiji',
    color: '#FFD580',
    subtitle: 'ॐ जय लक्ष्मी माता',
    iconName: 'lakshmiIcon',
    fname:'lakshmi',
  },

];
function HomeScreen({navigation}) {


  const goToWallpaperPage = (item) => {
    navigation.navigate('Wallpaper', {fname:item.fname});
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{justifyContent: 'center', alignItems: 'center'}}
      onPress={()=>{goToWallpaperPage(item)}}
      title={item.name}>
      <NameCard
        title={item.name}
        subtitle={item.subtitle}
        imageSource={Images.icon[item.iconName]}
        bgColor={item.color}
      />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFFF','#FFA07A', '#FF7F50' ]}
        style={styles.linearGradient}>
        <FlatList
          data={godInfo}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
    // paddingTop: 22,
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
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    // borderRadius: 5,
    // marginTop:40,
  },
});
export default HomeScreen;

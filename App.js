import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/homeScreen';
import WallpaperScreen from './screens/wallpaper';
import {StyleSheet} from 'react-native';
import SetWallpaperScreen from './screens/setWallpaperScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Hindu God Wallpaper',
            headerStyle: {
              //backgroundColor: '#f4511e',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              //textAlign:"center",
              flex: 1,
              alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen name="Wallpaper" component={WallpaperScreen} />
        <Stack.Screen
          name="SetWallpaper"
          component={SetWallpaperScreen}
          options={{
            title: 'Set Wallpaper',
            headerStyle: {
              //backgroundColor: '#f4511e',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    borderColor: '#FFF',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    borderWidth: 10,
    borderColor: 'pink',
  },
  headerBackTitle: {
    color: 'black',
    fontSize: 30,
  },
});
export default App;

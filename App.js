import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/homeScreen';
import WallpaperScreen from './screens/wallpaper';
import SetWallpaper from './screens/setWallpaperScreen';
import SetWallpaperScreen from './screens/setWallpaperScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'God Wallpaper'}}
        />
        <Stack.Screen name="Wallpaper" component={WallpaperScreen} />
        <Stack.Screen name="SetWallpaper" component={SetWallpaperScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/homeScreen';
import WallpaperScreen from './screens/wallpaper';
import SetWallpaperScreen from './screens/setWallpaperScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTitleAlign: 'center'}}>
        {/* Home Screen (First Page) */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Hindu God Wallpaper',
          }}
        />
        {/* Wallpaper Screen (Second Page) */}
        <Stack.Screen
          name="Wallpaper"
          component={WallpaperScreen}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
        {/* Set Wallpaper Screen (Thrid Page) */}
        <Stack.Screen
          name="SetWallpaper"
          component={SetWallpaperScreen}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

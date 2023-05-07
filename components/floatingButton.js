import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
const FloatingButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={{fontSize: 15, color:'black', padding: 5, fontWeight: 'bold'}}>
          Apply Wallpaper
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
  button: {
    width: 140,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
export default FloatingButton;

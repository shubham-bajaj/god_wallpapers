import React from 'react';
import { View, TouchableOpacity,Text, StyleSheet } from 'react-native';

const FloatingButton = ({ onPress }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style ={{fontSize:50,alignItems:'center' ,justifyContent:'center'}}>+</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f4511e',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
export default FloatingButton;
  
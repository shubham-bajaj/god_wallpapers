import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const NameCard = ({title, subtitle, imageSource, bgColor}) => {
  const containerStyle = {
    backgroundColor: '#FFF',
  };

  return (
    <View style={[styles.mainCardView, containerStyle]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 12, width: 200}}>
          <Text
            style={{
              fontSize: 28,
              color: 'black',
              fontWeight: 'bold',

              textTransform: 'capitalize',
            }}>
            {title}
          </Text>
          <View
            style={{
              marginTop: 4,
              borderWidth: 0,
              width: '85%',
            }}>
            <Text
              style={{
                fontSize: 15,
              }}>
              {subtitle}
            </Text>
          </View>
        </View>
        <View style={styles.subCardView}>
          <Image
            source={imageSource}
            resizeMode="contain"
            style={{
              borderRadius: 25,
              height: 50,
              width: 50,
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  mainCardView: {
    height: 90,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 15,

    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 20,

    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default NameCard;

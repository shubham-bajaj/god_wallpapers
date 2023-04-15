import React from 'react';
import {View,Text,StyleSheet,Image,} from 'react-native';

const NameCard = ({title, subtitle, imageSource}) => {
  return (
    
      <View style={styles.mainCardView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          
          <View style={{marginLeft: 12}}>
            <Text
              style={{
                fontSize: 28,
                color: 'black',
                fontWeight: 'bold',
                //fontFamily: Fonts.nunitoBold,
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
                  //color: Colors.gray,
                  fontSize: 12,
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
  mainCardView: {
    height: 90,
    width:320,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    //shadowColor: Colors.shadow,
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
    marginLeft:100,
    //   backgroundColor: Colors.history_back,
    //   borderColor: Colors.color_eeeeee,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default NameCard;

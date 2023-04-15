import React from "react";

import {Image, Text,View} from 'react-native';
const SetWallpaper = ({ itemImage }) => {

    return(
        <View>
            
            <Image source={itemImage}/>
        
        </View>
    )
}
export default SetWallpaper;
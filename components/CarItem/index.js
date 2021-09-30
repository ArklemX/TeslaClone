import React from 'react';
import { View, Text, ImageBackground, carStylesheet} from 'react-native';
import carStyles from './carStyles';

const CarItem = (props) => {

    return  (
        
      <View style={carStyles.carContainer}>

        <ImageBackground 
          source={require('../../assets/images/ModelS.jpeg')}
          style={carStyles.image}
        />
        

        <View style={carStyles.titles}>
          <Text style={carStyles.title}>Model S</Text>
          <Text style={carStyles.subtitle}>Starting at $46,420</Text>
        </View>
    </View>
    );
};

export default CarItem;
import React from 'react';
import { View, Text, ImageBackground, carStylesheet} from 'react-native';
import carStyles from './carStyles';
import StyledButton from '../StyledButton'

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

        <StyledButton 
          type="Primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order button was pressed !")
          }} />
        <StyledButton 
          type="Secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory button was pressed !")
          }} />
    </View>
    );
};

export default CarItem;
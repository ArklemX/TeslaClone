import React from 'react';
import { View, Text, ImageBackground, carStylesheet} from 'react-native';
import carStyles from './carStyles';
import StyledButton from '../StyledButton'

const CarItem = (props) => {

  const { name,tagline, taglineCTA, image} = props.car;

    return  (
        
      <View style={carStyles.carContainer}>

        <ImageBackground 
          source={image}
          style={carStyles.image}
        />
        

        <View style={carStyles.titles}>
          <Text style={carStyles.title}>{name}</Text>
          <Text style={carStyles.subtitle}>
            {tagline}
            {' '}
            <Text style={carStyles.subtitleCTA}>
              {taglineCTA}
            </Text>
          </Text>
        </View>

        <View style={carStyles.buttonsContainer}>
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
    </View>
    );
};

export default CarItem;
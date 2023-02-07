import { Appearance } from "react-native";


const isDarkMode = Appearance.getColorScheme() === 'dark';

const FontConstants = {
    
}


const ColorConstants = {
    background: isDarkMode ? 'darkgray' : 'white',
    backgroundMedium: isDarkMode ? '#666666'  : '#dddddd',
    fontColor: isDarkMode ? 'black' : 'lightblue',
    hightlightColor: isDarkMode ? 'white' : 'red',

 
}

const SizeConstants = { 
    paddingSmall: 2,
    paddingRegular: 8,
    paddingLarge: 16,
    borderRadius: 8,
    margintop: 36,
}

export {FontConstants, ColorConstants, SizeConstants}
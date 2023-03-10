import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, FlatList} from 'react-native';
import { useFonts } from 'expo-font';
import Icon from './weatherIcon';
import {FontConstant, ColorConstants, SizeConstants} from './componets/globalStyles';

import HourlyWeather from './componets/HourlyWeather';
import WeatherDetail from './componets/WeatherDetail';
import WeatherSummary from './componets/WeatherSummary';
import data from './data'
import { HourlyWeatherMapping } from './componets/HourlyWeatherMapping';
import { CurrentWeather } from './componets/currentweather';
import { WeatherDaily } from './componets/WeatherDaily';


export default function App() {

const [loaded] = useFonts(
  { icomoon: require('./assets/fonts/icomoon.ttf')}
);

if(!loaded) {
  return null;
}
console.log(data);




  return (
    
    <ScrollView style={styles.container}>
     
     <View style={styles.viewContainer}>  
    <Text style={styles.headertext}>TODAY'S WEATHER FOR:</Text>
    </View>
    
     <CurrentWeather/>
     
     <WeatherSummary  />
    
    <View style={styles.iconcontainer}>
      <View>
        <Text style={styles.text}>weather for today</Text>
        <Icon style={styles.icon} name="wi-night-alt-snow" />
     </View>

     <View>
        <Text style={styles.text}>Best Travel</Text>
        <Icon style={styles.icon} name="wi-train" />
     </View>

     <View>
      <Text style={styles.text}>Biggest Fear</Text>
     <Icon style={styles.icon} name="wi-alien" />
     </View>

     </View>
     
     <View>
     <HourlyWeather />
     </View>

    <WeatherDaily/>

     <View>
     
     
     <WeatherDetail />
      {
/*
        data.hourly.map((hour) => {
          return <HourlyWeatherMapping pop={hour.pop} />;
        })*/
      }
      
     </View>
    
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'center',
  
  },

  text: {
    color: ColorConstants.fontColor,
    fontSize: 14

  },
  icon: {
    color: 'lightblue',
    fontSize: 74,
  },
  iconcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 32,
    
  },
  viewContainer: {
    marginTop: SizeConstants.margintop
  },
  headertext: {
    color: 'lightblue',
    fontSize: 36,
    fontWeight: 'bold'
  }
});

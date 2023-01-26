import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from './weatherIcon';

import HourlyWeather from './componets/HourlyWeather';
import WeatherDetail from './componets/WeatherDetail';
import WeatherSummary from './componets/WeatherSummary';



export default function App() {

const [loaded] = useFonts(
  { icomoon: require('./assets/fonts/icomoon.ttf')}
);

if(!loaded) {
  return null;
}


  return (
    
    <ScrollView style={styles.container}>
      <SafeAreaView>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
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
     <HourlyWeather />
      
     <WeatherDetail />

     </SafeAreaView>
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
    color: 'white',

  },
  icon: {
    color: 'lightblue',
    fontSize: 74
  },
  iconcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 32,
    
  }
});

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, FlatList} from 'react-native';
import { useFonts } from 'expo-font';
import Icon from './weatherIcon';
import {FontConstant, ColorConstants, SizeConstants} from './componets/globalStyles';
import axios from 'axios';

import {Weather_API} from '@env'

import HourlyWeather from './componets/HourlyWeather';
import WeatherDetail from './componets/WeatherDetail';
import WeatherSummary from './componets/WeatherSummary';
//import data from './data'
import { HourlyWeatherMapping } from './componets/HourlyWeatherMapping';
import { CurrentWeather } from './componets/currentweather';
import { WeatherDaily } from './componets/WeatherDaily';
import { SunriseAndSet } from './componets/SunriseAndSet';
import { Moonriseandset } from './componets/Moonriseandset';
import Radar from './componets/RadarGif'


export default function App() {

const [data, setData] = useState(null)

useEffect(() => {
  axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=38.419&lon=-82.445&units=imperial&appid='+Weather_API)
  .then((response) => {
    console.log(response.data);
    setData(response.data);
  }).catch((error) => {
    console.log(error);
  });
}, [])

const [loaded] = useFonts(
  { icomoon: require('./assets/fonts/icomoon.ttf')}
);

if(!loaded) {
  return null;
}
//console.log(data);

if(!data) {
  return null;
}


  return (
    
    <ScrollView style={styles.container}>
     
     <View style={styles.viewContainer}>  
    <Text style={styles.headertext}>TODAY'S WEATHER:</Text>
    </View>
    <CurrentWeather data={data}/>

    <Radar/> 

    <SunriseAndSet data={data}/>

    <Moonriseandset data={data}/>
    
    
     <WeatherSummary data={data} />
     
     <View>
     <HourlyWeather data={data}/>
     </View>

    <WeatherDaily data={data}/>

     <View>
     
     
     <WeatherDetail data={data}/>
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
    backgroundColor: 'black',
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

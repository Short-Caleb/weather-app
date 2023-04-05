import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import React from 'react';
import mountians from '../assets/mountians.jpg';
//import data from '../data';

export default function WeatherSummary({data}) {

  let windDirection = "";
  const deg = data.current.wind_deg

  switch (deg) {
    case (deg > 337.5 || deg > 22.5 ):
    windDirection = "North";
    break;

    case (deg >= 22.5 && deg > 67.5 ):
    windDirection = "NorthEast";
    break;

    case (deg >= 67.5 && deg > 112.5 ):
    windDirection = "East";
    break;

    case (deg >= 112.5 && deg > 157.7 ):
    windDirection = "SouthEast";
    break;

    case (deg >= 157.5 && deg > 202.5 ):
    windDirection = "South";
    break;

    case (deg >= 202.5 && deg > 247.5 ):
    windDirection = "SouthWest";
    break; 
    
    case (deg >= 247.5 && deg > 292.5 ):
    windDirection = "West";
    break;

   
    default:
      windDirection = 'NorthWest'
  }

  return (
    <View style={styles.heroContainer}>
        <Text style={styles.text}>Weather Summary</Text>
      <Image source={mountians} style={styles.heroImage}/>
      <Text style={styles.text}>Daily High and Low </Text>
      <View style={styles.tempContainer}>
      <Text style={styles.highTempText}>{Math.round(data.daily[0].temp.max)} {'\u00b0'}</Text>
      <Text style={styles.temp}> / </Text>
      <Text style={styles.lowTempText}>{Math.round(data.daily[0].temp.min)} {'\u00b0'} </Text>
      </View>
      {data.current.weather[0].main === "Clear" ? 
      (<Text style={styles.descriptiontext}>Clear skies today and the Tempature is {Math.round(data.current.temp)} {'\u00b0'} F</Text>) : 
      (<Text style={styles.descriptiontext} >Cloudy skies today and the Tempature is {Math.round(data.current.temp)} {'\u00b0'} F</Text>)
      }
      <Text style={styles.descriptiontext} > and the Humidity for today is {data.current.humidity}%</Text>
      <Text style={styles.descriptiontext} >There will be a {data.current.wind_speed} MPH winds blowing from the {windDirection} </Text>
    </View>
  )
};
const styles = StyleSheet.create({
 

  text: {
    color: 'lightblue',
    fontSize: 24,
    fontWeight: '800',
    width: '90%',
    marginTop: 32,
    marginBottom: 12,
  },
   heroImage: {
    height: undefined,
    width: '90%',
    aspectRatio: 1,
    borderRadius: 20
   },
   heroContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
   },
   tempContainer:{
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 8,
    flexDirection: 'row'
  },
  temp: {
    color: 'white',
    fontsize: 48,
    fontWeight: 'bold'
  },
  highTempText: {
    color: 'red',
    fontSize: 36,
    fontWeight: '900',
  },

  lowTempText: {
    color: 'lightblue',
    fontSize: 36,
    fontWeight: '300',
    fontStyle: 'italic'
  },
  descriptiontext: {
    color: 'lightblue',
    fontSize: 24,
    fontWeight: '800',
    width: '90%',
  }
 
});

//{'\u2215'}
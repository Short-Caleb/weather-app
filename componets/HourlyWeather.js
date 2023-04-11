import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import data from '../data';
import { HourlyWeatherMapping } from './HourlyWeatherMapping';

export default function HourlyWeather({data}) {
  return (
    <View style={styles.tempContainer}>
      <Text style={styles.text}>HOURLY WEATHER:</Text>
      <FlatList
      horizontal
      data={data.hourly}
      renderItem={({item}) => <HourlyWeatherMapping hour={item}/> }
      keyExtractor={(item, index) => index}
     />
     
    </View>
  )
};

const styles = StyleSheet.create({
 
  text: {
    color: 'lightblue',
    fontSize: 36,
    fontWeight: '800',
    marginTop: 32,
    marginBottom: 12,
  },
 
 

 
});
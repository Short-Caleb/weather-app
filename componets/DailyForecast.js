import React from 'react'
import data from '../data'
import {View, StyleSheet, Text, } from 'react-native'
import Icon from '../weatherIcon'; 
import { iconList } from '../weatherhelper';

export const DailyForecast = ({day}) => {
  return (
    <View style={styles.container}>
        <Icon style={styles.icon} name={iconList[day.weather[0].id][0]} />
        <Text style={styles.info} > High{'\n'} {Math.round(day.temp.max)} {'\u00b0'}F </Text>
        <Text style={styles.info} > Low {'\n'} {Math.round(day.temp.min)} {'\u00b0'}F</Text>
        <Text style={styles.info} > pop {'\n'} {day.pop*100}% </Text>
        <Text style={styles.info} > Hum {'\n'} {Math.round(day.humidity)}% </Text>
    </View>
  )
}



const styles = StyleSheet.create({

  container: { 
      width: 65,
      height: 300,
      backgroundColor: 'gray',
      borderRadius: 10,
      margin: 6,
      alignItems: 'center',
      
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5
  },
  info: {
      color: 'lightblue',
      fontSize: 18,
      padding: 3,
      
  },
  littleinfo:{
    fontSize: 18,
    color: 'lightblue'
  },
  icon: {
      color: 'lightblue',
      fontSize: 60,
    },
})
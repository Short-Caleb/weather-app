import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import data from '../data'
import { DailyForecast } from './DailyForecast'


export const WeatherDaily = () => {
  return (

    <View>
      <Text style={styles.header}>FIVE DAY FORECAST</Text>
    <View style={styles.container} >
       <DailyForecast day={data.daily[0]}/>
       <DailyForecast day={data.daily[1]}/>
       <DailyForecast day={data.daily[2]}/>
       <DailyForecast day={data.daily[3]}/>
       <DailyForecast day={data.daily[4]}/>

    </View>
    </View>
  )
}



const styles = StyleSheet.create({

  container: { 
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'

  },
 header: {
  fontSize: 36, 
  color: 'lightblue',
  fontWeight: 'bold'
 }
})
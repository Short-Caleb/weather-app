import React from 'react';
import {View, StyleSheet, Text, } from 'react-native'
import Icon from '../weatherIcon'; 


export const HourlyWeatherMapping = ({hour}) => {
 
 console.log(hour)
    return  (
    <View style={styles.container}>
        <Icon style={styles.icon} name='wi-cloud' />
        <Text style={styles.info}>
           per-{hour.pop}%
        </Text>
        <Text style={styles.info}>
            {hour.temp}
            </Text>
        <Text style={styles.info}>
          {hour.weather[0].main}
            </Text>  
           
    </View>
  )
}


const styles = StyleSheet.create({

    container: { 
        width: 95,
        height: 190,
        backgroundColor: 'gray',
        borderRadius: 10,
        margin: 6,
        alignItems: 'center'

    },
    info: {
        color: 'lightblue',
        fontSize: 24,
        padding: 5,
    },
    icon: {
        color: 'lightblue',
        fontSize: 74,
      },
})
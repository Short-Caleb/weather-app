import React from 'react';
import {View, StyleSheet, Text, } from 'react-native'
import Icon from '../weatherIcon'; 
import { iconList } from '../weatherhelper';
import data from '../data';

export const CurrentWeather = () => {


    return(    
        <View style={styles.container}>
            
           
            <View style={styles.datacontainer}>
            <Text style={styles.info}>HUNT. WV</Text>
            </View>
            <View style={styles.datacontainer}>
            <Text style={styles.info}>Temp {Math.round(data.current.temp)}</Text>
            </View>
            <View style={styles.datacontainer}>
            <Text style={styles.info}>UVI  { Math.round(data.current.uvi)}</Text>
            </View>
            <View style={styles.datacontainer}>
            <Text style={styles.info}>Feels like {Math.round(data.current.feels_like)}</Text>
            </View>
            <View style={styles.datacontainer}>
            <Text style={styles.info}>wind speed {Math.round( data.current.wind_speed)}</Text>
            </View>

        </View>
    )

}





const styles = StyleSheet.create({

    container: { 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: 'darkgray',
        borderRadius: 5,
        borderWidth: 3,
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
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
    datacontainer: {
        width: 160,
        height: undefined,
        backgroundColor: 'grey',
        borderRadius: 25,
        margin: 6,
        alignItems: 'center',
        justifyContent: 'center'

    }
})
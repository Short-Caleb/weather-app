import React from 'react';
import {View, StyleSheet, Text, } from 'react-native'
import Icon from '../weatherIcon'; 
import { iconList } from '../weatherhelper';
import data from '../data';

export const CurrentWeather = () => {


    return(    
        <View style={styles.container}>
            
           
            <View style={styles.datacontainer}>
            <Text style={styles.info}>{data.timezone}</Text>
            </View>
            <View style={styles.datacontainer}>
            <Text style={styles.info}>CT {Math.round(data.current.temp)}</Text>
            </View>
            <View style={styles.datacontainer}>
            <Text style={styles.info}>UVI    { Math.round(data.current.uvi)}</Text>
            </View>
            <View style={styles.datacontainer}>
            <Text style={styles.info}>Feels like {Math.round(data.current.feels_like)}</Text>
            </View>
            <View style={styles.datacontainer}>
            <Text style={styles.info}>wind{Math.round( data.current.wind_speed)}</Text>
            </View>

        </View>
    )

}





const styles = StyleSheet.create({

    container: { 
        width: '90%',
        height: undefined,
        backgroundColor: 'gray',
        borderRadius: 10,
        margin: 6,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
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
        flex: 1,
       

    }
})
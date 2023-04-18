import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import data from '../data';
import moment from 'moment/moment';
import Icon from '../weatherIcon';

export const SunriseAndSet = ({data}) => {

  
    const sunriseTime = moment(new Date(data.daily[0].sunrise * 1000)).format('LT');
    const sunsetTime = moment(new Date(data.daily[0].sunset * 1000)).format('LT');
  
    return (
      <View style={styles.container}>
        <View style={styles.suncontainer}>
        <Icon style={styles.icon} name='wi-sunrise' />
        <Text style={styles.text}>Sunrise: {sunriseTime}</Text>
        </View>
        <View style={styles.suncontainer}>
        <Icon style={styles.icon} name='wi-sunset' />
        <Text style={styles.text}>Sunset: {sunsetTime}</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    
    },
    suncontainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      margin: 10
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'lightblue'
    },
    icon: {
      color: 'lightblue',
      fontSize: 74,
    },
  });
  
  
 

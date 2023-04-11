import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import data from '../data';

export const SunriseAndSet = ({data}) => {


    const sunriseTime = new Date(data.daily[0].sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(data.daily[0].sunset * 1000).toLocaleTimeString();
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sunrise: {sunriseTime}</Text>
        <Text style={styles.text}>Sunset: {sunsetTime}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'lightblue'
    },
  });
  
  
 

import React from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import data from '../data';
import Icon from '../weatherIcon'; 
import { moonPhaseList } from '../moonPhaseHelper';

export const Moonriseandset = () => {
  

  
  const moonriseTime = new Date(data.daily[0].moonrise * 1000).toLocaleTimeString();
  const moonsetTime = new  Date(data.daily[0].moonset *  1000).toLocaleTimeString();
  const moon_phase = data.daily[0].moon_phase

 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Moonrise: {moonriseTime}</Text>
      <Text style={styles.text}>Moonset: {moonsetTime}</Text>
      <Text style={styles.text}>Moon Phase:</Text>
      <Icon style={styles.icon} name={moonPhaseList[moon_phase]} />
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
    color: 'lightblue',
  },
  icon: {
    color: 'lightblue',
    fontSize: 74,
  },
});



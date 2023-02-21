import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import React from 'react';
import mountians from '../assets/mountians.jpg';
import data from '../data';

export default function WeatherSummary() {
  return (
    <View style={styles.heroContainer}>
        <Text style={styles.text}>Weather Summary</Text>
      <Image source={mountians} style={styles.heroImage}/>
      <Text style={styles.text}>Daily High and Low </Text>
      <View style={styles.tempContainer}>
      <Text style={styles.highTempText}>{data.daily[0].temp.max} {'\u00b0'}</Text>
      <Text style={styles.temp}> / </Text>
      <Text style={styles.lowTempText}>{data.daily[0].temp.min} {'\u00b0'} </Text>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
 

  text: {
    color: 'white',
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
 
});

//{'\u2215'}
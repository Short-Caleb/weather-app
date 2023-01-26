import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import React from 'react';
import mountians from '../assets/mountians.jpg';


export default function WeatherSummary() {
  return (
    <View style={styles.heroContainer}>
        <Text style={styles.text}>Weather Summary</Text>
      <Image source={mountians} style={styles.heroImage}/>
      <Text style={styles.text}>Daily High and Low </Text>
      <View style={styles.tempContainer}>
      <Text style={styles.highTempText}>45{'\u00b0'}F</Text>
      <Text style={styles.tempSlash}>/</Text>
      <Text style={styles.lowTempText}>32{'\u00b0'}F</Text>
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
  highTempText: {
    color: 'red',
    fontSize: 48,
    fontWeight: '900',
  },

  lowTempText: {
    color: 'lightblue',
    fontSize: 48,
    fontWeight: '300',
    fontStyle: 'italic'
  },
  tempSlash: {
    color: 'white',
    fontsize: 12,
    fontWeight: 'bold'
  }
});


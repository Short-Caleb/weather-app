import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function HourlyWeather() {
  return (
    <View style={styles.tempContainer}>
      <Text style={styles.text}>Daily High and Low </Text>
     
    </View>
  )
};

const styles = StyleSheet.create({
 
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 32,
    marginBottom: 12,
  },
 
 

 
});
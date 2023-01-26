import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import gray from '../assets/grayfield.jpg'

export default function WeatherDetail() {
  return (
    <View>
      <Text style={styles.text}>WeatherDetail</Text>
      <Image source={gray} style={styles.picture}/>
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
  picture: {
    height: undefined,
    width: '90%',
    aspectRatio: 1,
    borderRadius: 20
  }
});
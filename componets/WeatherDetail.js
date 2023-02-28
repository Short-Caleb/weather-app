import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import gray from '../assets/grayfield.jpg'
import { DetailTile } from './detailtile';
import data from '../data';

export default function WeatherDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail</Text>
      <Image source={gray} style={styles.picture}/>
      <View style={styles.detailcontainer}>
        <DetailTile iconName= "wi-thermometer" title="Feels Like" data={data.current.feels_like}/>
        <DetailTile iconName= "wi-humidity" title="Humidity" data={data.current.humidity}/>
        <DetailTile iconName= "wi-hot" title="UV Index" data={data.current.uvi}/>
        <DetailTile iconName= "wi-horizon-alt" title="Visibility" data={data.current.visibility}/>
        <DetailTile iconName= "wi-flood" title="Dew Point" data={data.current.dew_point}/>
        <DetailTile iconName= "wi-barometer" title="BM Pressure" data={data.current.pressure}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
 
  container: {
    flexWrap: 'wrap'
  },
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
  },
  detailcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 3,
},
});
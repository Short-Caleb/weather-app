import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import gray from '../assets/grayfield.jpg'
import { DetailTile } from './detailtile';
import data from '../data';

export default function WeatherDetail({data}) {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Detail</Text>
    //   
       <View style={styles.detailcontainer}>
       <View style={styles.tilecontainer}>
       <DetailTile iconName= "wi-thermometer" title="Feels Like" data={data.current.feels_like}/>
       </View>
      
        <View style={styles.tilecontainer}>
        <DetailTile iconName= "wi-humidity" title="Humidity" data={data.current.humidity}/>
        </View>
      
        <View style={styles.tilecontainer}>
        <DetailTile iconName= "wi-hot" title="UV Index" data={data.current.uvi}/>
        </View>
       
        <View style={styles.tilecontainer}>
        <DetailTile iconName= "wi-horizon-alt" title="Visibility" data={data.current.visibility}/>
        </View>
        
        <View style={styles.tilecontainer}>
        <DetailTile iconName= "wi-flood" title="Dew Point" data={data.current.dew_point}/>
        </View>
      
        <View style={styles.tilecontainer}>
        <DetailTile iconName= "wi-barometer" title="Barometer" data={data.current.pressure}/>
        </View>
       
        <Image source={gray} style={styles.picture}/>
       </View>
    // </View>
  )
};

const styles = StyleSheet.create({
 
  container: {
    flexWrap: 'wrap',
    flex: 1
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
    borderColor: 'darkgray',
    borderRadius: 5,
    borderWidth: 3,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
},
tilecontainer: { 
  width: 150,
  height: undefined,
  backgroundColor: 'grey',
  borderRadius: 50,
  margin: 6,
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: 'white',
  borderWidth: 1,
},
});
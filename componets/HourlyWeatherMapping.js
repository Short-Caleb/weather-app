import React from 'react';
import {View, StyleSheet, Text, } from 'react-native'
import Icon from '../weatherIcon'; 
import { iconList } from '../weatherhelper';

export const HourlyWeatherMapping = ({hour}) => {
 
  let meridian = '';
  let index = 0;

  let dt = new Date(hour.dt * 1000);
  let hours = dt.getHours()

  if(hours > 7 && hours < 20) {
    index = 0;
  } else { 
    index = 1;
  }
  
  if(hours > 12){
  hours = hours - 12;
  meridian = 'PM'
} else {
  meridian = 'AM'
}

if(hours === 0 ) hours = 12


 //console.log(hour)
    return  (
    <View style={styles.container}>
        <Icon style={styles.icon} name={iconList[hour.weather[0].id][index]} />
        <Text style={styles.info}>
           cor-{hour.pop}%
        </Text>
        <Text style={styles.info}>
            {Math.round(hour.temp)} {'\u00b0'}F
            </Text>
        <Text style={styles.info}>
          {hour.weather[0].main}
            </Text>  
            <Text style={styles.littleinfo}>
              {hours}:00 {meridian}
            </Text>
           
    </View>
  )
}


const styles = StyleSheet.create({

    container: { 
        width: 95,
        height: 225,
        backgroundColor: 'gray',
        borderRadius: 10,
        margin: 6,
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,

    },
    info: {
        color: 'lightblue',
        fontSize: 24,
        padding: 5,
    },
    littleinfo:{
      fontSize: 18,
      color: 'lightblue'
    },
    icon: {
        color: 'lightblue',
        fontSize: 74,
      },
})
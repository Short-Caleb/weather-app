import React from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import data from '../data';
import Icon from '../weatherIcon'; 
import { moonPhaseList } from '../moonPhaseHelper';
import moment from 'moment';
export const Moonriseandset = ({data}) => {
  
console.log('moon weather')
  console.log(data);
  const moonriseTime = moment(new Date(data.daily[0].moonrise * 1000)).format('LT');
  const moonsetTime =  moment(new Date(data.daily[0].moonset *  1000)).format('LT');
  let moonphase = data.daily[0].moon_phase * 28;
  moonphase = Math.round(moonphase)
 

  return (
    <>
    <View style={styles.container}> 
          <View style={styles.mooncontainer}>
        <Icon style={styles.icon} name='wi-moonrise'/>
        <Text style={styles.text}>Moonrise: {moonriseTime}</Text>
        </View>
        <View style={styles.mooncontainer}>
        <Icon style={styles.icon} name='wi-moonset' />
        <Text style={styles.text}>Moonset: {moonsetTime}</Text>
        </View>
    </View>
     <View style={styles.mooncontainer}>
     <Text style={styles.text}>Moon Phase:</Text>
     <Icon style={styles.icon} name={moonPhaseList[moonphase]} />
     </View>
     </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  mooncontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    margin: 10
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



import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '../weatherIcon';


export const DetailTile = ({iconName, title, data}) => {


    return (
        <View style={styles.container}>
            <Icon style={styles.icon} name={iconName}/>
            <Text style={styles.text}>{title} </Text>
            <Text style={styles.text}>{data} </Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container: { 
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
      
    },

    text: {
        color: 'lightblue',
        fontSize: 24,
        
    },
   icon: {
    color: 'lightblue',
    fontSize: 48,
   }
});
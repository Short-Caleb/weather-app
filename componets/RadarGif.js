import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'


export default function Radar() {
  return (
    <View>
      <Text style={styles.text}>Radar:</Text>
      <Image style={styles.image} source={require('../assets/CENTGRLAKES_loop.gif')} />
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: 'lightblue',
        fontWeight: 'bold',
        font: 24
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 30,
    }

})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WeatherSummary from './componets/WeatherSummary';



export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
     <WeatherSummary />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text: {
    color: 'white',

  }
});

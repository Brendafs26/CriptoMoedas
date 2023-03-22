import React from "react";
import { StyleSheet, View} from "react-native";
import CoinDetailedScreen from './src/screens/CoinDetailedScreen';


export default function App() {
  return (
   
 <View style={styles.container}>
  
   <CoinDetailedScreen />
   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop:50,
  },
 
});

import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';





const ColorAdjuster = ({color,onIncrease,onDecrease}) => {
  
  return (
      
      <View >
       
        <Text style={styles.testStyle}>{color}</Text>
        <Button  onPress={()=> onIncrease()} title={`Increase ${color}`}/>
        <Button  onPress={()=> onDecrease()} title={`Decrease ${color}`}/>
      </View>
    );
    
  };



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    testStyle:{
      alignContent:"center",
      justifyContent:"center",
      alignContent:"center",
      marginTop:50,
      fontSize:40,
      fontWeight:"bold",
      textAlign:"center",
    },
   
  });
  export default ColorAdjuster;

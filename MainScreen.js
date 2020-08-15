import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ColorAdjuster from '../../rn-starter/Learning/components/ColorAdjuster';

const COLOR_INCREASE_DECREASE = 15;


const HomeScreen = () => {
  const [red, setRed]= useState(0);
  const [green,setGreen]=useState(0);
  const [blue,setBlue]=useState(0);
  
  const colorSetting =(color,change)=>{
    switch(color)
    {
      case 'red':
    if(color ==='red')
    if (red + change > 255 || red + change < 0 ){
      return;

    }else{
      setRed(red + change);
    }
    return;
    case 'green':
      if(color ==='green')
      if (green + change > 255 || green + change < 0 ){
        return;
  
      }else{
        setGreen(green + change);
      }
      return;
      case 'blue':
        if(color ==='blue')
        if (blue + change > 255 || blue + change < 0 ){
          return;
    
        }else{
          setBlue(blue + change);
        }
        return;
        default:
          return;
  }
};
  return (
      
      <View>
      
        <ColorAdjuster
         onIncrease={()=> colorSetting('red',COLOR_INCREASE_DECREASE)}
         onDecrease={()=> colorSetting('red',-1*COLOR_INCREASE_DECREASE)} 
         color="Red" />
        <ColorAdjuster 
        onIncrease={()=> colorSetting('green',COLOR_INCREASE_DECREASE)} 
        onDecrease={()=> colorSetting('green',-1 *COLOR_INCREASE_DECREASE)} 
        color="Green"/>
        <ColorAdjuster
        onIncrease={()=> colorSetting('blue',COLOR_INCREASE_DECREASE)} 
        onDecrease={()=> colorSetting('blue',-1*COLOR_INCREASE_DECREASE)}  
        color="Blue"/>
        <View 
        style={{height:500,
          width:500,
          
          backgroundColor:`rgb(${red},${green},${blue})`
        }}
        />
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
  export default HomeScreen;

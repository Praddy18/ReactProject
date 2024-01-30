import React from 'react';
import { ScrollView, StyleSheet, Text,View, TouchableOpacity} from 'react-native';
const CustomButtons = ({props,bg,title,onClick}) => {
    return (
      <TouchableOpacity activeOpacity={1} 
      style={[styles.btn, {backgroundColor:bg}]}
      onPress={() =>{
       
        }} >
       <Text style = {styles.texx}> {title}</Text>
       </TouchableOpacity>
    );
}
// onClick();
const styles = StyleSheet.create({

 btn:{ 
   width:'80%',
   marginTop:30,
   height: 40,
   justifyContent:"center",
   alignItems:"center",
   alignSelf:'center',
   borderRadius:10,
 } ,

 texx : {
   fontSize: 20,
   fontFamily: 'Rag 123',
   fontWeight: 'bold',
   alignItems:'center'
  },
}

 );

export default CustomButtons;
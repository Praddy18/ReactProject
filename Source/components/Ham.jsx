import React from 'react';
import { ScrollView, StyleSheet, Text,View, TouchableOpacity,Image,Button} from 'react-native';
import Header  from './common/Header';

function Ham (props) {

    return(
        <ScrollView>
         <Header cartButtonPressed={()=>{props.navigation.navigate("MyCart")}} wishlistButtonOnPress={()=>{props.navigation.navigate("Whishlist")}} hamButtonOnPress={()=>{props.navigation.navigate("Ham")}}     
         />
                 
           
         <View style={{backgroundColor:"#FBF8F8",padding:1,flexDirection:"column",alignItems:"center",paddingLeft:2,marginTop:10,paddingBottom:10,paddingTop:10,justifyContent:"space-around",height:400}}> 
         <TouchableOpacity style={{borderWidth:1,paddingLeft:3,
         paddingBottom:10,
         paddingRight:1,
         paddingTop:10,
         borderColor:"#D9D9D9",
         borderWidth:2,
         borderRadius:8,
        }} 
         activeOpacity={1} onPress={() =>{props.navigation.navigate("Account")}}>
         <Text style ={styles.texx}>
         MANAGE ADDRESS
        </Text>
        </TouchableOpacity>  
        <TouchableOpacity style={{borderWidth:1,paddingLeft:3,
         paddingBottom:10,
         paddingRight:1,
         paddingTop:10,
         borderColor:"#D9D9D9",
         borderWidth:2,
         borderRadius:8,}} 
         activeOpacity={1} onPress={() =>{props.navigation.navigate("Ret")}}>
        <Text style ={styles.texx}>
        RETURN POLICY
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,paddingLeft:3,
         paddingBottom:10,
         paddingRight:1,
         paddingTop:10,
         borderColor:"#D9D9D9",
         borderWidth:2,
         borderRadius:8,}} 
         activeOpacity={1} onPress={() =>{props.navigation.navigate("MyOrders")}}>
        <Text style ={styles.texx}>
        My ORDER
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,paddingLeft:3,
         paddingBottom:10,
         paddingRight:1,
         paddingTop:10,
         borderColor:"#D9D9D9",
         borderWidth:2,
         borderRadius:8,}} 
         activeOpacity={1} onPress={() =>{props.navigation.navigate("Terms")}}>
        <Text style ={styles.texx}>
        TERMS & CONDITIONS
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,paddingLeft:3,
         paddingBottom:10,
         paddingRight:1,
         paddingTop:10,
         borderColor:"#D9D9D9",
         borderWidth:2,
         borderRadius:8,}} 
         activeOpacity={1} onPress={() =>{props.navigation.navigate('DealsInfo', {data:item})}}>
        <Text style ={styles.texx}>
        ABOUT US
        </Text>
        </TouchableOpacity>







         </View>
         </ScrollView>
      
    )
};
const styles = StyleSheet.create({
 texx: {
  width: 378,
  textAlign: "center",
  fontSize: 22,
  fontWeight:"bold"
    
 }





});

export default Ham;
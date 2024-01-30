
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Order({props,route}){
   const oderData = route.params.storeData;
   const calculateTotalPrice = () => {
    let totalPrice = 0;
    oderData.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    const navigation=useNavigation();
    return totalPrice;
  };
   const navigation = useNavigation();
  
    return(
    <View style={styles.Container}>
      
       <View>
        <Image style={styles.itemImagee} source={require('../assets/confirm.png')}/>
        </View>
       <Text style={styles.itemName}> Your Order is Confirmed, Thank You</Text>
       <Text style={{paddingTop:20,paddingLeft:12,color:'black'}}> Order Summary: </Text>
        {oderData.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={{ flex: 0.4 }}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={{fontSize:20,color:'black'}}> {item.quantity} </Text>
              <Text>Rs. {item.quantity * item.price}</Text>

            </View>
            </View>
            ))}
             <Text style={{paddingTop:20,paddingLeft:12,color:'black',fontSize:28}}> Total = RS.{calculateTotalPrice()}</Text>

     <TouchableOpacity onPress={()=> {navigation.navigate("Home")}}><Text style={{paddingLeft:19,paddingTop:10,textDecorationLine:'underline',color:'#0000ff'}}> cick here to go to Home</Text></TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
Container:{
flex:1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   justifyContent:"space-between",
   flexWrap:'wrap',
    margin:10,
    marginBottom: 5,
    marginRight:1,
    // paddingHorizontal:10
  },
  itemImagee: {
    width: 150,
    height: 250,
    marginRight: 1,
    borderRadius: 6,
    resizeMode:"contain",
    marginLeft:1,
    marginLeft:110,
    

  },
  itemName: {
    fontSize: 27,
    paddingRight:5,
    paddingLeft:25,
    color:'#FFA500'
  },
  itemImage: {
    width: 80,
    height: 100,
    marginRight: 1,
    borderRadius: 6,
    resizeMode:"cover",
    marginLeft:1

  },
  itemTitle: {
    fontSize: 15,

  },
});





export default Order;



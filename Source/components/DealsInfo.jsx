import React from 'react';
import { ScrollView, StyleSheet, Text,View, TouchableOpacity,Image,onPress,Button} from 'react-native';
import Header from './common/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomButtons from './common/CustomButtons';
import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../reducers/CartReducer';
import { addToWhishList } from '../reducers/WhishlistSlice';



function DealsInfo({props,route}) {
      
    const dispatch = useDispatch();
    const productData = route.params.main;
    const {title,price,image} = productData;
   const navigation = useNavigation();
  
    return (

        <ScrollView>
          <View style= {{
           paddingTop: 1,
           flex: 1,
          
           }} >
          <Header cartButtonPressed={()=>{navigation.navigate("MyCart")}} wishlistButtonOnPress={()=>{navigation.navigate("Whishlist")}} hamButtonOnPress={()=>{navigation.navigate("Ham")}}     
         />
            <View style={{width:400,height:300,paddingLeft:4,marginTop:40}}>        
                <Image
                  style={{ width: "100%", height: 350, resizeMode: "contain",}}
                  source={{ uri: image}}  />            
               </View>
               <Text style = {{paddingTop:80,paddingLeft:40,paddingRight:20, fontWeight: 'bold',fontSize: 17,}} > {title} </Text>
               <Text style = {{ paddingLeft:40,paddingTop:5,fontWeight: 'bold',fontSize: 17}} > Price : {price} </Text>

               <TouchableOpacity  bg={'#D9D9D9'} style={styles.btn} onPress={() => dispatch(addToCart(productData))}>
                 <Text style = {styles.texx}>Add To Cart</Text> 
               </TouchableOpacity> 
               <TouchableOpacity  bg={'#D9D9D9'} style={styles.btn} onPress={() =>  dispatch(addToWhishList(productData))}>
                 <Text style = {styles.texx}>Whishlist</Text> 
               </TouchableOpacity>
      
               
    
               
           </View>     
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    btn:{ 
        width:'80%',
        marginTop:30,
        height: 40,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:'center',
        borderRadius:10,
        backgroundColor: '#D9D9D9'
      } ,
      texx : {
        fontSize: 20,
        fontFamily: 'Rag 123',
        fontWeight: 'bold',
        alignItems:'center'
       },
     


});








 export default DealsInfo;

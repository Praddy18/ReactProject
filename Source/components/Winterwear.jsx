import React,{useState, useEffect} from "react";
import { Text,SafeAreaView,Image,ScrollView,View,Pressable,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import Header from "./common/Header";
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../reducers/CartReducer';
import CustomButtons from "./common/CustomButtons";
import { useRoute } from "@react-navigation/native";



function Winterwear(props){

  const dispatch = useDispatch();
    const addItemToCart = (item) =>{
      dispatch(addToCart(item))
    }
    const cart = useSelector((state)=> state.cart);
   console.log(cart)
 
    const wint = [
        {
          id: "20",
          title: "H nd M men jacket true to size super stylish",
          image:
          "https://th.bing.com/th/id/OIP.Hdf9PcK_bUkhwtf4SwMJYQHaJ3?pid=ImgDet&w=199&h=265&c=7&dpr=1.3",
          price: 10999,
        },
        {
          id: "30",
          title:
            "Zara jacket super cool fit to size",
            price: 10999,
          image:
          "https://th.bing.com/th/id/OIP._iPJhbmjsSJdzePkS9I0CwAAAA?pid=ImgDet&w=199&h=264&c=7&dpr=1.3",
    
        },
        {
          id: "40",
          title:
            "nike high quality jacket polyster material",
            price: 10999,
          image:
          "https://th.bing.com/th/id/OIP.Hdf9PcK_bUkhwtf4SwMJYQHaJ3?pid=ImgDet&w=199&h=265&c=7&dpr=1.3",
        
        },
        {
          id: "50",
          title:
            "Adidas high quality jacket polyster material true to size",
          oldPrice: 12999,
          price: 10999,
          image:
          "https://th.bing.com/th/id/OIP._iPJhbmjsSJdzePkS9I0CwAAAA?pid=ImgDet&w=199&h=264&c=7&dpr=1.3",
         
        },
        {
            id: "60",
            title:
              "puma high quality jacket polyster material",
            oldPrice: 12999,
            price: 10999,
            image:
            "https://th.bing.com/th/id/OIP.Hdf9PcK_bUkhwtf4SwMJYQHaJ3?pid=ImgDet&w=199&h=265&c=7&dpr=1.3",
          },
          {
            id: "70",
            title:
              "reebok high quality jacket polyster material",
            oldPrice: 12999,
            price: 10999,
            image:
            "https://th.bing.com/th/id/OIP._iPJhbmjsSJdzePkS9I0CwAAAA?pid=ImgDet&w=199&h=264&c=7&dpr=1.3",
          },
      ];
         return(
       <ScrollView>
        <Header cartButtonPressed={()=>{props.navigation.navigate("MyCart")}} wishlistButtonOnPress={()=>{props.navigation.navigate("Whishlist")}} hamButtonOnPress={()=>{props.navigation.navigate("Ham")}}     
         />
                 
        
        <Text style ={styles.Texas}>Winterwear</Text>
      
        < View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              padding:10,
              height:1000,
              justifyContent: "space-between",
              paddingBottom:20,
            }}
          >

            {wint.map((item, index) => (
             
              <TouchableOpacity  key={index} style={{borderWidth:1,paddingLeft:3,paddingBottom:3,paddingRight:1,paddingTop:5,borderColor:"#D9D9D9"}} activeOpacity={1} onPress={() =>{props.navigation.navigate('DealsInfo', {main:item})}}>
                <Image
                  style={{ width: 180, height: 220, resizeMode: "contain",paddingLeft:3,padding:10 }}
                  source={{ uri: item.image }}
                />
                 <Text numberOfLines={1} >  Men's  Jacket </Text>
                 
              </TouchableOpacity>
              
            ))}
         </View>



       </ScrollView>
    )

};


const styles = StyleSheet.create({
    Texas:{
        fontFamily: 'Rag 123',
        fontWeight: 'bold',
        fontStyle: 'italic',
        // color:"red",
       fontSize:20,
       paddingLeft:2
       },

}
);




export default Winterwear;
    

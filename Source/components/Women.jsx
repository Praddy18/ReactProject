import React from "react";
import { Text,SafeAreaView,Image,ScrollView,View,Pressable,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import Swiper from 'react-native-swiper';
import Header from "./common/Header";

function Women(props ){
    const images = [
        "https://i.pinimg.com/736x/bf/28/c0/bf28c0582f7b6fd143e787847873f2ef.jpg",
        "https://cupiditee.com/wp-content/uploads/2020/06/Black-Traditional-mochi-bharat-embroidered-keid-aand-checks-dhoti-pants-set1-1200x1500-1.jpg",
        "https://select-images.agencypin.com/files/gallery/2174/gallery_model_QCXGkH3ij7hr.jpg",
        
  ];
 const ImageSlider = () => {
   return (
     <TouchableOpacity>
     <Swiper style={styles.wrapper} showsButtons={false}>
       {images.map((image, index) => (
         <View key={index} style={styles.slide}>
           <Image source={{ uri: image }} style={styles.imagesl} />
         </View>
       ))}
     </Swiper>
     </TouchableOpacity>
   );
 };
    return(

        <ScrollView>
      <Header cartButtonPressed={()=>{props.navigation.navigate("MyCart")}} wishlistButtonOnPress={()=>{props.navigation.navigate("Whishlist")}} hamButtonOnPress={()=>{props.navigation.navigate("Ham")}}     
         />
                 
        
       <View>
            <Text style ={styles.Texx}>Women's Fashion </Text>
            </View>
            <View style={{height:110,backgroundColor:"#FBF8F8"}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() =>{props.navigation.navigate("Winterwear")}}>
        <Image style={{width:70,height:80,resizeMode:"contain",paddingLeft:2}} source={{uri: "https://th.bing.com/th/id/OIP.MLncPHguhUGxVhgMq-yiSQHaJQ?rs=1&pid=ImgDetMain"}} /> 
        <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>Winter wear</Text>
        </TouchableOpacity>  
        <TouchableOpacity onPress={() =>{props.navigation.navigate("Winterwear")}}>
        <Image style={{width:70,height:80,resizeMode:"contain",paddingLeft:2}} source={{uri: "https://i5.walmartimages.com/asr/ad3a477b-b133-4b83-884e-c992b31d45a2.b7305027943c5f94d5bdadd24091c07c.jpeg"}} /> 
        <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>T-shirts</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() =>{props.navigation.navigate("Winterwear")}}>
        <Image style={{width:70,height:80,resizeMode:"contain",paddingLeft:2}} source={{uri:"https://i5.walmartimages.com/asr/fade1485-bb16-48e5-a3f0-cf0cafe876cf_1.eb47e7cac67ffa54751a2df434bd4430.jpeg" }} /> 
        <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>Skirts</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() =>{props.navigation.navigate("Winterwear")}}>
        <Image style={{width:70,height:80,resizeMode:"contain",paddingLeft:2}} source={{uri:"https://th.bing.com/th/id/OIP.M_AbSCyBCyDAmGJs8I84rwHaIi?rs=1&pid=ImgDetMain"}} /> 
        <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>shirts</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() =>{props.navigation.navigate("Winterwear")}}>
        <Image style={{width:70,height:80,resizeMode:"contain",paddingLeft:2}} source={{uri:"https://janasahayakendram.com/shop/wp-content/uploads/sites/7/2021/05/satyam-weaves-womens-ethnic-wear-jacquard-banarasi-cotton-silk-saree.-VAANI-Baby-Pink-1365x2048.jpg"}} /> 
        <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>Ethnic</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() =>{props.navigation.navigate("Winterwear")}}>
        <Image style={{width:70,height:80,resizeMode:"contain",paddingLeft:2}} source={{uri:"https://th.bing.com/th/id/OIP.puwhvx0dn4DTpqiNT4DulgHaJo?rs=1&pid=ImgDetMain"}} /> 
        <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>Denim</Text>
        </TouchableOpacity> 
         </ScrollView>
         </View>
         <View style={{backgroundColor:"#FBF8F8",marginTop:1,height:150, width:400}}> 
         <Image source={require("../../Source/assets/season.jpg")} style={styles.Image5} />
         </View>
         <View style={{backgroundColor:"#FBF8F8",paddingLeft:2, paddingTop:1}}> 
         <Text style ={styles.Texas}>Sponcered </Text>
         </View>
         <View style={{backgroundColor:"#FBF8F8",marginTop:1,height:350, width:390}}> 
         
         <TouchableOpacity>
         <Image source={require("../../Source/assets/abb.jpeg")} style={styles.Image6} />
         </TouchableOpacity>
         </View>
         <Text style ={styles.Texas}>Deals of the week </Text>
         <View style={{backgroundColor:"#FBF8F8",paddingLeft:1, paddingTop:1,marginTop:1}}> 
         <ImageSlider/>
         </View>
         </ScrollView>
              
    )
};
const styles = StyleSheet.create({
    TextInput: {backgroundColor: "#D9D9D9",
    height: 50,
    flex: 1,
    padding: 10,
    width: 40,
    borderRadius: 8,
    borderWidth: 1,
    marginLeft: 5,
    fontFamily: 'Rag 123',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 10,
    },
    Image: {
     width: 20,
     height: 20,
     resizeMode: 'contain',
     marginLeft:2
    },
    Image1: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        marginRight:1
       },
     Image2: {
        width: 30,
        height: 25,
        resizeMode: 'contain',
        marginRight:1
       },
     Image3: {
        width: 30,
        height: 25,
        resizeMode: 'contain',
        marginRight:1,
       },
       Texx:{
        fontFamily: 'Rag 123',
        fontWeight: 'bold',
        fontStyle: 'italic',
        // color:"red",
       fontSize:20,
       paddingLeft:110

       },
       wrapper: { //margin:1,
        height:380, 
      },
       slide: {  
       },
       imagesl: {
         width: '100%',
         height: '100%',
         resizeMode: 'cover',
       },
       Texas:{
        fontFamily: 'Rag 123',
        fontWeight: 'bold',
        fontStyle: 'italic',
        // color:"red",
       fontSize:20,
       paddingLeft:2
       },
       Image5:{
        width: '100%',
         height: '100%',
         resizeMode: 'cover',

       },
       Image6:{
        width: '100%',
         height: '100%',
         resizeMode: 'cover',
       
         

       }
 }
);
 export default Women;
     
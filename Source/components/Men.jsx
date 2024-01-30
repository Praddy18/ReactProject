import React from "react";
import { Text,SafeAreaView,Image,ScrollView,View,Pressable,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import Swiper from 'react-native-swiper';
import Header from "./common/Header";
function Men(props){
    const images = [
        "https://i.pinimg.com/736x/eb/63/6b/eb636b1df4ba1fef373c82b4f3c8f6bd--europe-style-pullover.jpg",
             "https://i.pinimg.com/originals/24/ae/ca/24aeca019db5403e9c149aead07a5129.jpg",
           
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
            <Text style ={styles.Texx}>Men's Fashion </Text>
        </View>
        <View style={{height:110,backgroundColor:"#FBF8F8"}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity  onPress={() =>{props.navigation.navigate("Winterwear")}}>
        <Image style={{width:70,height:80,resizeMode:"contain",paddingLeft:2}} source={{uri: "https://th.bing.com/th/id/R.f49dae361cdb5b305ea8ea33f2ecc85b?rik=XXf2idWPB0qYeA&riu=http%3a%2f%2ffenzyme.com%2fwp-content%2fuploads%2f2015%2f09%2fWinter-Fashion-Outfits-for-Men-in-2015-25.jpg&ehk=4OgKiNHLMp1heYlz835ofw2Xkzvfaf64pk4PMfftQtc%3d&risl=&pid=ImgRaw&r=0"}} /> 
        <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>Winter wear</Text>
        </TouchableOpacity>  
        <TouchableOpacity onPress={() =>{props.navigation.navigate("Winterwear")}}>
        <Image style={{width:70,height:80,resizeMode:"contain",paddingLeft:2}} source={{uri: "https://i5.walmartimages.com/asr/bcc3f0e9-e67e-421f-836c-b2b6bc1adf13_1.2d78b914a4e46c3db69cd50ba71bcc80.jpeg"}} /> 
        <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>T-shirts</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() =>{props.navigation.navigate("Winterwear")}}>
        <Image style={{width:70,height:80,resizeMode:"contain",paddingLeft:2}} source={{uri:"https://handcmediastorage.blob.core.windows.net/productimages/PP/PPPFV018-L01-131706-800px-1040px.jpg" }} /> 
        <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>Polos</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() =>{props.navigation.navigate("Winterwear")}}>
        <Image style={{width:70,height:80,resizeMode:"contain",paddingLeft:2}} source={{uri:"https://cdnd.lystit.com/photos/0be5-2014/03/02/michael-kors--linen-double-pocket-sport-shirt-slim-fit-product-1-18120473-0-748060283-normal.jpeg"}} /> 
        <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>shirts</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() =>{props.navigation.navigate("Winterwear")}}>
        <Image style={{width:70,height:80,resizeMode:"contain",paddingLeft:2}} source={{uri:"https://i.pinimg.com/originals/fa/62/69/fa62694f0980c3698d3064e631e6c4af.jpg"}} /> 
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
         <Text style ={styles.Texas}>Deals of the week </Text>
         <View style={{backgroundColor:"#FBF8F8",paddingLeft:2, paddingTop:1,marginTop:1}}> 
         <ImageSlider/>
         </View>
        
         <View style={{backgroundColor:"#FBF8F8",paddingLeft:2, paddingTop:1}}> 
         <Text style ={styles.Texas}>Sponcered </Text>
         </View>
         <View style={{backgroundColor:"#FBF8F8",marginTop:1,height:350, width:390}}> 
         
         <TouchableOpacity>
         <Image source={require("../../Source/assets/allen.jpeg")} style={styles.Image6} />
         </TouchableOpacity>
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
 export default Men;
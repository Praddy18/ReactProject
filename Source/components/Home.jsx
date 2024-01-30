import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text,View, TouchableOpacity,Image} from 'react-native';
import Header from './common/Header';
import Swiper from 'react-native-swiper';
import DealsInfo from './DealsInfo';
import { Deals_Info } from '../reducers';
import { useDispatch, useSelector} from 'react-redux';
import { addProducts } from '../reducers/DealsinfoReducer';
import { getProducts } from '../reducers/ProductReducer';

function Home (props){

 
  const products = useSelector((state) => state.product.product);
  console.log(products)
    const images = [
      
            "https://i.pinimg.com/736x/eb/63/6b/eb636b1df4ba1fef373c82b4f3c8f6bd--europe-style-pullover.jpg",         
            "https://i.pinimg.com/originals/24/ae/ca/24aeca019db5403e9c149aead07a5129.jpg"
            ,
 ];
 const deals = [
    {
      id: "1",
      title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
        "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
      ],
      color: "Stellar Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "2",
      title:
        "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) ",
      oldPrice: 74000,
      price: 26000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/S20FE/GW/June23/BAU-27thJune/xcm_banners_2022_in_bau_wireless_dec_s20fe-rv51_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
      ],
      color: "Cloud Navy",
      size: "8 GB RAM 128GB Storage",
    },
    {
      id: "3",
      title:
        "Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger",
      oldPrice: 16000,
      price: 14000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/Tiles/June/xcm_banners_m14_5g_rv1_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg",
      ],
      color: "Icy Silver",
      size: "6 GB RAM 64GB Storage",
    },
    {
      id: "4",
      title:
        "realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
      oldPrice: 12999,
      price: 10999,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg",
      ],
    },
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
          <View>
         <Header cartButtonPressed={()=>{props.navigation.navigate("MyCart")}} wishlistButtonOnPress={()=>{props.navigation.navigate("Whishlist")}} hamButtonOnPress={()=>{props.navigation.navigate("Ham")}}     
         />
         </View>
         
         <Text style = {styles.Text1}> F A S H I O N</Text>
         <View style={{backgroundColor:"#FBF8F8",flexDirection:"row",alignItems:"center",paddingLeft:2,height:63,marginTop:2}}>
         
          <View style={styles.box}>
           <TouchableOpacity style={styles.button} onPress={() =>{props.navigation.navigate("Women")}}>
           <Text style={styles.buttonText}>WOMEN</Text>
            </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={() =>{props.navigation.navigate("Men")}}>
            <Text style={styles.buttonText}>MEN</Text>
          </TouchableOpacity>
         </View>
        </View>
        <View style={{backgroundColor:"#FBF8F8",paddingLeft:2, paddingTop:1,marginTop:1}}> 
         <ImageSlider/>
        </View>
        <View style={{backgroundColor:"#FBF8F8",paddingLeft:2, paddingTop:1,marginTop:1}}> 
        <TouchableOpacity  onPress={() =>{props.navigation.navigate("Electronics")}}>
        <Text style = {styles.Text1}>ELECTRONICS</Text>
        </TouchableOpacity>
        </View>
  
       < View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              padding:10,
              height:600,
              justifyContent: "space-around",
            }}
          >

            {deals.map((item,index) => (
              <TouchableOpacity activeOpacity={1}  key={index} onPress={() =>props.navigation.navigate("DealsInfo", {main:item})}>
                <Image
                  style={{ width: 180, height: 250, resizeMode: "contain",paddingLeft:3,padding:10 }}
                  source={{ uri: item?.image }}
                />
              </TouchableOpacity>
              
            ))}
         </View>
      
   
        </ScrollView>
    )
};
const styles= StyleSheet.create({
    wrapper: { margin:1,
        height:350, 
      },
       slide: {  
       },
    imagesl: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
       
      },
      box: {  
        flexDirection: 'row',
        justifyContent: 'flex-start',
       
      },   
    button: {
        flex: 50,
        backgroundColor: '#FBF8F8',
        borderWidth:1,
        borderColor:"black",  
        borderRadius: 1,
        alignItems: 'center',
        height:50,
        width:100
      },
    buttonText: {  
        fontSize: 20,
        color:'black',
        marginTop:10
      },
      Text1:{
        padding:5,
        paddingTop:2,
        fontFamily: 'Rag 123',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingLeft:90,
        paddingBottom:2,
        fontSize:30
    
       }, 




});




 export default Home;
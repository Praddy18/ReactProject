import {React,useReducer,useState,useEffect} from 'react';
import { StyleSheet,Text,View,FlatList,TouchableOpacity,Image,ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incementQuantity,decrementQuantity,removeFromCart } from '../reducers/CartReducer';
import { useNavigation, useRoute,useIsFocused} from '@react-navigation/native';

function Checkout ({props,route}){
    const dispatch = useDispatch();
    const storeData=useSelector((state) => state.cart);
    console.log(storeData)
    const [selectedMethod, setSelectedMethod] = useState(0);
  
    const navigation  = useNavigation();
    const calculateTotalPrice = () => {
        let totalPrice = 0;
    
        storeData.forEach(item => {
          totalPrice += item.quantity * item.price;
        });
    
        return totalPrice;
      };
      const [selectedAddress, setSelectedAddress] = useState(
        'Please Select Address',
      );
      const addressList = useSelector(state => state.address);
      const isFocused = useIsFocused();
      useEffect(() => {
          console.log(addressList);
      }, [isFocused]);
    

    return(
      <View>
      <ScrollView>
        <View style={styles.constainer}>
            <View style={{borderBottomColor:'#CBC3E3',borderBottomWidth:1,height:50}}>
            <Text style={{paddingTop:10,fontSize: 30, fontFamily: 'Rag 123',fontWeight: 'bold', alignItems:'center',paddingLeft:130}}> Checkout </Text>

           </View>
           <Text style={{fontSize: 20, fontFamily: 'Rag 123',fontWeight: 'bold'}}> Your Items</Text>
            <View style={{borderRadius:10}}>
           <FlatList data={ storeData } renderItem={ ({item,index})=>( 
           <View style={styles.itemContainer}>
           <View style={{flex:0.4,paddingBottom:9}}>
            <Image source={{ uri: item.image}} style={styles.itemImage} />
           </View>
           <View style={{flex:0.9}}>
           <Text style={styles.itemTitle}>{item.title}</Text>
           <Text style={{color:'black'}}>Rs. {item.quantity * item.price}</Text>
           </View>
           <View style={styles.container}>
            <View style={{paddingLeft:30,paddingBottom:8}}>
           <TouchableOpacity  onPress={()=> {
                dispatch(removeFromCart(item));
            }}  >
           <Image source={require("../assets/remove.png")} style={styles.Image3} /> 
           </TouchableOpacity>
           </View>
           <View style={{flexDirection:"row",paddingBottom:30}}>
           <TouchableOpacity  onPress={()=> {
                dispatch(decrementQuantity(item));
            }}  >
           <Image source={require("../assets/minus.png")} style={styles.Image2} /> 
           </TouchableOpacity>
           <Text style={{fontSize:20,color:'black'}}> {item.quantity} </Text>
           <TouchableOpacity  onPress={()=> {
            if (item.quantity == 7) {              
            } else{
                dispatch(incementQuantity(item))
            }
            }}   >
        <Image source={require("../assets/plus.png")} style={styles.Image2}   /> 
        </TouchableOpacity>
           </View>
           </View>
           
          </View>
        )}/>

     


         </View>
           <Text style={{fontSize: 25, fontFamily: 'Rag 123',fontWeight: 'bold', alignItems:'center',paddingLeft:60,paddingTop:4}}> Select Payment Method</Text>
           <TouchableOpacity style ={styles.paymentMethods}   onPress={() => {
            setSelectedMethod(0);
          }}>
           
           <Image source= { selectedMethod == 0
                ? require('../assets/radio2.png')
                : require('../assets/radio1.png')} style={styles.imgg}/>
           <Text style={styles.paymentMethdodsTxt}> CASH ON DELIVERY</Text>
          
           </TouchableOpacity>
           <TouchableOpacity style ={styles.paymentMethods}   onPress={() => {
            setSelectedMethod(1);
          }}>
       
           <Image source={ selectedMethod == 1
                ? require('../assets/radio2.png')
                : require('../assets/radio1.png')} style={styles.imgg}/>
           <Text style={styles.paymentMethdodsTxt}> UPI </Text>
          
           </TouchableOpacity>
           <TouchableOpacity style ={styles.paymentMethods}   onPress={() => {
            setSelectedMethod(2);
          }}>
        
           <Image  source={ selectedMethod == 2
                ? require('../assets/radio2.png')
                : require('../assets/radio1.png')} style={styles.imgg}/>
           <Text style={styles.paymentMethdodsTxt}> CREDIT CARD </Text>
           </TouchableOpacity>
           
           <Text style={styles.title}>Address</Text>
         
         <FlatList
                data={addressList.data}
              
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={{
                            width: '90%', backgroundColor: '#fff',
                            borderWidth: 0.9,
                            alignSelf: 'center',
                            marginTop: 20,
                            paddingLeft: 20,
                            paddingBottom: 10,
                            paddingTop: 10,
                            borderRadius: 10,
                        }}  
                        key={index}
                        onPress={() => {
                    
                          }}>
                            <Text style={styles.state}>{`State:  ${item.state}`}</Text>
                            <Text style={styles.state}>{`City:  ${item.city}`}</Text>
                            <Text style={styles.state}>{`Pincode:  ${item.pincode}`}</Text>
                            <Text
                                style={[
                                    styles.state,
                                    {
                                        position: 'absolute',
                                        right: 10,
                                        top: 10,
                                        backgroundColor: '#B1BFF5',
                                        padding: 5,
                                        borderRadius: 10,
                                        fontSize: 14,
                                        fontWeight: '600',
                                    },
                                ]}>
                                {item.type}
                            </Text>

                        </TouchableOpacity>



                    )
                }} />

         
          
           <View>
          <TouchableOpacity style={styles.btn}    onPress={()=> {navigation.navigate("Order",{storeData})}}      >
          <Text style={styles.texx}> Place Order</Text>
          </TouchableOpacity>
        </View>
         </View>
         </ScrollView>
         </View>
    )
}; 

const styles= StyleSheet.create({
constainer:{
 flex:1,
//  backgroundColor:'#fff'
},
itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   justifyContent:"space-between",
   flexWrap:'wrap',
    margin:1,
    marginBottom: 5,
    marginRight:1,
    borderRadius:20,
    borderBottomWidth:1,
   
    paddingBottom:3
    // paddingHorizontal:10
  },
  itemImage: {
    width: 80,
    height: 100,
    marginRight: 1,
    borderRadius: 6,
    resizeMode:"cover",
    marginLeft:1,

  },
  itemTitle: {
    fontSize: 15,
    color:'black'

  },
  Image1: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    // marginRight:1
   },
   Image2: {
    width: 29,
    height: 28,
    resizeMode: 'contain',
    marginRight:1
   },
   Image3: {
    width: 20,
    height: 6,
    resizeMode: 'contain',
    paddingLeft:25,
    paddingBottom:30

   },
   container:{
    flexDirection:"column"
   },
   btn:{ 
    width:'95%',
    
    height: 55,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:"#131E3A"
  } ,
  texx : {
    fontSize: 20,
    fontFamily: 'Rag 123',
    fontWeight: 'bold',
    alignItems:'center',
    color:'#fff'
   },
   texy : {
    fontSize: 20,
    fontFamily: 'Rag 123',
    fontWeight: 'bold',
    alignItems:'center',
    paddingLeft:20,
   },
   paymentMethods: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    paddingLeft: 10,
  },
  imgg: {
    width:26,
    height:26,
    paddingLeft:1
  },
  paymentMethdodsTxt: {
    marginLeft: 10,
    fontSize: 19,
    color: '#000',
    paddingBottom:10
  },
  addressView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 20,
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 30,
    color: '#000',
  },





}
);
export default Checkout;
///////////////////////////////////////////////
////////////////////////////////////////////////////

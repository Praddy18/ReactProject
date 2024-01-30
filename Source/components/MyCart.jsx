
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from './common/Header';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { incementQuantity, removeFromCart, decrementQuantity } from '../reducers/CartReducer';

function MyCart() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.cart);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    storeData.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    return totalPrice;
  };

  return (
    <View>
      <ScrollView>
        <Header
          cartButtonPressed={() => {
            navigation.navigate('MyCart');
          }}
          wishlistButtonOnPress={() => {
            navigation.navigate('Whishlist');
          }}
          hamButtonOnPress={() => {
            navigation.navigate('Ham');
          }}
        />
      </ScrollView>

      <View>
        <Text style={styles.texy}>My Cart</Text>
        {storeData.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={{ flex: 0.4 }}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text>Rs. { item.price}</Text>
            </View>
            <View style={styles.container}>
              <View style={{ paddingLeft: 30, paddingBottom: 8 }}>
                <TouchableOpacity onPress={() => dispatch(removeFromCart(item))}>
                  <Image source={require('../assets/remove.png')} style={styles.Image3} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', paddingBottom: 30 }}>
                <TouchableOpacity onPress={() => dispatch(decrementQuantity(item))}>
                  <Image source={require('../assets/minus.png')} style={styles.Image2} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'black' }}> {item.quantity} </Text>
                <TouchableOpacity
                  onPress={() => {
                    if (item.quantity === 7) {
                  
                    } else {
                      dispatch(incementQuantity(item));
                    }
                  }}
                >
                  <Image source={require('../assets/plus.png')} style={styles.Image2} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.texx}> Go to Checkout RS.{calculateTotalPrice()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width:'90%',
    marginTop:30,
    height: 55,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:'center',
    borderRadius:10,
    backgroundColor: '#CBC3E3'
  } ,
  texx : {
    fontSize: 20,
    fontFamily: 'Rag 123',
    fontWeight: 'bold',
    alignItems:'center',
    
   },
   texy : {
    fontSize: 20,
    fontFamily: 'Rag 123',
    fontWeight: 'bold',
    alignItems:'center',
    paddingLeft:20,
   },
 
});

export default MyCart;
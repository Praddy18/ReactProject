import { React, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Button, FlatList, item } from 'react-native';
import Header from './common/Header';
import { useRoute, useNavigation, } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { incementQuantity, decrementQuantity, removeFromList } from '../reducers/WhishlistSlice';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { addToCart } from '../reducers/CartReducer';
import { moveFromWishlistToCart } from './common/WishlistToCartThunk';



function Whishlist(item, props) {


  const navigation = useNavigation();
  const dispatch = useDispatch();
  const wishData = useSelector((state) => state.whishlist);
  console.log(wishData)
  const productData = wishData;
  const { title, price, image } = productData;
  const route = useRoute();


  const calculateTotalPrice = () => {
    let totalPrice = 0;


    return totalPrice;
  };
  

  return (
    <View>
      <ScrollView>
        <Header cartButtonPressed={() => { navigation.navigate("MyCart") }} wishlistButtonOnPress={() => { navigation.navigate("Whishlist") }} hamButtonOnPress={() => { navigation.navigate("Ham") }} />
      </ScrollView>

      <SafeAreaView >
        <Text style={styles.texy}>WishList</Text>
        <FlatList data={wishData} renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>

            <View style={{ flex: 0.3 }}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
            </View>
            <View style={{ flex: 0.7, paddingHorizontal: 10 }}>
              <View style={styles.container}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text>Rs. {item.quantity * item.price}</Text>
              </View>


              <TouchableOpacity onPress={() => {
                dispatch(removeFromList(item));
              }}  >
                <Image source={require("../assets/remove.png")} style={styles.Image3} />
              </TouchableOpacity>
              <View style={{ paddingTop: 18, paddingRight: 92 }}>
                <TouchableOpacity style={styles.btn} onPress={() => dispatch(addToCart(item))} >
                  <Text style={styles.texx}> Add To Cart</Text>
                </TouchableOpacity>
              </View>

            </View>


          </View>
        )} />




      </SafeAreaView>

    </View>
  )
};
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 1,
    marginBottom: 1,
    marginRight: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingRight: 20,
    height: responsiveHeight(28),
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2

  },
  abc: {

    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 1,
    marginBottom: 5,
    marginRight: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingRight: 70

  },

  itemImage: {
    width: 120,
    height: 140,
    marginRight: 10,
    borderRadius: 6,
    resizeMode: "contain",
    //  paddingRight: 70,
    paddingTop: 30

  },
  itemTitle: {
    fontSize: 15,
    paddingTop: 20,


  },
  Image1: {
    width: 55,
    height: 60,
    resizeMode: 'contain',
    // marginRight:1
  },
  Image2: {
    width: 30,
    height: 38,
    resizeMode: 'contain',
    marginRight: 1
  },
  Image3: {
    width: 30,
    height: 16,
    resizeMode: 'contain',
    paddingLeft: 60,
    paddingBottom: 30

  },
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 20,
    alignContent: 'center',
  },
  btn: {
    width: 340,
    height: 45,
    paddingLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#CBC3E3',
    marginLeft: 5
  },
  texx: {
    fontSize: 20,
    fontFamily: 'Rag 123',
    fontWeight: 'bold',
    alignItems: 'center',

  },
  texy: {
    fontSize: 20,
    fontFamily: 'Rag 123',
    fontWeight: 'bold',
    alignItems: 'center',
    paddingLeft: 20,
  },
  textt: {
    fontSize: 20,
    fontFamily: 'Rag 123',
    fontWeight: 'bold',
    alignItems: 'center',
    paddingRight: 5

  }

});
export default Whishlist;
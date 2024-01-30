import React, { useState } from 'react';
import {Image,View,Text,Pressable,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import { useSelector } from 'react-redux';
import SearchFilter from './SearchFilter';
import deals from '../Home';

function Header(props) {
  const {
    cartButtonPressed,
    wishlistButtonOnPress,
    hamButtonOnPress
  } = props;

  const [input, setInput] = useState("");

  return (
    <View style={{ paddingTop: 1, flex: 1, backgroundColor: "white",marginBottom:1}}>
      <View style={{ backgroundColor: "#FBF8F8", padding: 10, flexDirection: "row", alignItems: "center", paddingLeft: 2 }}>
        <Pressable style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 7,
          gap: 10,
          backgroundColor: "#D9D9D9",
          borderColor: "white",
          borderRadius: 6,
          borderWidth: 3,
          transform: [{ perspective: 1000 }, { rotateX: '10deg' }],
          height: 60,
          flex: 1
        }}>
          <Image style={styles.Image} source={require("../../assets/search.png")} />
          <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder="Search Your Product" />
        </Pressable>
        <TouchableOpacity onPress={wishlistButtonOnPress}>
          <Image source={require("../../assets/whishlist.png")} style={styles.Image1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={cartButtonPressed}>
          <Image source={require("../../assets/cart.png")} style={styles.Image2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={hamButtonOnPress}>
          <Image source={require("../../assets/ham.png")} style={styles.Image3} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <SearchFilter data={deals} input={input} setInput={setInput} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: "#D9D9D9",
    height: 80,
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
    marginLeft: 2
  },
  Image1: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginRight: 1
  },
  Image2: {
    width: 30,
    height: 25,
    resizeMode: 'contain',
    marginRight: 1
  },
  Image3: {
    width: 30,
    height: 25,
    resizeMode: 'contain',
    marginRight: 1,
  },
});

export default Header;
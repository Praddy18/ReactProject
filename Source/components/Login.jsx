import React from "react";
import { TextInput, TouchableOpacity,View,Text, StyleSheet,Button } from "react-native";
import { useDispatch } from "react-redux";
import {usernameTextFieldValueChanged,passwordTextFieldValueChanged} from "../reducers/LoginReducer"

function Login(props){
    const{
        texView
    }=styles
    

    const handleUsername = value => {
        useDispatch(usernameTextFieldValueChanged(value)) }
    const handlePassword = value => {
        useDispatch(passwordTextFieldValueChanged(value)) }
   

   return(
    <View style={styles.container}>
       <Text style={styles.head}> THE DRIP SHOP</Text>
       <Text style={styles.h1}> Log Into</Text>
       <Text style={styles.h2}> Your Account!</Text>

      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(value) => {handleUsername(value)}}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(value) => {handlePassword(value)}}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={()=> {props.navigation.navigate("Home")}}>
        <Text style ={styles.loginText}>Login</Text>
   
      </TouchableOpacity> 
    </View> 
    
    // <View>
    //   <TextInput  placeholder="Username" onChangeText={(value)=>{handleUsername(value)}}/>
    //   <TextInput  placeholder="PassWord" onChangeText={(value)=>{handlePassword(value)}}/>
    //    <TouchableOpacity>
    //     <Text style = {texView}>Login</Text>
    //    </TouchableOpacity>
    // </View>
   )

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5B635F",
        alignItems: "center",
        justifyContent: "center",
      },
      head:{
        height: 50,
        color:'#fff',
        marginBottom: 99,
        marginLeft: 17,
        fontFamily: 'Rag 123',
        fontWeight: 'semibold',
        fontStyle:'italic',
        fontSize:36,
        
      },
      h1:{
      
        marginTop: 2,
        marginLeft: 15,
        fontFamily: 'Rag 123',
        fontWeight: 'medium',
        fontSize:30,
        alignItems: "flex-start",
    
      },
      h2:{
        
        
          marginTop: 5,
          marginBottom:50,
          marginLeft: 15,
          fontFamily: 'Rag 123',
          fontWeight: 'medium',
          fontSize:30,
      },
      image: {
        marginBottom: 40,
      },
      inputView: {
        backgroundColor: "#D9D9D9",
        
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
      loginBtn: {
        width: "70%",
        marginBottom:40,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        backgroundColor: "#F4E34D",
      },
    });
export default Login;
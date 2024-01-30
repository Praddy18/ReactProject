import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incementQuantity, decrementQuantity, removeFromCart } from '../reducers/CartReducer';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = (props) => {
        const navigation = useNavigation;
    const addressList = useSelector(state => state.address);
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(addressList);
    }, [isFocused]);
    
  
    const setDefaultAddress = async (item) => {
     
      await AsyncStorage.setItem(
        'SELECTED_ADDRESS',
        JSON.stringify({
          state: item.state,
          city: item.city,
          pincode: item.pincode,
          type: item.type,
        })
      );
    
      props.navigation.goBack();
    };
  
  
    return (
      <View style={styles.container}>
                <View style={{height:70,paddingLeft:20,backgroundColor:"#D9D9D9"}}>
             <Text style={{fontSize:30,paddingTop:15}}>
                MANAGE YOUR ADDRESS
            </Text>
            </View>
            <View>
                 <Text style={{paddingTop:10,paddingLeft:10,fontSize:18}}>
                     Saved Address
               </Text>
             </View>
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
                onPress={() => setDefaultAddress(item)}>
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
            );
          }}
        />
                 <TouchableOpacity style={styles.addButton} onPress={() => {
                props.navigation.navigate('AddAddress', { type: 'new' });
            }}>
               <Text style={{ fontSize: 35, color: "#fff", paddingRight: 1 }}>+</Text>
           </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    addButton: {
        width: 50,
        height: 50,
        backgroundColor: '#EC8A00',
        borderRadius: 25,
        position: 'absolute',
        bottom: 50,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    state: {
        color: '#000',
        fontSize: 18
    },



})

  
  export default Account;
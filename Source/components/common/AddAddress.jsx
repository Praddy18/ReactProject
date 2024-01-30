import {React,useState} from 'react';
import { StyleSheet,Text,View,FlatList,TouchableOpacity,Image,TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incementQuantity,decrementQuantity,removeFromCart } from '../reducers/CartReducer';
import { addAddress } from '../../reducers/AddressReducer';
import { useNavigation } from '@react-navigation/native';


function AddAddress(props){
    const [type, setType] = useState(1)
    const [state, setState] = useState(''
      
      );
      const [city, setCity] = useState(''
    
      );
      const [pincode, setPincode] = useState(''
     
      );
      const dispatch = useDispatch();
      const navigation = useNavigation;

    return(
        <View style={styles.container}>  
         <View style={{paddingLeft:25,backgroundColor:'#D9D9D9',height:60}}>
            <Text style={{fontSize:30,paddingTop:10,paddingLeft:45}}>
                Add New Address
            </Text>
         </View>
              <TextInput  placeholder="Enter State"style={[styles.input, {marginTop: 50}]}  value={state} onChangeText={txt => setState(txt)}   />
              <TextInput placeholder="Enter City"style={[styles.input, {marginTop: 15}]}  value={city} onChangeText={txt => setCity(txt)}   />
              <TextInput placeholder="Enter Pincode" keyboardType={'number-pad'}style={[styles.input, {marginTop: 15}]}  value={pincode} onChangeText={txt => setPincode(txt)}  />
          <View style={styles.typeView}>
          <TouchableOpacity   onPress={() => {setType(1);}} style={[styles.typeBtn,   {borderWidth: 0.9, borderColor: type == 1 ? 'orange' : 'black'} ]}>
          <Image source={ type == 1
                ? require('../../assets/radio2.png')
                : require('../../assets/radio1.png') } style={styles.radio}/>
            <Text style={styles.radioText}>{'Home'}</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => {setType(2);}} style={[styles.typeBtn, {borderWidth: 0.9, borderColor: type == 2 ? 'orange' : 'black'} ]}>
          <Image source={ type == 2
                ? require('../../assets/radio2.png')
                : require('../../assets/radio1.png')  } style={styles.radio}/>
            <Text style={styles.radioText}>{'Office'}</Text>
          </TouchableOpacity>
          </View>   
          
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => dispatch(addAddress({state:state,city:city,pincode:pincode,type: type == 1 ? 'Home' : 'office'}))}>
          <Text style={styles.texx}> Save Address</Text>
          </TouchableOpacity>
        </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },

      input: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: 'center',
        paddingLeft: 20,
      },
      typeView: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      typeBtn: {
        width: '40%',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
      },
      radio: {
        width: 24,
        height: 24,
      },
      radioText: {marginLeft: 10},
      btn:{ 
        width: 340,
        height: 55,
        paddingLeft:17,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:'center',
        borderRadius:10,
        backgroundColor: '#CBC3E3',
        marginLeft:5,
        marginTop:14
      } ,





})







export default AddAddress;
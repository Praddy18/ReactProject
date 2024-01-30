import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login";
import React from "react";
import Home from "../components/Home";
import DealsInfo from "../components/DealsInfo";
import MyCart from "../components/MyCart";
import Men from "../components/Men";
import Winterwear from "../components/Winterwear";
import Women from "../components/Women";
import Ham from "../components/Ham";
import Ret from "../components/Ret";
import Terms from "../components/Terms";
import Whishlist from "../components/Whishlist";
import Checkout from "../components/Checkout";
import Account from "../components/Account";
import AddAddress from "../components/common/AddAddress";
import Order from "../components/Order";
import MyOrders from "../components/MyOrders";

const RootStack = createNativeStackNavigator()

function MainAppRoutes(props) {
   return(
       <NavigationContainer>
          <RootStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
             <RootStack.Screen name="Login" component={Login} />
             <RootStack.Screen name="Home" component={Home}/>
             <RootStack.Screen name="MyCart" component={MyCart}/>
             <RootStack.Screen name="DealsInfo" component={DealsInfo}/>
             <RootStack.Screen name="Men" component={Men}/>
             <RootStack.Screen name="Winterwear" component={Winterwear}/>
             <RootStack.Screen name="Women" component={Women}/>
             <RootStack.Screen name="Ham" component={Ham}/>
             <RootStack.Screen name="Ret" component={Ret}/>
             <RootStack.Screen name="Terms" component={Terms}/>
             <RootStack.Screen name="Whishlist" component={Whishlist}/>
             <RootStack.Screen name="Checkout" component={Checkout}/>       
             <RootStack.Screen name="Account" component={Account}/>     
             <RootStack.Screen name="AddAddress" component={AddAddress}/>    
             <RootStack.Screen name="Order" component={Order}/>  
             <RootStack.Screen name="MyOrders" component={MyOrders}/>  
          </RootStack.Navigator>
       </NavigationContainer>
   )
}
export default MainAppRoutes;

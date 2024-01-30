import React from "react";
import store, { persistor } from "./reducers";
import MainAppRoutes from "./routes/MainAppRoutes";
import { Provider } from "react-redux";


function App(props){
 return(

  <Provider store={store}>
  
    <MainAppRoutes />

  </Provider>
 )

}
export default App;
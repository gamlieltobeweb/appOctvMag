import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomePage from './Home/HomePage'



import StoreDetails from './Register/StoreDetails'
import BillingStore from './Register/BillingStore'
import BrandStores from './Register/BrandStores'
import DeliveryDetail from './Register/DeliveryDetail'
import Dispositif from './Register/Dispositif'
import Video_live from './Register/Video_live'


import Login from './pages/Login'
import SignUp from './pages/signUp'
import Forgot from './pages/Forgot'
import VerificationPassword from './pages/verificationPassword'
import VerificationNumber from './pages/verificationNumber'
import Home from './pages/Home'




export default class App extends Component {

  render() {

    return (

      // <View>

      //   <VerificationNumber/>
      // </View>
      <NavigationContainer>
        <Stack.Navigator>


          <Stack.Screen options={{ headerShown: false }}
           name="Login" component={Login} />

          {/* <Stack.Screen options={{
            headerStyle: { backgroundColor: '#455a' },  headerTintColor: '#125487', headerTitleStyle: {
              fontWeight: 'bold'
            }, title: "bienvenu"
          }} name="Login" component={Login} /> */}

          <Stack.Screen options={{ headerShown: false }} name="StoreDetails" component={StoreDetails} />
          <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
          <Stack.Screen options={{ headerShown: false }} name="Forgot" component={Forgot} />
          <Stack.Screen options={{ headerShown: false }} name="VerificationNumber" component={VerificationNumber} />
          <Stack.Screen options={{ headerShown: false }} name="VerificationPassword" component={VerificationPassword} />
          <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen name="HomePage" component={HomePage} /> */}


          <Stack.Screen options={{ headerShown: false }} name="BrandStores" component={BrandStores} />
          <Stack.Screen options={{ headerShown: false }} name="DeliveryDetail" component={DeliveryDetail} />
          <Stack.Screen options={{ headerShown: false }} name="BillingStore" component={BillingStore} />
          <Stack.Screen options={{ headerShown: false }} name="Dispositif" component={Dispositif} />
          <Stack.Screen options={{ headerShown: false }} name="Video_live" component={Video_live} />

        </Stack.Navigator>

      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

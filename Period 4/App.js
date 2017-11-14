import React from 'react';
import { StyleSheet, Text, View, Button, Platform, Image, AsyncStorage } from 'react-native';
import { Constants } from "expo";
import { DrawerNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import UndskyldningScreen from './screens/HelloScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import SubmissionScreen from './screens/SubmissionScreen';
import LogoutScreen from './screens/LogoutScreen';
import AllUndskyldningScreen from './screens/AlleSpørgsmålScreen';
import { GC_USER_ID, GC_AUTH_TOKEN } from './constants';

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/??' });
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


export default App = () => (<ApolloProvider client={client}>
<DrawerNavi style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }}/>
</ApolloProvider>);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});


const DrawerNavi = DrawerNavigator({
  Home: {
    screen: UndskyldningScreen,
  },
  AlleSpørgsmål: {
    screen: AlleSpørgsmålScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Logout: {
    screen: LogoutScreen,
  },
  CreateAccount: {
    screen: CreateAccountScreen,
  },
  Submission: {
    screen: SubmissionScreen,
  }
  },
  {
    navigationOptions: { headerStyle: { marginTop: Expo.Constants.statusBarHeight } }
  }
);

//Doesn't work right now
//Checks for user login, and changes drawer accordingly
AsyncStorage.getItem(GC_USER_ID).then((valUserId) => {
//If user is logged in
if(valUserId){
    const DrawerNavi = DrawerNavigator({
      Home: {
        screen: HelloScreen,
      },
      Submission: {
        screen: SubmissionScreen,
      }},
      {
        navigationOptions: { headerStyle: { marginTop: Expo.Constants.statusBarHeight } }
      }
    );
}
//If user is not logged in
else{
    const DrawerNavi = DrawerNavigator({
      Home: {
        screen: HelloScreen,
      },
      Login: {
        screen: LoginScreen,
      },
      CreateAccount: {
        screen: CreateAccountScreen,
      }},
      {
        navigationOptions: { headerStyle: { marginTop: Expo.Constants.statusBarHeight } }
      }
    );
  }
});
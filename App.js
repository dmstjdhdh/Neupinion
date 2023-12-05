import React from 'react';
import Footer from "./components/Footer";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import MainNewsOne from "./components/MainNewsOne";
import Start from "./components/Start";
import Dummy from "./components/Dummy/Dummy";
import Youtube from "./components/Youtube";
import DetailIssue from "./components/DetailIssue";
import VoteResult from "./components/VoteResult";
import Post from "./components/Post";
import Edu from "./components/Edu";

const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                  name="Home"
                  component={Footer}
                  options={{
                      headerShown: false,
                      animation:'slide_from_bottom',
                  }}
              />
              <Stack.Screen
                  name="Details"
                  component={MainNewsOne}
                  options={{
                      headerShown: false,
                      ...TransitionPresets.SlideFromRightIOS,
                  }}
              />
              <Stack.Screen
                  name="Youtube"
                  component={Youtube}
                  options={{
                      headerShown: false,
                      ...TransitionPresets.SlideFromRightIOS,
                  }}
              />
              <Stack.Screen
                  name="DetailIssue"
                  component={DetailIssue}
                  options={{
                      headerShown: false,
                      ...TransitionPresets.SlideFromRightIOS,
                  }}
              />
              <Stack.Screen
                  name="VoteDetail"
                  component={VoteResult}
                  options={{
                      headerShown: false,
                      ...TransitionPresets.SlideFromRightIOS,
                  }}
              />
              <Stack.Screen
                  name="Edu"
                  component={Edu}
                  options={{
                      headerShown: false,
                      ...TransitionPresets.SlideFromRightIOS,
                  }}
              />
              <Stack.Screen
                  name="Dummy"
                  component={Dummy}
                  options={{
                      headerShown: false,
                      animation:'slide_from_bottom',
                  }}
              />
              <Stack.Screen
                  name="Post"
                  component={Post}
                  options={{
                      headerShown: false,
                      animation:'slide_from_bottom',
                  }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  )
};


export default App;

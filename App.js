import React from 'react';
import Footer from "./components/Footer";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import MainNewsOne from "./components/MainNewsOne";
import Start from "./components/Start";
import Dummy from "./components/Dummy/Dummy";

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
                  name="Dummy"
                  component={Dummy}
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

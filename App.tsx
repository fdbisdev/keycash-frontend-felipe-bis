import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Details from './src/pages/Details';
import Home from './src/pages/Home';

import { HouseDetailsProps } from './utils/types';

const HomeScreen = () => {
  return <Home />;
};

const HouseDetailsScreen = ({ route }: HouseDetailsProps) => {
  return (
    <Details
      houseAdress={route.params.houseAdress}
      houseImages={route.params.houseImages}
      housePrice={route.params.housePrice}
      houseBathrooms={route.params.houseBathrooms}
      houseBedrooms={route.params.houseBedrooms}
      houseParkingSpaces={route.params.houseParkingSpaces}
      houseUsableArea={route.params.houseUsableArea}
    />
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#f10074" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="HouseDetails" component={HouseDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

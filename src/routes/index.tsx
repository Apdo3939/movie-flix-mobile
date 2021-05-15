import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, MovieCatalog, MovieDetails } from '../pages';



const Stack = createStackNavigator();

const Routes: React.FC =() => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MovieFlix" component={Home} />
          <Stack.Screen name="MovieCatalog" component={MovieCatalog} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default Routes;
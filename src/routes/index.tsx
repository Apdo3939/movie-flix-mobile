import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, MovieCatalog, MovieDetails, Login } from '../pages';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MovieFlix" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MovieCatalog" component={MovieCatalog} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}

export default Routes;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, MovieCatalog, MovieDetails, Login, MovieGenre } from '../pages';
import { Text } from 'react-native';
import { colors, nav} from '../styles';
import { NavBar } from '../components';


const Stack = createStackNavigator();
const HeaderText: React.FC = () => <Text style={nav.leftText}>Filmes</Text>;

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerTitle: "",
          headerStyle: { backgroundColor: colors.primary },
          headerLeft: () => <HeaderText />,
          headerRight: () => <NavBar />
        }
      }
    >
      <Stack.Screen name="MovieFlix" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Genre" component={MovieGenre} />
      <Stack.Screen name="MovieCatalog" component={MovieCatalog} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}

export default Routes;
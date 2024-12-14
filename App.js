import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import RecipeFinder from './components/RecipeFinder';
import FrontPage from './screens/FrontPage';
import HomeScreen from './screens/HomeScreen';
import RecipeDetails from './screens/RecipeDetails';

const Stack = createStackNavigator();

const App = () => {
  // Log components to check if they are correctly imported
  console.log('RecipeFinder:', RecipeFinder);
  console.log('HomeScreen:', HomeScreen);
  console.log('RecipeDetails:', RecipeDetails);
  console.log('FrontPage:', FrontPage);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RecipeFinder" component={RecipeFinder} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
        <Stack.Screen name="FrontPage" component={FrontPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./components/LoginScreen"
import AdminScreen from "./components/AdminScreen"
import DetailsPage from './components/DetailsPage';
const Stack = createNativeStackNavigator();
const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="loginScreen" component={LoginScreen}  />
            <Stack.Screen name="adminScreen" component={AdminScreen}  />      
            <Stack.Screen name="detailsScreen" component={DetailsPage}  />      
                     
        </Stack.Navigator>
    </NavigationContainer>
);
};


export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from './App/Screens/UserListScreen'
import AlbumScreen from './App/Screens/AlbumScreen'
import PhotoScreen from './App/Screens/PhotoScreen'
import PhotoView from './App/Components/PhotoView'
const Stack = createStackNavigator();

class App extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Users"
                        component={UserListScreen}
                    />
                    <Stack.Screen
                        name="Albums"
                        component={AlbumScreen}
                    />
                    <Stack.Screen
                        name="Photos"
                        component={PhotoScreen}
                    />
                    <Stack.Screen
                        name="Preview"
                        component={PhotoView}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App;

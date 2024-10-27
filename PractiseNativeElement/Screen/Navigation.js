import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import About from './About';
import BottomSheetComponent from './BottomSheet';
import Dialogs from './Dialog';
import Divider from './Divider';
import ImageAPI from './Image';
import Tab from './Tab';

const Stack=createNativeStackNavigator()
const Navigation = () => {
    const { theme } = useTheme();
  
    return (
      <NavigationContainer
      theme={{
        colors: {
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.white,
          text: theme.colors.black,
        },
        // dark: theme.mode === 'dark',
      }}

      >
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='Sheet' component={BottomSheetComponent} />
            <Stack.Screen name='Dialog' component={Dialogs} />
            <Stack.Screen name='Divider' component={Divider} />
            <Stack.Screen name='Image' component={ImageAPI} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


  export default Navigation;

const styles = StyleSheet.create({})
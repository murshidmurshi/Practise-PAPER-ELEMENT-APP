// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Text, Button, PaperProvider,MD2LightTheme as DefaultTheme } from 'react-native-paper'; // Import necessary components from react-native-paper

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     secondary: 'blue',
//   },
// };

// export default function App({navigation}) {
//   return (
//     <PaperProvider theme={theme}>

//     </PaperProvider>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, TouchableOpacity } from 'react-native';
import {
 
  PaperProvider,
   MD3LightTheme as DefaultTheme
} from 'react-native-paper';
// import FajrAthanBanner from './FajrBanner';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const Stack = createStackNavigator();

import Home from './Screen/Home'
import Detail from './Screen/Detail';
import MyComponent from './Screen/BottomNavigation';
import MyBottomComponent from './Screen/BottomTab';
import MyListComponent from './Screen/List';
import Dialog from './Screen/Dialog';
import MyTable from './Screen/DataTable';
import Drawers from './Screen/Drawer';
import MyFab from './Screen/AnimatedFab';
import FabGroup from './Screen/FabGroup';
import Touch from './Screen/Touchable';



export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Bottom" component={MyComponent} />
          <Stack.Screen name="BottomTab" component={MyBottomComponent} />
          <Stack.Screen name="List" component={MyListComponent} />
          <Stack.Screen name="Dialog" component={Dialog} />
          <Stack.Screen name="Table" component={MyTable} />
          <Stack.Screen name="Drawer" component={Drawers} />
          <Stack.Screen name="Fab" component={MyFab} />
          <Stack.Screen name="FabGroup" component={FabGroup} />
          <Stack.Screen name="Touch" component={Touch} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
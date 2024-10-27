import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Platform, Dimensions } from 'react-native';
import { Button, Card, Text, ThemeProvider, createTheme,lightColors,useThemeMode,} from '@rneui/themed';
import Navigation from './Screen/Navigation';

const Wwidth=Dimensions.get('window').width


// const theme = createTheme({

//   lightColors: {
//     ...Platform.select({
//       default:lightColors.platform.android,
//     })
//   },
  
// });
const theme = createTheme({
  lightColors: {
    primary: 'grey',
    secondary:'red'
  },
  darkColors: {
    primary: 'red',

  },
  components:{
    Button: {
      containerStyle: {
        marginTop: 20,
        width:Wwidth-50,
        alignSelf:'center',
        borderRadius:150
      }
    },
   
 
  },

  
  mode:'dark'
});






export default function App() {
  return (
     <ThemeProvider theme={theme}>
<Navigation />
     </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

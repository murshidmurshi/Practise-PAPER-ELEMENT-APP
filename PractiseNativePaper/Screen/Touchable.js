import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

const Touch = () => (
  <TouchableRipple
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
    style={{flex:1}}
  >
    <View style={{flex:1}}>
<Text>fds</Text>
    </View>
  </TouchableRipple>
);

export default Touch;
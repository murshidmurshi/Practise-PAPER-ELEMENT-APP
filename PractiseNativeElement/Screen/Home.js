import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, ButtonGroup, Icon, SpeedDial, Switch, Tab, TabView, Text, Tooltip, useTheme } from '@rneui/themed'
import { styled } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from '@rneui/themed';


export default function Home() {
  const [open, setOpen] = React.useState(false);

  const { theme } = useTheme();
  let navigation = useNavigation()
  return (
   <ScrollView>
     <View>
    <Switch  color='yellow'/>
    <Switch color='red' value />
    <Switch />
    
  {/* <Tooltip visible  popover={<Text>Tooltip text</Text>}>
    <Text>Click me</Text>
    </Tooltip> */}

      <Button
        title="Primary Button"
        onPress={() => console.log('Primary Button pressed')}
        buttonStyle={{ backgroundColor: theme.colors.secondary }}
      />
      <Button
        title="Tab"
        onPress={() =>navigation.navigate('Tab')}
        buttonStyle={{ backgroundColor: theme.colors.secondary }}
      />

      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
        buttonStyle={{ backgroundColor: theme.colors.secondary }}
      />
      <Button
        title="Go to Images"
        onPress={() => navigation.navigate('Image')}
        buttonStyle={{ backgroundColor: theme.colors.secondary }}
      />
      <Button
        title="Go to Dialog"
        onPress={() => navigation.navigate('Dialog')}
        buttonStyle={{ backgroundColor: theme.colors.secondary }}
      />
      <Button
        title="Bottom Sheet Page"

        onPress={() => navigation.navigate('Sheet')}
        buttonStyle={{ backgroundColor: theme.colors.secondary }}
      />
      <Button
        title="Divider"

        onPress={() => navigation.navigate('Divider')}
        buttonStyle={{ backgroundColor: theme.colors.secondary }}
      />


      <Button
        title="Button"
        disabled
        // loading
        loadingProps={{
          size: "small",
          color: 'red'
        }}
        icon={{
          name: 'pencil',
          type: 'font-awesome'
        }}
        iconRight
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          // borderWidth:2,
          borderRadius: 18

        }}
      />

      <Text>Button Group</Text>

      <ButtonGroup
        selectedTextStyle={{ color: 'red' }}
        selectedIndex={0}
        buttons={['SIMPLE', 'BUTTON', 'GROUP']}
        containerStyle={{ marginBottom: 20 }}
      />




      <Avatar
        size={32}
        rounded
        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
      />
      <Avatar
        size={32}
        rounded
        source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 40,
        }}
      >
        <Avatar
          size={50}
          rounded
          icon={{ name: 'adb', type: 'material' }}
          containerStyle={{ backgroundColor: 'orange' }}
        >
          <Avatar.Accessory size={20}  />
        </Avatar>
      </View>


      

      <SpeedDial
    isOpen={open}
    icon={{ name: 'edit', color: '#fff' }}
    openIcon={{ name: 'close', color: '#fff' }}
    onOpen={() => setOpen(!open)}
    onClose={() => setOpen(!open)}
  >
    <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Add"
      onPress={() => console.log('Add Something')}
    />
    <SpeedDial.Action
      icon={{ name: 'delete', color: '#fff' }}
      title="Delete"
      onPress={() => console.log('Delete Something')}
    />
  </SpeedDial>




    </View>
   </ScrollView>
  )
}

const styles = StyleSheet.create({})
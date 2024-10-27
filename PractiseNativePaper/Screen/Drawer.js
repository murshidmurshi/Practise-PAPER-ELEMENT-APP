import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { Drawer, FAB, Text } from 'react-native-paper'

export default function Drawers() {
    const [active, setActive] = React.useState('');
  return (
   <>
    <Drawer.CollapsedItem focusedIcon={'inbox'} unfocusedIcon="inbox-outline"
     label="Inbox" />
    <Drawer.CollapsedItem focusedIcon={'inbox'} unfocusedIcon="inbox-outline"
     label="Inbox" />
    <Drawer.CollapsedItem focusedIcon={'inbox'} unfocusedIcon="inbox-outline"
     label="Inbox" />
    <Drawer.CollapsedItem focusedIcon={'inbox'} unfocusedIcon="inbox-outline"
     label="Inbox" />
    <Drawer.CollapsedItem focusedIcon={'inbox'} unfocusedIcon="inbox-outline"
     label="Inbox" />

     <Text variant="headlineMedium" >Drawer</Text>
     <Drawer.Section title="Some title">
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>

    <FAB
    icon="plus"
    style={styles.fab}
    onPress={() => console.log('Pressed')}
  />
    <FAB
    onPress={() => console.log('Pressed')}
  />
   </>
  )
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })
import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Portal, Dialog, Text, Checkbox, Chip } from 'react-native-paper'

export default function Dialogs() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  const [checked, setChecked] = React.useState(false);

  return (
    <View>
      <Button onPress={showDialog}>Show Dialog</Button>


      <Checkbox status='checked' />
      <Checkbox status='unchecked' />
      <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />


<Text variant="headlineLarge"> Chips</Text>
<Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>




      <Portal >
        <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Icon icon="alert" />
          <Dialog.Title >Alert</Dialog.Title>
        <Dialog.Content >
        <Text variant="bodyMedium">This is simple dialog</Text>
        </Dialog.Content>
       
        <Dialog.Actions>
              <Button icon={'home'} onPress={hideDialog}>Cancel</Button>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  )
}

const styles = StyleSheet.create({})
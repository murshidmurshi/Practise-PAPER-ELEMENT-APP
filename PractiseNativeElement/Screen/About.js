import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Card, CheckBox, Chip, Input, LinearProgress, Text } from '@rneui/themed'



export default function About() {

  return (
    <>
      <ScrollView>

        <Text > About Page</Text>
        <Text> About Page</Text>


        <Card>
          <Card.Title>CARD WITH DIVIDER</Card.Title>
          <Card.Divider />

          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
        </Card>
        <Card>
          <Card.Title>CARD WITH DIVIDER</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button

            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>


        <CheckBox
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="red"
          title={'Label1'}

          checked />

        <CheckBox checked disabled title="Label" />

        <CheckBox
          checked
          disabled
          title={'Radio1'}
          //  onPress={() => setIndex(0)} 
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
        />

        <CheckBox
          checked
          iconType="feather"
          checkedIcon="home"

        />



        <Text h2>Chips</Text>
        <Card.Divider />
        <Chip
          onPress={() => console.log('Helo')}


          title="Solid Chip" icon={{ name: 'home', type: 'ionicon' }} iconRight containerStyle={{ marginVertical: 15 }} />

        <Chip
          title="Pressable Icon Chip"
          icon={{
            name: 'close',
            type: 'font-awesome',
            size: 20,
            // color: lightColors.primary2,
          }}
          onPress={() => console.log('Icon chip was pressed!')}
          iconRight
          type="outline"
          containerStyle={{ marginVertical: 15 }}
        />


        <Text h1>Input</Text>
        <Input 
         errorStyle={{ color: 'red' }}
         errorMessage='ENTER A VALID ERROR HERE'
        />
        <Input 
        placeholder='Enter name'
        leftIcon={{
          name:'home'
        }}
        />

        <Text h4>Linear Progress</Text>
        <LinearProgress />





      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({})
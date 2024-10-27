import { Image, StyleSheet, View ,ScrollView} from 'react-native'
import React from 'react'
import { ActivityIndicator, Appbar, Avatar, Badge, Banner, Button, Card, Divider, FAB, HelperText, Icon, IconButton, MD2Colors, MD3Colors, Menu, Portal, ProgressBar, RadioButton, Searchbar, SegmentedButtons, Snackbar, Text, TextInput, ToggleButton, TouchableRipple, useTheme } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
// import { ScrollView } from 'react-native-gesture-handler';
import FajrBanner from '../FajrBanner'


export default function Home() {
  let navigation = useNavigation()
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  const BOTTOM_APPBAR_HEIGHT = 80;
  const MEDIUM_FAB_HEIGHT = 56;
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [text, setText] = React.useState('');

  const onChangeText = text => setText(text);

 const hasErrors = () => {
   return !text.includes('@');
 };

 const [checked, setChecked] = React.useState('first');

 const [searchQuery, setSearchQuery] = React.useState('');
 const [value, setValue] = React.useState('');
 const [visible2, setVisible2] = React.useState(false);

 const onToggleSnackBar = () => setVisible2(!visible2);

 const onDismissSnackBar = () => setVisible2(false);

 const [status, setStatus] = React.useState('checked');

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };

  return (
    <>
      <ScrollView>
        {/* <FajrBanner /> */}
        <ActivityIndicator animating color={MD2Colors.blue400} size={"large"} />
        <FAB size="medium" label='Go to Detail' onPress={() => navigation.navigate('Detail')} />
        <FAB size="medium" label='Go to Bottom-Navigation' onPress={() => navigation.navigate('Bottom')} />
        <FAB size="medium" label='Go to Bottom-Tabs' onPress={() => navigation.navigate('BottomTab')} />
        <FAB size="medium" label='Go to List' onPress={() => navigation.navigate('List')} />
        <FAB size="medium" label='Go to Dialog' onPress={() => navigation.navigate('Dialog')} />
        <FAB size="medium" label='Go to Table' onPress={() => navigation.navigate('Table')} />
        <FAB size="medium" label='Go to Drawer' onPress={() => navigation.navigate('Drawer')} />
        <FAB size="medium" label='Go to AnimatedFab' onPress={() => navigation.navigate('Fab')} />


        <FAB size="medium" label='Go to FabGroup' onPress={() => navigation.navigate('FabGroup')} />
        <Divider  />
        <FAB size="medium" label='Go to Touch' onPress={() => navigation.navigate('Touch')} />


        <View>
      <TextInput left={<TextInput.Icon icon="eye" />}  right={<TextInput.Affix text="0/100" />} secureTextEntry label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
      </View>
<Text variant="headlineLarge" >ToggleButton</Text>

      <ToggleButton 
       icon="bluetooth"
       value="bluetooth"
       status={status}
       onPress={onButtonToggle}
      />

      <Divider />

      <ToggleButton.Group
      onValueChange={value => setValue(value)}
      value={value}>
      <ToggleButton icon="format-align-left" value="left" />
      <ToggleButton icon="format-align-right" value="right" />
    </ToggleButton.Group>
      <Divider />

      <Icon
    source="heart"
    color={MD3Colors.error50}
    size={20}
  />

<ProgressBar progress={0.8} color={MD3Colors.error50} />
<Divider />
<View style={{padding:20}} />


<View>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}

      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'checked' }
        onPress={() => setChecked('second')}
        disabled
      />
    </View>

    

        <Button mode="contained" icon={"camera"} onPress={() => { }} >
          Click me
        </Button>


        <Searchbar   placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery} />
      <Divider  />
      <Text>fds</Text>
      <Divider  />

      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
            icon:'home'
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]}
      />

<Button onPress={onToggleSnackBar}>{visible2 ? 'Hide' : 'Show'}</Button>
      <Snackbar
        visible={visible2}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>


        <Text>App Header</Text>
        <Appbar.Header style={{ backgroundColor: theme.colors.backdrop }}>
          <Appbar.BackAction onPress={() => { }} />
          <Appbar.Content title="Title" />
          <Appbar.Action icon="calendar" onPress={() => { }} />
          <Appbar.Action icon="magnify" onPress={() => { }} />
        </Appbar.Header>

        <Appbar
          style={[
            styles.bottom,
            {
              height: BOTTOM_APPBAR_HEIGHT + bottom,
              backgroundColor: theme.colors.elevation,
            },
          ]}
          safeAreaInsets={{ bottom }}
        >
          <Appbar.Action icon="archive" onPress={() => { }} />
          <Appbar.Action icon="email" onPress={() => { }} />
          <Appbar.Action icon="label" onPress={() => { }} />
          <Appbar.Action icon="delete" onPress={() => { }} />
          <FAB
            // mode="flat"
            size="medium"
            icon="plus"
            onPress={() => { }}
            style={[
              styles.fab,
              { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
            ]}
          />

        </Appbar>

        <Text >Avtar</Text>

        <Avatar.Icon icon={'folder'} size={24} />
        <Avatar.Icon icon={'folder'} />

        <Text>Avtar Image</Text>
        <Avatar.Image source={{ uri: 'https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-boy-with-backpack-his-back_1142-40542.jpg?size=626&ext=jpg&ga=GA1.1.1046404403.1705322009&semt=sph' }} />

        <Text>Avtar Text</Text>
        <Avatar.Text label='Murshid' />
        <Avatar.Text label='MA' />


        <Card>
          <Text>Badge</Text>
          <Badge>3</Badge>
          <Badge />
          <Badge size={5} />
        </Card>

        <Banner
          actions={[
            {
              label: 'Fix it',
            },
            {
              label: 'Learn more',
            },
          ]}
          icon={({ size }) => (
            <Image
              source={{
                uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
              }}
              style={{
                width: size,
                height: size,
              }}
            />
          )}>
          There was a problem processing a transaction on your credit card.

        </Banner>


        <IconButton
    icon="camera"
    iconColor={MD3Colors.error50}
    size={20}
    onPress={() => console.log('Pressed')}
  />
        <IconButton
    icon="camera"
    iconColor={MD2Colors.error50}
    size={20}
    onPress={() => console.log('Pressed')}
  />
        <IconButton
    icon="camera"
    iconColor={MD2Colors.red100}
    size={20}
    onPress={() => console.log('Pressed')}
  />

<Text variant="displayLarge">Menu</Text>
<View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
         <Menu.Item leadingIcon="share" onPress={() => {}} title="Redo" />
         <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})
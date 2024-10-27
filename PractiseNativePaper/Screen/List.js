import * as React from 'react';
import { StyleSheet, View ,ScrollView} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { List, Surface, Switch, Text } from 'react-native-paper';

const MyListComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
   <>
   <ScrollView>
   <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        // left={props => <List.Icon {...props} icon="folder" />}
        
        >
        <List.Item title="First item" />
        <List.Item title="Second item" />
        <List.Item title="Second item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>

    <Switch value={1} />

    <Text variant="displayLarge">Display Large</Text>
    <Text variant="displayMedium">Display Medium</Text>
    <Text variant="displaySmall">Display small</Text>

    <Text variant="headlineLarge">Headline Large</Text>
    <Text variant="headlineMedium">Headline Medium</Text>
    <Text variant="headlineSmall">Headline Small</Text>



    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <Surface style={styles.surface} elevation={1}>
     <Text>Surface</Text>
  </Surface>
    <Surface style={styles.surface} elevation={2}>
     <Text>Surface</Text>
  </Surface>
    <Surface style={styles.surface} elevation={4}>
     <Text>Surface</Text>
  </Surface>
    </View>
   </ScrollView>
   </>

    
  );
};

export default MyListComponent;
const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
  },
});
import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Divider, FAB, Header, Text, Icon, Input } from '@rneui/themed'


export default function Dividers() {
    return (
        <>
            <View
                style={{
                    alignItems: 'center',
                    paddingVertical: 5,
                    flexGrow: 1,
                }}
            >
                <Icon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => console.log('hello')}
                />

                <Icon
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='#517fa4'
                />


                <View style={styles.horizontal}>
                    <Text style={styles.horizontalText}>
                        Horizontal Divider with left inset
                    </Text>
                    <Divider inset={true} />
                    <Text style={styles.horizontalText}>
                        Horizontal Divider with right inset
                    </Text>
                    <Divider inset={true} insetType="right" />
                    <Text style={styles.horizontalText}>
                        Horizontal Divider with middle inset
                    </Text>
                    <Divider inset={true} insetType="middle" />
                    <Text style={styles.horizontalText}>
                        Horizontal Divider with middle inset
                    </Text>
                    <Divider orientation="vertical" inset={true} insetType="middle" />
                    <Text style={styles.horizontalText}>Welcome to RNE App</Text>
                </View>
                <View style={styles.vertical}>
                    <Text>Left text</Text>
                    <Divider orientation="vertical" />
                    <Text>Right text</Text>
                </View>



                <Text h2>FAB</Text>
                <FAB loading />
                <FAB disabled />
                <FAB icon={{ name: 'home', type: "ionicon" }} />
                <FAB icon={{ name: 'home', type: "ionicon" }} title={'Home'} />

                <FAB icon={{ name: 'home', type: "ionicon" }} title={'Home'} placement='left' onPress={() => console.log('gg')} />
















            </View>

        </>
    )
}

const styles = StyleSheet.create({
    horizontal: {
        marginBottom: 10,
    },
    horizontalText: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    vertical: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

})
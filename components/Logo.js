import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'



export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../images/logo.png')} />
                <Text style={styles.logoText}>welcome to my app</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 100,
        marginLeft: 40,
        marginTop:20
    },
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        // alignContent: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: '#fff'
    }

})

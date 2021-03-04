import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'


import Logo from '../components/Logo'
import Form from '../components/Form'

import SignUp from './signUp'


export default function Login ({navigation}) {

       
        return (
            <View style={styles.container}>
                <Logo />
                <Form />
                <View style={styles.SingupText}>
                    <Text style={styles.TextLogin}>Don't have a account yet?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} >

                        <Text style={styles.SignUpButton}>SingUp</Text>
                    </TouchableOpacity>


                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#455a64',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SingupText: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    TextLogin: {
        color: '#000',
        opacity: 0.6,
        fontSize: 16
    },
    SignUpButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }

})

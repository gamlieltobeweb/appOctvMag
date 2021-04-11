import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'



import Logo from '../components/Logo'

import Register from '../components/Register'


export default function SignUp ({navigation}) {

    
        return (
            <View style={styles.container}>
                <Logo />
                <Register   />
                <View style={styles.SingupText}>
                    <Text style={styles.TextLogin}>Already have an account??</Text>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>

                        <Text style={styles.SignUpButton}>Sing in</Text>
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

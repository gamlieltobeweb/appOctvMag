import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import axios from 'axios'


let retour;
let number;
let Uemail;

class Forgot extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userEmail: '',
        }
    }

    main = async () => {
        let a = await this.sendEmail()

        console.log("aaaaaaa", a)
        if (a === "succses") {
            await this.navigateForgot()
        }
        else {
            alert("email not correctly")
        }
    }

    navigateForgot = () => {
        console.log("props forgot", this.props)
        this.props.navigation.navigate('VerificationNumber', {
            number: number,
            Uemail:this.state.userEmail
        });
        

    }


    sendEmail = async () => {
        const { userEmail } = this.state;


        if (!userEmail.includes("@")) {
            return alert("enter email correctly")
        } else {

            let Data = {
                email: userEmail,

            }
            await axios.post('http://gamliel.tobedev.com/mailer/info.php', {
                

                            data: Data
            })
                .then(response => {

                    console.log("responce", response.config.data)
                
                    console.log("responcedata1111", response.data)
                    number = response.data
                    Uemail = response.config.data
                    if (typeof (response.data) == "number") {
                        return retour = "succses"
                        // console.log("good")
                    } else {

                        // console.log("baddddddd")
                        return retour = "error"
                    }
                })


                .catch((error) => {
             
                    console.log(error.message)
                
                });
            return retour

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Enter Your Email"
                    placeholderTextColor="#ffffff"
                    style={styles.inputBox}
                    selectionColor='#fff'
                    keyboardType='email-address'
                    // onSubmitEditing={() => this.password.focus()}
                    onChangeText={userEmail => this.setState({ userEmail })}

                />

                <TouchableOpacity style={styles.button} onPress={this.main}>

                    <Text style={styles.buttonText}>Send Number</Text>



                </TouchableOpacity>

            </View>
        )
    }
}

export default function (props) {
    const navigation = useNavigation();
    return <Forgot {...props} navigation={navigation} number={number} Uemail = {Uemail} />;
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#749890",
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 3,
        padding: 150,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 180,
        marginBottom:100,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
        marginLeft: 10,
        bottom:10
    },
    button: {
        width: 120,
        backgroundColor: '#1c3',
        borderRadius: 10,
        marginVertical: 45,
        paddingVertical: 20,
    },
    inputBox: {
        width: 260,
        height: 40,
        backgroundColor: '#021458',
        opacity: 0.3,
        borderRadius: 10,
        fontSize: 22,
        color: '#ffffff',
        marginVertical: 50,
        textAlign: 'center'


    },
})

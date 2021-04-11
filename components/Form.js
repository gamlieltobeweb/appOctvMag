import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import axios from 'axios'

let retour;
let name;

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userEmail: '',
            userPassword: ''
        }
    }

    main = async () => {
        console.log("propsmain",this.props)
        let a = await this.userRegister()
        console.log("aaaaaaaa", a)
        if (a === "succses") {
            await this.navigateDetails()
        }
        else {
            alert("pas inscris ou ereur de connection")
        }
    }

    navigateDetails = () => {

        console.log("this.props", this.props);
        
        this.props.navigation.navigate('BrandStores',{
            userEmail:this.state.userEmail
        });
    };

    navigateForgot = () => {
        this.props.navigation.navigate('Forgot');

    }
    userRegister = async () => {

        const { userEmail } = this.state;
        const { userPassword } = this.state;

        if (userPassword.length == 0) {
            return alert("empty text")

        } else {
            if (!userEmail.includes("@")) {
                return alert("enter email correctly")
            } else {

                let Data = {
                    email: userEmail,
                    pass: userPassword,
                }
                console.log("Data", Data)
                await axios.post('http://gamliel.tobedev.com/api/login.php', {

                    data: Data
                })
                    .then(response => {console.log("loginresponce",response.data)
                    name = response.data
                        if (response.data.includes("succesly entry")) {
                            return retour = "succses"
                        } else {
                            return retour = "error"
                        }
                    })

                    // .then((response) => console.log("responce",response.data))

                    .catch((error) => {
                        // console.error(error.message);
                        console.log(error.message)
                        // alert("debile",error.message)
                    });
                return retour
            }
        }
    }
    render() {


        return (
            <View style={styles.container}>

                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="email"
                    placeholderTextColor="#ffffff"
                    style={styles.inputBox}
                    selectionColor='#fff'
                    keyboardType='email-address'
                    // onSubmitEditing={() => this.password.focus()}
                    onChangeText={userEmail => this.setState({ userEmail })}

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="password"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    // ref = {(input)=> {this.password = input}}
                    onChangeText={userPassword => this.setState({ userPassword })}
                    style={styles.inputBox}

                />


                <TouchableOpacity style={styles.button} onPress={this.main}>

                    <Text style={styles.buttonText}>Login</Text>



                </TouchableOpacity>
                <TouchableOpacity onPress={this.navigateForgot}>

                    <Text style={styles.forgot}>forgot password</Text>



                </TouchableOpacity>


            </View>
        )

    }
}

export default function (props) {
    const navigation = useNavigation();
    return <Form {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor: '#000',
        opacity: 0.3,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,


    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: 130,
        paddingVertical: 12
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 20,
        paddingVertical: 10,
    },
    forgot: {
        color: "blue",
        marginLeft: 90,
    }
})




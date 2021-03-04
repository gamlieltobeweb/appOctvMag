import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import axios from 'axios'
let myEmail;

let name;

let result;
class VerificationPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {

            userPassword: '',
            userPassword2: ''
        }
    }

    main = async () => {
        let r = await this.confirmePassword()
        console.log("rrrr", r)
        if (r === "succses") {
            await this.navigatePassword()
        } else {
            alert("erreur de connection")
        }
    }

    navigatePassword = () => {
        console.log("props forgot", this.props)
        this.props.navigation.navigate('Home', {
            Uemail: this.state.userEmail,
            name:name
        });


    }
    confirmePassword = async () => {
        myEmail = this.props.route.params.email
        console.log("props.password", this.props)
        const { userPassword } = this.state;
        const { userPassword2 } = this.state;

        if (userPassword.length == 0 || userPassword2.length == 0) {
            return alert("empty text")

        } else {
            if (userPassword != userPassword2) {
                alert("password different")
            } else {

                let Data = {

                    pass: userPassword,
                    // pass2: userPassword2,
                    email: myEmail
                }
                await axios.post('http://gamliel.tobedev.com/api/confirmPassowrd.php', {

                    // mode: 'cors',
                    // method: 'POST',
                    header: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                        // 'Access-Control-Allow-Origin': '*',
                        // 'Access-Control-Allow-Headers': '*'

                    },


                    data: Data

                    // succesly entry
                }).then((response) => {
                    console.log("resppnce datas", response.data)
                    name = response.data
                    if (response.data.includes("succesly entry")){
                        console.log("bien reussi")
                        result = "succses"
                    } else {
                        return result = "error"
                    }
                })
            }
        } return result
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="enter the new password"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    // ref = {(input)=> {this.password = input}}
                    onChangeText={userPassword => this.setState({ userPassword })}
                    style={styles.inputBox}

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="confirm the new password"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    // ref = {(input)=> {this.password = input}}
                    onChangeText={userPassword2 => this.setState({ userPassword2 })}
                    style={styles.inputBox}

                />

                <TouchableOpacity style={styles.button} onPress={this.main}>

                    <Text style={styles.buttonText}>Connection</Text>



                </TouchableOpacity>
            </View>
        )
    }
}
export default function (props) {
    const navigation = useNavigation();
    return <VerificationPassword {...props} navigation={navigation} />;
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#749890",
        flex: 1,
        // justifyContent: 'center',
        // marginLeft:290,
        // alignContent: 'center',
        borderRadius: 20,
        borderColor: "#000",
        borderWidth: 4,
        borderRadius: 6,
        margin: 80,
        padding: 80,
        marginLeft: 255,
        marginRight: 255,
        marginTop: 250,
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

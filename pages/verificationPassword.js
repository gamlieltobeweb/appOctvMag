import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import Login from '../pages/Login'

import axios from 'axios'
let myEmail;

let name;

let result;
class VerificationPassword extends Component {
    constructor(props) {
        super(props)
        this.myres = React.createRef()
        this.myres1 = React.createRef()
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
        this.props.navigation.navigate('Login', {
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

                    data: Data

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
                    placeholder="Enter New Password"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    returnKeyType="next"
                    onChangeText={userPassword => this.setState({ userPassword })}
                    onSubmitEditing={(() => this.myres.current.focus())}
                    style={styles.inputBox}

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Confirm New Password"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    returnKeyType="go"
                    onChangeText={userPassword2 => this.setState({ userPassword2 })}
                    // onSubmitEditing={(() => this.myres1.current.focus())}
                    ref={this.myres}
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
        // marginLeft:290,
        alignContent: 'center',
        borderRadius: 20,
        borderColor: "#000",
        borderWidth: 4,
        borderRadius: 6,
        margin: 30,
        padding: 140,

        marginTop: 230,
        alignItems: 'center'
    },
    inputBox: {
        width: 250,
        backgroundColor: '#fff4',
        borderRadius: 5,
        padding:22,
        height:16,
        fontSize: 15,
        color: '#ffffff',
        bottom:110,
        marginBottom:25,

    },
    buttonText: {
        fontSize: 16,
        height:20,
        color: '#ffffff',
        marginLeft: 60,
        bottom:10
    },
    button: {
        width: 200,
        backgroundColor: '#1c45',
        borderRadius: 10,
        marginVertical: 15,
        paddingVertical: 20,
        bottom:70
    },
    forgot: {
        color: "blue",
        marginLeft: 90,
    }
})

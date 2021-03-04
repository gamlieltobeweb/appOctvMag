import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';




import axios from 'axios'

let retour;

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userPrenom: '',
            // userTelephone: '',
            userEmail: '',
            userPassword: ''
        }
    }
    
    main = async () => {
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
        this.props.navigation.goBack();
    };
    userRegister = async () => {

        const { userName } = this.state;
        const { userPrenom } = this.state;
        const { userEmail } = this.state;
        const { userPassword } = this.state;
        // const { userTelephone } = this.state;

        if (userName.length == 0 || userPrenom.length == 0 || userPassword.length == 0 ) {
            alert("text input empty")
        } else {
            if (!userEmail.includes("@") && (!userEmail.includes("."))) {
                alert("enter email correctly")
            } else {

                let Data = {
                    nom: userName,
                    prenom: userPrenom,
                    email: userEmail,
                    pass: userPassword,
                    // tel: userTelephone,
                }
                await axios.post('http://gamliel.tobedev.com/api/server.php', {

                    data: Data
                })
                    .then((response) => response.data === "new row added" ? retour = "succses" : alert("erreur de connection"))

                    .catch((error) => {
                        // console.error(error.message);
                        console.log(error.message)
                        // alert("debile",error.message)
                    });
            }
        }return retour
    }
    render() {

        return (
            // <View>
            <View>

                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="enter your last name"
                    placeholderTextColor="#ffffff"
                    style={styles.inputBox}
                    selectionColor='#fff'
                    returnKeyType="next"
                    onChangeText={userName => this.setState({ userName })}

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="enter your first name"
                    placeholderTextColor="#ffffff"
                    style={styles.inputBox}
                    selectionColor='#fff'
                    returnKeyType="next"

                    onChangeText={userPrenom => this.setState({ userPrenom })}

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="enter your email"
                    returnKeyType="next"
                    placeholderTextColor="#ffffff"
                    onChangeText={userEmail => this.setState({ userEmail })}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    ref={(input) => this.emailinput = input}
                    style={styles.inputBox}

                />
                {/* <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="enter your Telephone Number"
                    placeholderTextColor="#ffffff"
                    style={styles.inputBox}
                    selectionColor='#fff'
                    returnKeyType="next"

                    onChangeText={userTelephone => this.setState({ userTelephone })}

                /> */}
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="enter password"
                    returnKeyType="go"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    onChangeText={userPassword => this.setState({ userPassword })}

                    ref={(input) => this.password = input}
                    style={styles.inputBox}

                />


                {/* <TouchableOpacity style={styles.button} onPress={this.userRegister}  > */}
                <TouchableOpacity style={styles.button} onPress={this.main}  >

                    <Text style={styles.buttonText}>Login</Text>



                </TouchableOpacity>

            </View>
            // </View >
        )
    }
}

export default function (props) {
    const navigation = useNavigation();
    return <Register {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        // alignContent: 'center'
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
    }
})


    //     const headers = {
    //         "Content-Type": "application/json",
    //         'Accept': 'application/json',
    //         'Access-Control-Allow-Origin': '*'

    //     };
    //   await  axios.get('http://localhost/api/message.php',headers)

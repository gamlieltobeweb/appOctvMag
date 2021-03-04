import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

let email;


class VerificationNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NumberVerification: '',
            secondNumber: this.props.route.params.number

        }
    }
    navigateVerifNumber = () => {
        this.props.navigation.navigate('VerificationPassword', {
            email: email
        });

    }

    main = async () => {
        email = this.props.route.params.Uemail


        let myNumber = this.props.route.params.number
        myNumber = myNumber.toString().slice(0, -1)
        console.log("this.props", this.props.route.params);
        console.log("mynuber", myNumber)

        if (this.state.NumberVerification == myNumber) {
            await this.navigateVerifNumber()
        } else {
            alert("bad")
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="enter your number"
                    placeholderTextColor="#ffffff"
                    style={styles.inputBox}
                    selectionColor='#fff'
                    keyboardType='number-pad'
                    // onSubmitEditing={() => this.password.focus()}
                    onChangeText={NumberVerification => this.setState({ NumberVerification })}

                />

                <TouchableOpacity style={styles.button} onPress={this.main}>

                    <Text style={styles.buttonText}>Send</Text>



                </TouchableOpacity>

            </View>
        )
    }
}
export default function (props) {
    const navigation = useNavigation();
    return <VerificationNumber {...props} navigation={navigation} />;
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
})

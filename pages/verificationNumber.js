import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

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
                    style={styles.inputBox}
                    selectionColor='#fff'
                    keyboardType='number-pad'
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
        justifyContent: 'center',
        borderRadius: 4,
        margin: 30,
        padding: 130,
        marginTop: 150,
        alignItems: 'center'
    },
    inputBox: {
        // bottom:30,
        padding:28,
        width: 250,
        height:18,
        backgroundColor: '#f26874',
        // opacity: 0.3,
        // borderRadius: 9,
        // paddingHorizontal: 16,
        fontSize: 17,
        fontWeight: 'bold',
        // color: '#ff0258',
        marginVertical: 60,


    },
    buttonText: {
        fontSize: 16,
        // fontWeight: '500',
        color: '#ffffff',
        marginLeft: 60,
        bottom: 10,
        // paddingVertical: 1,
        justifyContent: 'center'
    },
    button: {
        width: 160,
        backgroundColor: '#1c313a',
        borderRadius: 10,
        marginVertical: 25,
        paddingVertical: 20,
        margin: -60,
    },
})

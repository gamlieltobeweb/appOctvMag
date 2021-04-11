import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Keyboard, Platform } from 'react-native'
import { TextInput } from 'react-native-paper';
import Logo from '../components/Logo'

import { useNavigation } from '@react-navigation/native';

import axios from 'axios'


let retour;
let email;


class StoreDetails extends Component {
    constructor(props) {
        super(props)
        this.myres = React.createRef()
        this.myres1 = React.createRef()
        this.myres2 = React.createRef()
        this.myres3 = React.createRef()
        this.myres4 = React.createRef()
        this.state = {
            storeName: '',
            NameResponsible: '',
            storeCode: '',
            storeAdress: '',
            emailMagasin: '',
            telephone: '',
            language: 'java',
            enable: false
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


        console.log("this.propsStoreDetail", this.props);
        this.props.navigation.goBack();
    };
    userRegister = async () => {

        console.log("inuserregister")

        const { storeName } = this.state;
        const { NameResponsible } = this.state;
        const { storeCode } = this.state;
        const { storeAdress } = this.state;
        const { emailMagasin } = this.state;
        const { telephone } = this.state;

        console.log("state", this.state)
        if (storeName.length == 0 ||
            NameResponsible.length == 0 ||
            storeCode.length == 0 ||
            storeAdress.length == 0 ||
            telephone.length == 0
            // || (!isNaN(telephone))
        ) {
            alert("text input empty")
            console.log("if")
        }
        else {
            console.log("else")
            let Data = {
                nom: storeName,
                nom_responsable: NameResponsible,
                codemagasin: storeCode,
                adresse: storeAdress,
                emailMagasin: emailMagasin,
                telephone: telephone,
                email: this.props.route.params.email
            }

            console.log("dataMagasin", Data)
            await axios.post('http://gamliel.tobedev.com/api/store.php',
                {
                    data: Data
                })
                // .then((response) => console.log("responsestoredata", response.data))
                .then((response) => response.data === "new row added" ? retour = "succses" : alert("ereur"))

                .catch((error) => {
                    // console.error(error.message);
                    console.log(error.message)
                    // alert("debile",error.message)
                });
            console.log("retourStore", retour)
        } return retour
    }
    render() {

        return (

            <KeyboardAvoidingView style={styles.container} behavior={'height'} enabled={this.state.enable}>
                {/* <Text>Enregistrer Nouveau Magasin</Text> */}

                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="entrer nom de magasin "
                    placeholderTextColor="#000"
                    style={styles.inputBox}
                    onFocus={() => this.setState({ enable: false })}
                    selectionColor='#fff'
                    returnKeyType="next"
                    onSubmitEditing={(() => this.myres.current.focus())}
                    onChangeText={storeName => this.setState({ storeName })}

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="entrer nom responsable"
                    placeholderTextColor="#000"
                    style={styles.inputBox}
                    selectionColor='#000'
                    returnKeyType="next"
                    onFocus={() => this.setState({ enable: false })}
                    // blurOnSubmit={false}
                    onSubmitEditing={(() => this.myres1.current.focus())}
                    ref={this.myres}

                    onChangeText={NameResponsible => this.setState({ NameResponsible })}

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="entrer Code magasin"
                    returnKeyType="next"
                    placeholderTextColor="#000"
                    onChangeText={storeCode => this.setState({ storeCode })}
                    ref={(input) => this.emailinput = input}
                    style={styles.inputBox}
                    onFocus={() => this.setState({ enable: false })}
                    onSubmitEditing={(() => this.myres2.current.focus())}
                    ref={this.myres1}
                    keyboardType='numeric'




                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="entrer votre telephone"
                    placeholderTextColor="#000"
                    style={styles.inputBox}
                    selectionColor='#000'
                    returnKeyType="next"
                    onFocus={() => this.setState({ enable: true })}
                    autoCompleteType='cc-number'
                    textContentType='telephoneNumber'
                    onChangeText={telephone => this.setState({ telephone })}
                    onSubmitEditing={(() => this.myres3.current.focus())}
                    ref={this.myres2}
                    keyboardType='numeric'

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="entrer adress magasin"
                    placeholderTextColor="#000"
                    style={styles.inputBox}
                    selectionColor='#000'
                    returnKeyType="next"
                    // autoFocus={false}
                    onFocus={() => this.setState({ enable: true })}
                    textContentType='addressCity'

                    onChangeText={storeAdress => this.setState({ storeAdress })}
                    onSubmitEditing={(() => this.myres4.current.focus())}
                    ref={this.myres3}

                />


                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="entrer email magasin"
                    placeholderTextColor="#000"
                    style={styles.inputBox}
                    onFocus={() => this.setState({ enable: true })}
                    selectionColor='#fff'
                    returnKeyType="go"
                    onFocus={() => this.setState({ enable: true })}
                    autoCompleteType='email'
                    onChangeText={emailMagasin => this.setState({ emailMagasin })}
                    ref={this.myres4}
                    textContentType='emailAddress'
                    keyboardType='email-address'


                />



                {/* <TouchableOpacity style={styles.button} onPress={this.userRegister}  > */}
                <TouchableOpacity style={styles.button} onPress={this.main}  >

                    <Text style={styles.buttonText}>Save</Text>



                </TouchableOpacity>
                {/* 
                <TouchableOpacity onPress={this.addComponet}>

                    <Image style={styles.image} source={require('../images/logoPlus.png')} />
                </TouchableOpacity> */}

                {/* </View> */}
            </KeyboardAvoidingView>
            // </View >
        )
    }
}

export default function (props) {
    const navigation = useNavigation();
    return <StoreDetails {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
    },
    inputBox: {
        // position:'absolute',
        borderColor: 'blue',
        padding: 1,
        marginTop: 20,
        width: 250,
        height: 50,
        backgroundColor: '#000',
        opacity: 0.3,
        borderRadius: 5,
        // paddingHorizontal: 16,
        fontSize: 10,
        color: '#000',
        marginVertical: 0,
        margin: 60,
        top: 100,
        fontSize: 20,

    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 70,
        paddingVertical: 8
    },
    button: {
        width: 180,
        backgroundColor: '#006600',
        borderRadius: 10,
        margin: 140,
        marginLeft: 100,
        // marginRight:40
        // marginVertical: 20,
        // paddingVertical: 10,
    },
    select: {
        // border: 1,
        // solid #ddd;
        width: '100',
        height: '60',
        fontSize: 20,
        color: '#3333',
        margin: 10,
        // 0;
        padding: 0
        // 0 0 25px;
    },
    image: {
        width: 70,
        height: 70,
        // marginLeft: 100,
        left: 415,
        // marginRight:10,
        marginTop: 20,
        bottom: 25
    },
})

import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button, Image } from 'react-native'
import Select from 'react-select';
// import RNPickerSelect from 'react-native-picker-select';

import { useNavigation } from '@react-navigation/native';

import axios from 'axios'

let retour;

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default class StoreDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            storeName: '',
            NameResponsible: '',
            storeCode: '',
            storeAdress: '',
            emailMagasin:'',
            language: 'java',
            selectedOption: null,
        }
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    

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

        const { storeName } = this.state;
        const { NameResponsible } = this.state;
        const { storeCode } = this.state;
        const { storeAdress } = this.state;
        const { emailMagasin } = this.state;

        if (storeName.length == 0 || NameResponsible.length == 0 || storeCode.length == 0 || storeAdress.length == 0) {
            alert("text input empty")
        } else {



            let Data = {
                nom: storeName,
                nom_responsable: NameResponsible,
                codemagasin: storeCode,
                adresse: storeAdress,
                emailMagasin: emailMagasin,
            }

            console.log("dataMagasin",Data)
            await axios.post('http://gamliel.tobedev.com/api/store.php', {



                data: Data
            })
                .then((response) => response.data === "new row added" ? retour = "succses" : alert("ereur"))

                .catch((error) => {
                    // console.error(error.message);
                    console.log(error.message)
                    // alert("debile",error.message)
                });

        } return retour
    }
    render() {
        const { selectedOption } = this.state;

        return (
            // <View>
            <View>

                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="entrer nom de magasin "
                    placeholderTextColor="#ffffff"
                    style={styles.inputBox}
                    selectionColor='#fff'
                    returnKeyType="next"
                    onChangeText={storeName => this.setState({ storeName })}

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="entrer nom responsable"
                    placeholderTextColor="#ffffff"
                    style={styles.inputBox}
                    selectionColor='#fff'
                    returnKeyType="next"

                    onChangeText={NameResponsible => this.setState({ NameResponsible })}

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="entrer Code magasin"
                    returnKeyType="next"
                    placeholderTextColor="#ffffff"
                    onChangeText={storeCode => this.setState({ storeCode })}
                    ref={(input) => this.emailinput = input}
                    style={styles.inputBox}

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="entrer adress magasin"
                    placeholderTextColor="#ffffff"
                    style={styles.inputBox}
                    selectionColor='#fff'
                    returnKeyType="next"

                    onChangeText={storeAdress => this.setState({ storeAdress })}

                />
                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="entrer email magasin"
                    placeholderTextColor="#ffffff"
                    style={styles.inputBox}
                    selectionColor='#fff'
                    returnKeyType="next"

                    onChangeText={emailMagasin => this.setState({ emailMagasin })}

                />
                {/* <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    placeholder={"choisi ta ville"}
                    styles={styles.select}
                /> */}

                {/* <TouchableOpacity style={styles.button} onPress={this.userRegister}  > */}
                <TouchableOpacity style={styles.button} onPress={this.main}  >

                    <Text style={styles.buttonText}>Login</Text>



                </TouchableOpacity>
{/* 
                <TouchableOpacity onPress={this.addComponet}>

                    <Image style={styles.image} source={require('../images/logoPlus.png')} />
                </TouchableOpacity> */}

            </View>
            // </View >
        )
    }
}

// export default function (props) {
//     const navigation = useNavigation();
//     return <StoreDetails {...props} navigation={navigation} />;
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    inputBox: {

        padding: 20,
        marginTop: 50,
        width: 250,
        height: 0,
        backgroundColor: '#000',
        opacity: 0.3,
        borderRadius: 5,
        // paddingHorizontal: 16,
        fontSize: 16,
        color: '#F0FFF0',
        marginVertical: 0,
        margin: 120,
        top: 0

    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 130,
        paddingVertical: 12
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 10,
        margin: 90,
        marginLeft: 100,
        // marginRight:40
        // marginVertical: 20,
        // paddingVertical: 10,
    },
    select: {
        background: '#f2f2f2',
        border: 1,
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

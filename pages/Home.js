import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import * as Speech from 'expo-speech';

let nameVoice;

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    myname = () => {
        let name = this.props.route.params.name
        return nameVoice = name.replace('succesly entry', "")

    }

    componentDidMount() {
        console.log("propsHOme", this.props.route.params)
        let bonjour = "Bienvenu a "

        let name = this.props.route.params.name

        console.log("name",name)
        let nameVoice = name.replace('succesly entry', "")

        let bjr = bonjour.concat(nameVoice)

        console.log("nameVoice", nameVoice);
        console.log("bjr", bjr);


        Speech.speak(bjr, {
            language: 'fr'
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Bienvenu a {this.myname()}  </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#455a64',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 50,
        fontWeight: "bold"
    },


})

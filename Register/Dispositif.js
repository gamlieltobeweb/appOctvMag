import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

import axios from 'axios'


export default class Dispositif extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             event:''
        }
    }
    view = () => {
        console.log("viewLive", this.props)
        this.props.navigation.navigate('Video_live');
    }
    

press = async (e) => {
        console.log("event", e)
        await this.setState({ event: e })
        await this.view()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Mon mail: {"\n"}{this.props.route.params.email}  </Text>
                <Text style={styles.text}>{"\n"} Mon Magasin:{"\n"} {this.props.route.params.event} </Text>
                {/* <Text> {"\n"}</Text> */}
                <Text style={{ fontSize: 18, fontWeight: 'bold', top: 100 }}>Type Ecran</Text>

                <Text>{"\n"}</Text>
                <View style={{top:100}}>

                <Button  title="Horizontal" color="#df9fbf" onPress = {()=>{this.press("Horizontal")}}></Button>
                {/* {temps.map((event, i) => { return <Button key={i} onPress={() => { this.press(event) }} title={event}>{event}</Button> })} */}

                <Text>{"\n"}</Text>
                <Button title="Vertical" color="#df9fbf" onPress = {()=>{this.press("Vertical")}}></Button>
                <Text>{"\n"}</Text>
                <Button title="Ecran Vitrine" color="#df9fbf" onPress = {()=>{this.press("Ecran Vitrine")}}></Button>
                <Text>{"\n"}</Text>
                <Button title="Ecran Carre" color="#df9fbf" onPress = {()=>{this.press("Ecran Carre")}}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        // marginTop:150
    },
    text: {
        top: 90,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center',
        color: 'green'

    }

})

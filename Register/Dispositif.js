import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { color } from 'react-native-reanimated'

export default class Dispositif extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.text}> Mon mail: {"\n"}{this.props.route.params.email }  </Text>
                <Text style = {styles.text}>{"\n"} Mon Magasin:{"\n"} {this.props.route.params.event} </Text>
               <Text> {"\n"}</Text>
                <Text style={{fontSize:18,fontWeight:'bold',top:90}}>choix dispositif</Text>
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
    text:{
        top:90,
        fontWeight: 'bold',
        justifyContent:'center',
        alignContent:'center',
        color:'green'
        
    }

})

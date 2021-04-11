import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

class HomePage extends Component {

    navigate = () => {

        console.log("this.props", this.props);
        
        this.props.navigation.navigate('StoreDetails');
    };
    render() {
        return (
            <View style={styles.home}>
                <View style={styles.album}>
                    <Text style={styles.text}>Je souhaite disposer de la solution OCTV </Text>
                    <TouchableOpacity onPress={this.navigate} style={styles.button}>
                        <Text style={styles.button}>Souscrire à l'offre</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.album1}>

                </View>


            </View>
        )
    }
}

export default function (props) {
    const navigation = useNavigation();
    return <HomePage {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#F0F8FF',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }, album: {
        flex: 1,
        marginLeft: 250,
        marginRight: 250,
        padding: 220,
        margin: 20,
        borderRadius: 20,
        borderColor: '#000',
        flexDirection: 'row',
        alignSelf: 'center',
        width: 100,
        height: 50,
        // height:100,
        // width:100,
        // position:'relative',
        backgroundColor: '#FFE4C4',
        // border: 2,

    }, album1: {
        marginRight: 250,

        flexDirection: 'row',
        alignSelf: 'center',
        flex: 1,
        marginLeft: 250,
        padding: 220,
        margin: 20,
        borderRadius: 20,
        borderColor: '#000',
        flexDirection: 'row',
        // height:100,
        width: 100,
        height: 50,
        // position:'relative',
        backgroundColor: 'green',
        // border: 2,

    },
    text: {
        color: 'red',
        fontSize: 27,
        fontWeight: 'bold',
        margin: -145
    },
    button: {
        top: 120,
        color: '#000',
        fontWeight: 'bold',
        fontSize:20


    }

});

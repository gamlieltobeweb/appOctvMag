import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, ActivityIndicator, Button, Modal, SafeAreaView, FlatList } from 'react-native'
import Logo from '../components/Logo'

import { useNavigation } from '@react-navigation/native';

import axios from 'axios'

let after;
let data;
let result;
let responsable;
let name = []
let arr = []
let email;
let message;
let temps;
let temp;
let event;
let res;

let nomResponsable;
class BrandStores extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            animating: true,
            show: false,
            ViewName: [],
            event: ''
        }
    }


    viewDetails = async () => {
        let sliceString = responsable

        console.log("tt", typeof (responsable))

        after = sliceString.replace("Array", "")

        console.log("after", after)
        console.log("aftertt", typeof (after))

        // if (after == '[null]') {
        //     console.log("in")
        //     after = "vous n'avez aucun magasin"

        // } else {
        //     return after
        // }

        after == '[null]' ? after = "Vous n'avez aucun magasin inscris" : after
        console.log("afterafter", after)


        after = after.slice(0, -1);
        temps = after.split(',')

        // console.log(rev(a))

        console.log("tempsType", typeof (temps))
        console.log("temps", temps)
        console.log("tempsLength", temps.length)


        return temps

    }

    arrayfunc = () => {
        // let a = after
        console.log("afterArray", after)

        var convertarray = Array.from(after)
        let resultArray = convertarray.join('')

        console.log("resultArray", resultArray)
        console.log("resultArray", typeof (resultArray))
        // resultArray.map()
        return resultArray
    }



    view = () => {
        console.log("viewbrand", this.props)
        this.props.navigation.navigate('DeliveryDetail', {
            email: email,
            event: this.state.event
        });
    }

    async componentDidMount() {

        console.log("Props", this.props.route.params.userEmail)
        email = this.props.route.params.userEmail
        await axios.post('http://gamliel.tobedev.com/api/DetailStore.php', {

            data: this.props.route.params.userEmail


        }).then((response) => {
            console.log("resppnce datas", response.data)
            responsable = response.data

            if (response.data == null) {
                message = "nous n'avez aucun magasin inscris"
            } else {

                if (response.data.includes("succesly entry")) {
                    console.log("bien reussi")
                    result = "succses"
                } else {
                    return result = "error"
                }
            }
        }).catch(err => {
            console.log(err)
        })
        nomResponsable = await responsable
        console.log("responsable", nomResponsable)
        name = await this.viewDetails()

        await this.setState({ ViewName: name })

        res = await this.arrayfunc()

        console.log("res", res)

        console.log("namemagasin", name)
        console.log("bbbbbbbbbb", this.state.ViewName)
        if (after) {
            this.setState({ animating: false })
        }

        console.log("state", this.state.animating)

    }

    addComponent = async () => {

        console.log("BransProps", this.props)
        this.props.navigation.navigate('StoreDetails', {
            email: email
        });

    }
    press = async (event) => {
        console.log("event", event)
        await this.setState({ event: event })
        await this.view()
    }


    render() {
        console.log("stateall", this.state)

        return (

            <View style={styles.container}>
                <Logo />
                {/* <FlatList data={rendu}  renderItem={(e => <Text>{e}</Text>)}>  </FlatList> */}
                {/* {name ? <ActivityIndicator size="large" color="#000" />:null} */}

                {this.state.animating == false ? (
                    <View>
                        {/* <TouchableOpacity onPress={this.view}> */}
                        <Text style={styles.textmag}>Mes Magasin</Text>
                        <Text style={styles.textmagasin}>
                            {/* {after} */}

                        </Text>
                        {temps.map((event, i) => { return <Button key={i} onPress={() => { this.press(event) }} title={event}>{event}</Button> })}
                        {/* {temps.map((event, i) => <Button key={i} onPress={() => { this.setState({event:event}) }} title={event}></Button>)} */}
                        {/* </TouchableOpacity> */}
                    </View>
                ) : (
                    <ActivityIndicator style={styles.activity} size="large" color="#000" />
                )}



                {/* <StoreDetail/> */}

                <TouchableOpacity  onPress={this.addComponent}>

                    <Image style={styles.image} source={require('../images/tel.png')} />
                </TouchableOpacity>


            </View>
            // </SafeAreaView>
        )
    }
}


export default function (props) {
    const navigation = useNavigation();
    return <BrandStores {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        top: 50,
        left: 90,
        right: 90,
        width: 200,
        height: 190,
        marginLeft: 90,
        marginTop: 90,

    },
    text: {
        marginTop: 10,
        fontWeight: 'bold',

    },
    activity: {
        top: 120
    }
    , textmagasin: {
        top: 30,
        fontWeight: 'bold',
        color: 'red',
        fontSize: 30

    },
    textmag: {
        top: 30,
        fontWeight: 'bold',
        color: '#000',
        fontSize: 10

    },
    touch: {

        margin: 0,
        padding: 0,
        borderColor: '#000',
        bottom: 40
    }
});

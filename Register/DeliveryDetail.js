import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, SectionList, StatusBar, ActivityIndicator, Button, Image } from 'react-native'
import axios from 'axios'

import Logo from '../components/Logo'

const options = ["Apple", "Banana", "Orange"];

let Data;
var nameArr = []
let after;
let arr = []
let temps;
let tt = []
let name;
let i;

export default class DeliveryDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            select: [],
            select: '',
            loading: true,
            dataSource: [],
            flag: false
        }
    }
    addComponent = async () => {

        console.log("Dispositif", this.props.route.params)
        this.props.navigation.navigate('Dispositif', {
            email: this.props.route.params.email,
            event: this.props.route.params.event
            

        }
        );

    }
    retour = () => {
        this.props.navigation.goBack();
    }

    viewDetails = async () => {
        let sliceString = Data

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


        temps = after.split(',')

        // console.log(rev(a))

        console.log("tem", typeof (temps))
        console.log("tem", temps)

        return temps

    }

    async componentDidMount() {
        console.log("propsdelivery", this.props.route.params)

        axios.post('http://gamliel.tobedev.com/api/details.php', {
            data: this.props.route.params.email,
            event: this.props.route.params.event

        }).then(async (response) => {
            console.log("resppnce datas delivery", typeof (response.data))
            console.log("resppnce datas delivery", response.data)
            Data = response.data

            name = await this.viewDetails()
            await this.setState({ flag: true })

            if (this.state.flag) {




                await arr.splice(0, 0, name)


                console.log("name", name)

                console.log("this.state.flag", this.state.flag)
            }
        }).catch(err => { console.log(err) })
    }

    arr = arr.shift()
    render() {

        return (
            <View style={styles.container}>
                <Logo />
                {/* <View>{this.state.flag ? arr.map((e, i) => { return (<View><Text key={i} style={{ flex: 1, color: "red" }}>{e} </Text></View>) }) :
                 <ActivityIndicator style={styles.activity} size="large" color="#000" />}</View> */}

                <Text style={styles.textview}>details magasin</Text>
                <View >{this.state.flag ? <Text style={{ flex: 1, color: "red" }}> {temps.map((e, i) => <Text style={styles.viewDetail} key={i}>{`\u2022 ${e}` + "\n"}</Text>)}</Text> : <ActivityIndicator size="large" color="#000" />}</View>

                <View style={{ bottom: 750, left: 10, right: 20 }}>
                    <TouchableOpacity onPress={this.addComponent}>
                        <Text style={styles.dispositif}>choisir dispositif</Text>
                        <Image style={styles.image} source={require('../images/tel.png')} />
                    </TouchableOpacity>

                    <Button title="retour" color="red" onPress={this.retour} />
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 60,
        backgroundColor: '#A9A900',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    title: {
        fontSize: 24
    },
    textview: {
        // top:30,
        // bottom: 570,
        margin: 20,
        fontWeight: 'bold',
        color: 'blue'
    },
    activity: {
        top: 120
    },
    viewDetail: {
        top: 90,
        // padding:150,
        fontWeight: 'bold',
        // alignContent:'center',
        color: '#025489',
        // justifyContent:'center',
        fontSize: 18,
        // bottom:10
    },
    image: {
        // top: 10,
        bottom: 30,
        left: 70,
        // right: 50,
        // width: 100,
        // height: 190,
        // marginLeft: 1,
        marginTop: 90,

    }, dispositif: {
        alignContent: 'center',
        top: 110,
        left: 110,
        fontWeight: 'bold',
        color: 'black',
        // right: 50,
        // width: 100,
        // height: 190,
        // marginLeft: 1,
        marginTop: 90,
    }
});

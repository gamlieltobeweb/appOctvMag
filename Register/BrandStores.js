import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, ActivityIndicator, Button, Modal, SafeAreaView, FlatList } from 'react-native'
// import Modal from 'react-native-modal'


import { useNavigation } from '@react-navigation/native';

import axios from 'axios'

let after;
let data;
let result;
let responsable;
let name = []
let arr = []
let email;

let a;
class BrandStores extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            animating: true,
            show: false,
            ViewName: []
        }
    }


    viewDetails = async () => {

        let sliceString = responsable

        after = sliceString.replace("succesly entry", "")

        console.log("after", after)
        
        if (after == [null] ) {
            console.log("in")
            after == ""
            
        }else{

            return after
        }
        // console.log("after", after)

    }


    async componentDidMount() {

        console.log("Props", this.props.route.params.userEmail)
        email = this.props.route.params.userEmail
        await axios.post('http://localhost/Octv/DetailStore.php', {
            data: this.props.route.params.userEmail

            // succesly entry
        }).then((response) => {
            console.log("resppnce datas", typeof(response.data))
            responsable = response.data
            if (response.data.includes("succesly entry")) {
                console.log("bien reussi")
                result = "succses"
            } else {
                return result = "error"
            }
        }).catch(err => {
            console.log(err)
        })
        a = await responsable
        console.log("responsable", a)
        name = await this.viewDetails()

        await this.setState({ ViewName: name })

        console.log("namemagasin", name)
        console.log("bbbbbbbbbb", this.state.ViewName)

        if (name) {
            this.setState({ animating: false })
        }

        console.log(this.state.animating)
    }

    addComponent = async () => {

        console.log("BransProps", this.props)
        this.props.navigation.navigate('StoreDetails', {
            email: email
        });

    }

    displayView = async () => {

        for (let i = 0; i < name.length; i++) {


        }
        // await this.state.ViewName.map(e => {
        //     return <View> <Text>{e}</Text></View>
        // })
    }
    openModal = () => {
        this.setState({
            show: !this.state.show
        })
    }



    render() {

        return (


            <View style={styles.container}>
                {/* <FlatList data={rendu}  renderItem={(e => <Text>{e}</Text>)}>  </FlatList> */}

                <Text>{after}</Text>


                {/* <StoreDetail/> */}

                <TouchableOpacity onPress={this.addComponent}>

                    <Image style={styles.image} source={require('../images/logoPlus.png')} />
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
        flex: 1,
        width: 70,
        height: 70,
        marginLeft: 290,
        marginTop: 470,

    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00ff00',
        padding: 100

    },
    text: {
        marginTop: 10,
        fontWeight: 'bold',

    }
});

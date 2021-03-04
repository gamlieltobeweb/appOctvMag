import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DeliveryDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> DeliveryDetail </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A9A9A9',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

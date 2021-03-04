import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class BillingStore extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> BillingStore </Text>
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

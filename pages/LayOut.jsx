import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function LayOut() {
    return (
        <View style={style.container}>
            <View style={style.part1}>
                <Button mode='contained'>Click Me</Button>
            </View>
            <View style={style.part2}>
                <View style={style.inner1}>

                </View>
                <View style={style.inner2}>

                </View>
            </View>
            <View style={style.part3}>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    part1: {
        flex: 2,
        backgroundColor: 'red',
        justifyContent: "center",
    },
    part2: {
        flex: 3,
        backgroundColor: 'green',
        flexDirection: 'row'
    },
    part3: {
        flex: 1,
        backgroundColor: 'blue',
    },
    inner1: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    inner2: {
        flex: 1,
        backgroundColor: 'brown'
    }
})
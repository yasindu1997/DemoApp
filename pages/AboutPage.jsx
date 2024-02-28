import { StyleSheet, Text, Pressable, View } from 'react-native';
import React, { useState } from 'react'
import RoundButton from '../components/RoundButton'
import MyModel
    from '../components/MyModel';
export default function AboutPage() {
    const [modalVisible, setModalVisible] = useState(false);

    const offModel = ()=>{
        setModalVisible(false);
    }

    return (
        <View>
            <Text>AboutPage</Text>
            <RoundButton title="Press Me" color="red" />
            <RoundButton title="Press Here" color="green" />
            <RoundButton title="Click Me" color="blue" />
            <RoundButton title="Mawa Obanna" color="black" />

            <MyModel visible={modalVisible} off = {offModel} />

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})


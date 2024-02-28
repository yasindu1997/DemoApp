import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import lankaNIC from 'lanka-nic'

export default function HomePage() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const saveStudent = () => {
        let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC("971450320v");
        console.log("Birthday - " + dateOfBirth + " ---> " + gender);
    }

    return (
        <View>
            <Text>HomePage</Text>
            <TextInput onChangeText={(txt) => { setName(txt) }} style={styles.input} placeholder='Enter your NIC' />
            <Button onPress={saveStudent} title='Save Student' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: '70%'
    }
})
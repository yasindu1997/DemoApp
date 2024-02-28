import { useState } from "react";
import { Text, View, ActivityIndicator, StyleSheet, Button, Image, TextInput } from "react-native";

function LoginPage() {
    const [name, setName] = useState(""); //this is a state

    const saveStudent = () => {
        console.log("Save button clicked");
    }

    return (
        <View>
            <Text style={{ color: 'red', fontSize: 20 }}>Login Page</Text>
            <Text style={xxx.txt}>Second Text</Text>
            <ActivityIndicator size="large" color="#00ff00" />
            <Button
                onPress={saveStudent}
                title="Save Student"
                color="green"
                accessibilityLabel="Learn more about this purple button"
            />
            <Image
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                width={200}
                height={200}
            />

            <Image
                source={require('../assets/company.png')}
                style={xxx.img}
            />
            <TextInput
                placeholder="Enter email"
                style={xxx.input}
            />
        </View>
    )
}

const xxx = StyleSheet.create({
    txt: {
        color: 'blue',
        fontSize: 20,
        marginTop: 30,
    },
    img: {
        width: 150,
        height: 100
    },
    input:{
        borderWidth:1,
        width:'40%',
        marginLeft:20
    }
})

export default LoginPage;
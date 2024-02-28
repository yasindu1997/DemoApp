import { StyleSheet, Text, View } from "react-native";
import RoundButton from "../components/RoundButton";
import { Button, TextInput } from 'react-native-paper';

//parent compoents - view, scrolleview, keybordavoiding, <></>

function RegisterPage() {
    return (
        <View>
            <Text>Register Component</Text>
            <RoundButton />
            <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
                Press me
            </Button>

            <TextInput
                label="Email"
                style={styles.txt}
                mode="outlined"
            />

            <TextInput
                label="Password"
                style={styles.txt}
                mode="outlined"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        width: '60%',
        marginBottom:10,
    }
})

export default RegisterPage;
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function RoundButton(props) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: props.color }]}>
            <Text style={styles.txt}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: '30%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        color: 'white'
    }
})

export default RoundButton;
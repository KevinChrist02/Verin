import { StyleSheet, View, Pressable, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';


export default function Button() {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
                <Feather name="plus" size={24} color="black" style={styles.buttonIcon} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#abff4f',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIcon: {
        color: '000000',
    }
})

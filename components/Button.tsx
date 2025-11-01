import { StyleSheet, View, Pressable } from "react-native";
import Feather from '@expo/vector-icons/Feather';

interface ButtonProps {
    onPress: () => void;
}

export default function Button({ onPress }: ButtonProps) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonIcon: {
        color: '#000000',
    },
})

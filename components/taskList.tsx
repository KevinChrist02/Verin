import { StyleSheet, Text } from "react-native";

export default function TaskList() {
    return (
        <Text style={styles.text}> This is my List component</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
    }
})

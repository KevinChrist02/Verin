import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import TaskList from "@/components/taskList";
import Button from '@/components/Button';
import { useTodos } from '../../context/TodoContext';


export default function Index() {
    const { todos } = useTodos(); // Get todos from context
    const router = useRouter();

    const handlePressButton = () => {
        router.push("/addTaskModal"); // Navigate to the new modal route
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listContainer}>
                <TaskList todos={todos} />
            </View>
            <View style={styles.footerContainer}>
                <Button onPress={handlePressButton} />
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    listContainer: {
        flex: 1,
        width: '100%', // Ensure it takes full width
        paddingHorizontal: 20, // Add padding for left alignment
    },
    footerContainer: {
        flex: 1 / 6,
        width: '100%', // Ensure it takes full width
        justifyContent: 'center', // Center the button
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});

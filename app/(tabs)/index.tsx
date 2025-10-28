import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskList from "@/components/taskList";
import Button from '@/components/Button';


export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listContainer}>
                <TaskList />
            </View>
            <View style={styles.footerContainer}>
                <Button />
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
    },
    footerContainer: {
        flex: 1 / 12,
        alignItems: 'center',
    }
});

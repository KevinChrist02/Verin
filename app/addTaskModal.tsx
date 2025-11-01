import { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Todo } from '../types';
import { useTodos } from '../context/TodoContext';

export default function AddTaskModal() {
    const [newTaskText, setNewTaskText] = useState('');
    const router = useRouter();
    const { addTodo } = useTodos(); // Get addTodo from context

    const handleAddTask = () => {
        if (newTaskText.trim() !== '') {
            const newTodo: Todo = {
                id: Math.random().toString(36).substring(2, 15), // Generate a random string ID
                text: newTaskText,
                completed: false,
            };
            // This is a placeholder. We will need a way to pass this back to the main list.
            // For now, it will just navigate back.
            addTodo(newTodo); // Add todo using context function
            router.back(); // Go back to the previous screen (index.tsx)
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="What needs to be done?"
                value={newTaskText}
                onChangeText={setNewTaskText}
                onSubmitEditing={handleAddTask} // Add task on pressing Enter
                autoFocus
            />
            <Pressable style={styles.addButton} onPress={handleAddTask}>
                <Text style={styles.addButtonText}>Add Task</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    input: {
        width: '90%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: '#abff4f',
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    addButtonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

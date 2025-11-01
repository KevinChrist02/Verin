import { StyleSheet, Text, View, Pressable } from "react-native";
import { Todo } from "../app/types";
import { useTodos } from '../context/TodoContext';

interface TaskListProps {
    todos: Todo[];
}

export default function TaskList({ todos }: TaskListProps) {
    const { deleteTodo } = useTodos();

    return (
        <View style={styles.taskListContainer}>
            {todos.map((todo) => (
                <Pressable
                    key={todo.id}
                    style={styles.taskItemContainer}
                    onPress={() => deleteTodo(todo.id)}
                >
                    <Text style={styles.taskText}>
                        {todo.text}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
    },
    taskText: {
        fontSize: 18,
    },
    completedTaskText: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    taskItemContainer: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    taskListContainer: {
        alignSelf: 'stretch', // Allow the container to stretch
        paddingVertical: 10,
    }
});

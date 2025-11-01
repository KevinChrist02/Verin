import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Todo } from '../types';

interface TodoContextType {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (todo: Todo) => {
        setTodos((prevTodos) => [...prevTodos, todo]);
    };

    const deleteTodo = (id: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error('useTodos must be used within a TodoProvider');
    }
    return context;
};

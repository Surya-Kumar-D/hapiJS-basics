import {type Todo, CreateTodo, UpdateTodo} from "../../domain/types/todo.js";
import {v4 as uuidv4} from 'uuid';
import {getAllTodos, newTodo} from "../../domain/interface/todos.js";

export class TodoService {
    private todos: Todo[] = [];

    async getAllTodo(): Promise<Todo[]> {
        return getAllTodos();
    }

    async getTodoById(id: string): Promise<Todo | null> {
        return this.todos.find(todo => todo.id === id) || null;
    }

    async createTodo(todo: CreateTodo): Promise<Todo> {
        const newTodoPayload = {
            id: uuidv4(),
            title: todo.title,
            description: todo.description,
        };

        return newTodo(newTodoPayload);
    }

    // async updateTodo(id: string, todo: UpdateTodo): Promise<Todo> {
    //     const updatedTodo = this.todos.find(todo => todo.id === id);
    //     console.log(updatedTodo)
    //     if (!updatedTodo) {
    //         throw new Error('Todo not found');
    //     }
    //     updatedTodo.title = todo.title || updatedTodo.title;
    //     updatedTodo.description = todo.description || updatedTodo.description;
    //     updatedTodo.completed = todo.completed || updatedTodo.completed;
    //     updatedTodo.updatedAt = new Date().toISOString();
    //     console.log(updatedTodo)
    //     return updatedTodo;
    //
    // }

    async deleteTodo(id: string): Promise<boolean> {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this.todos.length !== initialLength;
    }

}
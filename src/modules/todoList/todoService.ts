import {type Todo, CreateTodo, UpdateTodo} from "../../domain/types/todo.js";
import {v4 as uuidv4} from 'uuid';
import {getAllTodos, newTodo, updateTodoById} from "../../domain/interface/todos.js";

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

     async updateTodo(id: string, todo: UpdateTodo): Promise<Todo> {
       return await updateTodoById(id, todo);
     }

    async deleteTodo(id: string): Promise<boolean> {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this.todos.length !== initialLength;
    }

}
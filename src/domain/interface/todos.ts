import {CreateTodo, Todo} from "../types/todo.js";
import todoModel from "../model/todoModel.js";

export const newTodo = async (todoPayload: CreateTodo): Promise<Todo> => {
    return todoModel.create(todoPayload);
}

export const getAllTodos = (): Promise<Todo[]> => {
    return todoModel.find();
}
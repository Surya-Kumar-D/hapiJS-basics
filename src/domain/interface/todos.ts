import {CreateTodo, Todo, UpdateTodo} from "../types/todo.js";
import todoModel from "../model/todoModel.js";

export const newTodo = async (todoPayload: CreateTodo): Promise<Todo> => {
    return todoModel.create(todoPayload);
}

export const getAllTodos = (): Promise<Todo[]> => {
    return todoModel.find();
}

export const updateTodoById = async (id: string, todoPayload: UpdateTodo): Promise<Todo> => {
    const updatedTodo = await todoModel.findByIdAndUpdate({id}, {$set: todoPayload}, {new: true});
    if(!updatedTodo) throw new Error("Todo not found.");
    return updatedTodo;
}
import {Schema, model} from 'mongoose'
import {Todo} from "../types/todo.js";


export const todoSchema = new Schema<Todo>({
    id: {type: String},
    title: {type: String, required: true},
    description: {type: String, required: true},
    completed: {type: Boolean, default: false}
}, {
    timestamps: true
})

export default model<Todo>('Todo', todoSchema)
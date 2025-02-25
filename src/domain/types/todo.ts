import Document from "mongoose"

export interface Todo extends Document {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateTodo {
    title: string;
    description: string;
}

export interface UpdateTodo {
    title?: string;
    description?: string;
    completed?: boolean;
}
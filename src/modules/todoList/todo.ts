export interface  Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
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
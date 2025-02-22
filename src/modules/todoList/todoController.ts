import {TodoService} from "./todoService.js";
import {RequestHelper} from "../../common/requestHelper.js";
import {ResponseObject, ResponseToolkit} from "@hapi/hapi";
import {Todo} from "./todo.js";

export default class TodoController {
    private todoService: TodoService;

    constructor() {
    this.todoService = new TodoService();
    }

    async getAllTodo(request: RequestHelper, h: ResponseToolkit): Promise<ResponseObject> {
        console.log("I am getting triggered")
        const todo = await this.todoService.getAllTodo();
        return h.response(todo).code(200);
    }

    async createTodo(request: RequestHelper, h: ResponseToolkit): Promise<ResponseObject> {
       console.log(request.getPayload())
        const todo = await this.todoService.createTodo(request.getPayload());
        return h.response(todo).code(201);
    }
}
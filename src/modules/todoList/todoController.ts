import {TodoService} from "./todoService.js";
import {RequestHelper} from "../../common/requestHelper.js";
import {ResponseObject, ResponseToolkit} from "@hapi/hapi";
import {Todo} from "../../domain/types/todo.js";

export default class TodoController {
    private todoService: TodoService;

    constructor() {
        this.todoService = new TodoService();
    }

    async getAllTodo(request: RequestHelper, h: ResponseToolkit): Promise<ResponseObject> {
        const todo = await this.todoService.getAllTodo();
        return h.response(todo).code(200).header(
            "X-Powered-By", "Hapi Js"
        );
    }

    async getTodoById(request: RequestHelper, h: ResponseToolkit): Promise<ResponseObject> {
        console.log(request.getParam('id'));
        console.log(request)
        const todo = await this.todoService.getTodoById(request.getParam('id'));
        if (!todo) {
            return h.response({message: `Todo with the id ${request.getParam("id")} is not found.`}).code(404);

        }
        return h.response(todo).code(200);
    }

    async createTodo(request: RequestHelper, h: ResponseToolkit): Promise<ResponseObject> {
        const todo = await this.todoService.createTodo(request.getPayload());
        return h.response(todo).code(201);

    }

    // async updateTodo(request: RequestHelper, h: ResponseToolkit): Promise<ResponseObject> {
    //     try {
    //         console.log(request.getPayload());
    //         console.log(request.getParam("id"))
    //         const todo = await this.todoService.updateTodo(request.getParam("id"), request.getPayload());
    //         console.log(todo)
    //         return h.response(todo).code(201);
    //     } catch (e) {
    //         console.log(e)
    //         return h.response({"error": "Facing some issues"}).code(404)
    //     }
    //
    // }

}
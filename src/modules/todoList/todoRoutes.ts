import {ReqRefDefaults, ResponseObject, ResponseToolkit, ServerRoute} from "@hapi/hapi";
import TodoController from "./todoController.js";
import {RequestHelper} from "../../common/requestHelper.js";
import constants from "../../common/constants.js";
import {Todo} from "./todo.js";

const todoRoutes: ServerRoute[] = [];
const todoController = new TodoController();

todoRoutes.push({
    path: `${constants.API_PATH}/todos`,
    method: 'GET',
    handler: (request, h: ResponseToolkit) =>
         todoController.getAllTodo(new RequestHelper(request), h),
    options: {
        description: 'Get all todos',
        tags: ['api', 'todos'],
    }

});

todoRoutes.push({
    path: `${constants.API_PATH}/todo/{id}`,
    method: "GET",
    handler: (request, h): Promise<ResponseObject> =>
        todoController.getTodoById(new RequestHelper(request), h),
    options: {

        description: "Get todo by id",
        tags: ['api', 'todos']
    }
})


todoRoutes.push({
    path: `${constants.API_PATH}/createTodo`,
    method: 'POST',
    handler: (request, h: ResponseToolkit)=>
        todoController.createTodo(new RequestHelper(request), h),
    options: {
        description: 'Create a new todo',
        tags: ['api', 'todos'],
        payload: {
            output: 'data',
            parse: true
        }
    }
})

todoRoutes.push({
    path: `${constants.API_PATH}/`,
    method: 'GET',
    handler: (request, h) => {
        return "Hello World!";
    }
})

export default todoRoutes;


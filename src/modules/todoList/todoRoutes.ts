import {ReqRefDefaults, ResponseObject, ResponseToolkit, ServerRoute} from "@hapi/hapi";
import TodoController from "./todoController.js";
import {RequestHelper} from "../../common/requestHelper.js";
import constants from "../../common/constants.js";
import Joi from 'joi';
import {CreateTodo, Todo, UpdateTodo} from "../../domain/types/todo.js";

const todoRoutes: ServerRoute[] = [];
const todoController = new TodoController();

const validateSchema = Joi.object<CreateTodo>({
    title: Joi.string().required().messages({
        'any.required': "title is required",
        'string.empty': "title cannot be empty",
        'string.base': "title is required."
    }),
    description: Joi.string().required()
})
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
    handler: (request, h: ResponseToolkit) =>
        todoController.createTodo(new RequestHelper(request), h),
    options: {
        description: 'Create a new todo',
        tags: ['api', 'todos'],
        payload: {
            output: 'data',
            parse: true
        },
        validate: {
            payload: validateSchema,
            options: {},
            failAction: (req, h, err) => {
                return h.response({message: err?.message}).code(400).takeover()
            }
        }
    }
})

// todoRoutes.push({
//     path: `${constants.API_PATH}/updateTodo/{id}`,
//     method: "PATCH",
//     handler: (request, h: ResponseToolkit) =>
//         todoController.updateTodo(new RequestHelper(request), h),
//     options: {
//         description: "Update Todo",
//         tags: ['api', 'todos'],
//         payload: {
//             output: 'data',
//             parse: true
//         }
//
//     }
// })

todoRoutes.push({
    path: `${constants.API_PATH}/`,
    method: 'GET',
    handler: (request, h) => {
        return "Hello World!";
    }
})

export default todoRoutes;


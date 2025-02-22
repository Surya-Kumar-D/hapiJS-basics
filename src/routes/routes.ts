import {ServerRoute} from "@hapi/hapi";
import todoRoutes from "../modules/todoList/todoRoutes.js";

const routes: ServerRoute[] = [
    ...todoRoutes
]

export default routes;
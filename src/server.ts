import Hapi from '@hapi/hapi';
import todoRoutes from "./modules/todoList/todoRoutes.js";
import routes from "./routes/routes.js";

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

server.route(routes)

    await server.start();
    console.log("Server running on port 3000");
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
const result = await init();
console.log(result);
import Hapi from '@hapi/hapi';
import todoRoutes from "./modules/todoList/todoRoutes.js";
import routes from "./routes/routes.js";
import dotenv from 'dotenv';
import constants from "./common/constants.js";
import * as mongoose from "mongoose";

dotenv.config();

const dbPassword = process.env.DBPASSWORD!;
let mongoURI = process.env.MONGODB!;

// console.log(dbPassword, mongoURI)
if (dbPassword && mongoURI) {
    mongoURI = mongoURI.replace('<db_password>', dbPassword);
    mongoose.connect(mongoURI).then(() => console.log("Connected to MongoDB")).catch((err) => {
        console.error("Error connecting to mongodb", err);
        process.exit(1)
    });
} else {
    console.error("Missing Mongo url or db password");
    process.exit(1)
}

const init = async () => {
    const server = Hapi.server({
        port: constants.PORT,
        host: 'localhost'
    });

    server.route(routes)

    await server.start();
    console.log(`Server running on port ${constants.PORT}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
const result = await init();

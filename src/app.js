const express = require('express');

const hostname = "localhost";
const port = 3004;
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const swaggerUi = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "API_Indy REST",
            description: "Swagger for API_Indy",
            contact: {
                name: "API_Indy",
            },
            servers: ["http://localhost:3004/"],
        },
    },
    apis: ["app.js", "./swagger.js"],
};
const swaggerDocs = swaggerjsdoc(swaggerOptions);
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const userRoute = require('./api/Routes/usersRoute')
userRoute(server);
const restaurantTableRoute = require('./api/Routes/restaurantTableRoute')
restaurantTableRoute(server);
const tipsRoute = require('./api/Routes/tipsRoute')
tipsRoute(server);
const serviceRoute = require('./api/Routes/serviceRoute')
serviceRoute(server);
const adminRoute = require('./api/Routes/adminRoute')
adminRoute(server);

server.listen(port, hostname, () => {
    console.log(`Serveur qui retourne le port ${port}`)
})
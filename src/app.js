const express = require('express');

const hostname = "localhost";
const port = 3004;
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
//
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
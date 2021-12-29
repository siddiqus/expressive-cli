const { Route } = require("@siddiqus/expressive");
const CreateUserController = require("./controllers/create-user");
const GetUserController = require("./controllers/get-user");
const GetUsersController = require("./controllers/get-users");

// /users
module.exports = {
  routes: [
    Route.get('/', new GetUsersController()),
    Route.get('/:userId', new GetUserController()),
    Route.post('/', new CreateUserController())
  ]
}
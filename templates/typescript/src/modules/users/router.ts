import { ExpressiveRouter, Route } from "@siddiqus/expressive";
import { CreateUserController } from "./controllers/create-user";
import { GetUserController, GetUsersController } from "./controllers/get-user";

// /users
export const userRouter: ExpressiveRouter = {
  routes: [
    Route.get('/', new GetUsersController()),
    Route.get('/:userId', new GetUserController()),
    Route.post('/', new CreateUserController())
  ]
}
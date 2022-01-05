// import Joi from "@hapi/joi";
import {
  BaseController,
  Handler,
  Joi,
  ValidationSchema,
} from '@siddiqus/expressive';
import { someMiddleware } from '../middlewares/user-middleware';
import { UserService } from '../services/service';

export class CreateUserController extends BaseController {
  private userService: UserService;

  constructor(userService: UserService = new UserService()) {
    super();
    this.userService = userService;
  }

  middleware?: Handler[] | undefined = [someMiddleware];

  validationSchema?: ValidationSchema = {
    body: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    },
  };

  async handleRequest() {
    const { firstName, lastName } = this.getData().body;

    const user = this.userService.createUser(firstName, lastName);
    this.ok(user);
  }
}

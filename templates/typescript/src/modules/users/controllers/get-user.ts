import { BaseController, ValidationSchema, Joi } from '@siddiqus/expressive';
import { UserService } from '../services/service';

export class GetUserController extends BaseController {
  validationSchema?: ValidationSchema = {
    params: {
      userId: Joi.number().positive().required(),
    },
  };


  private userService: UserService;
  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  async handleRequest() {
    const { userId } = this.getData().params;
    const user = this.userService.getUserById(userId);
    this.ok(user);
  }
}

export class GetUsersController extends BaseController {
  async handleRequest() {
    this.ok([
      {
        id: 1,
        name: 'Sabbir',
      },
      {
        id: 2,
        name: 'John',
      },
    ]);
  }
}

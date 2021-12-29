// const Joi = require("@hapi/joi");
const { BaseController, Joi } = require("@siddiqus/expressive");
const someMiddleware = require("../middlewares/user-middleware");

module.exports = class CreateUserController extends BaseController {
  middleware = [someMiddleware]

  validationSchema = {
    body: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required()
    }
  }

  async handleRequest() {
    const { firstName, lastName } = this.getData().body;

    this.ok({
      hello: `Hello ${firstName} ${lastName}!`
    });
  }
}
const { BaseController, Joi } = require("@siddiqus/expressive");

module.exports = class GetUserController extends BaseController {
  validationSchema = {
    params: {
      userId: Joi.number().positive().required()
    }
  }

  async handleRequest() {
    const { userId } = this.getData().params;

    this.ok({
      id: userId,
      name: 'Sabbir'
    })
  }
}
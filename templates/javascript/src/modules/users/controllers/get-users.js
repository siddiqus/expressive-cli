const { BaseController } = require("@siddiqus/expressive")

module.exports = class GetUsersController extends BaseController {
  async handleRequest() {
    this.ok([
      {
        id: 1,
        name: 'Sabbir'
      },
      {
        id: 2,
        name: 'John'
      }
    ])
  }
}
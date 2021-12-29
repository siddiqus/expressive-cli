const { BaseController } = require("@siddiqus/expressive");

module.exports = class HealthController extends BaseController {
  async handleRequest() {
    this.ok({
      healthy: true
    })
  }
}

import { BaseController } from "@siddiqus/expressive";

export class HealthController extends BaseController {
  async handleRequest() {
    this.ok({
      healthy: true
    })
  }
}
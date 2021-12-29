import { ExpressiveRouter, Route, subroute } from "@siddiqus/expressive";
import { HealthController } from "./controllers/health";
import { userRouter } from "./modules/users/router";

export const router: ExpressiveRouter = {
  routes: [
    Route.get('/v0/health', new HealthController()),
  ],
  subroutes: [
    subroute('/v1/users', userRouter)
  ]
}
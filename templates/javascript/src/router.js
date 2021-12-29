const { Route, subroute } = require("@siddiqus/expressive");
const HealthController = require("./controllers/health");
const userRouter = require("./modules/users/router");

module.exports = {
  routes: [
    Route.get('/v0/health', new HealthController()),
  ],
  subroutes: [
    subroute('/v1/users', userRouter)
  ]
}
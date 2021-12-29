import { ExpressApp } from "@siddiqus/expressive";
import { errorHandler } from "./middlewares/error";
import { router } from "./router";

const swaggerInfo = {
  version: '2.0.0',
  title: 'Example Expressive App',
  contact: {
    name: 'Sabbir Siddiqui',
    email: 'sabbir.m.siddiqui@gmail.com'
  }
};

export default new ExpressApp(router, {
  basePath: '/',
  allowCors: true,
  swaggerInfo,
  errorHandler,
  authorizer: (req, res) => {
    console.log(`${req.url}: auth from top`);
    res.setHeader('testingAuth', 1234);
  }
}).express;
const { ExpressApp } = require("@siddiqus/expressive");
const errorHandler = require("./middlewares/error");
const router = require("./router");

const swaggerInfo = {
  version: '2.0.0',
  title: 'Example Expressive App',
  contact: {
    name: 'Sabbir Siddiqui',
    email: 'sabbir.m.siddiqui@gmail.com'
  }
};

module.exports = new ExpressApp(router, {
  basePath: '/',
  allowCors: true,
  swaggerInfo,
  errorHandler,
  authorizer: (req, res) => {
    console.log(`${req.url}: auth from top`);
    res.setHeader('testingAuth', 1234);
  }
}).express;
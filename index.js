require('dotenv').config()
const server = require("./api/server.js");

//we need this bc Heroku will tell our app what port to listen on
//install dotenv
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

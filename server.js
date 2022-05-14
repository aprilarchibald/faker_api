const express = require("express");
const app = express();
const port = 8000;

//MiddleWare
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./routes/users.routes")(app);
// const routes = require("./routes/users.routes");
// routes(app);



app.listen( port, () => console.log(`Listening on port: ${port}`) );
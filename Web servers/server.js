const express = require("express");

const Restaurant = require('./models/Restaurant');

// connects and creates database
const sequelizeConnect = require("./sequelize-connect");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.get("/now", (request, response) => {
  const date = new Date();
  response.send(date);
});

app.get("/flipcoin", (request, response) => {
  if (port == 3000) {
    response.send("heads");
  } else {
    response.send("tails");
  }
});
//READ
app.get("/restaurants", (request, response) => {
  response.send("All restos");
});
//CREATE
app.post("/restaurants", (request, response) => {
  response.send("Create resto");
});
//UPDATE
app.put("/restaurants", (request, response) => {
  response.send("Put resto");
});
//DELETE
app.delete("/restaurants", (request, response) => {
  response.send("Delete resto");
});

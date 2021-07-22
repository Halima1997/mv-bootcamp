// Convenience - assign express method to app variables
const express = require("express");
const Restaurant = require("./models/Restaurant");
const Menu = require("./models/Menu");
const MenuItem = require("./Models/MenuItem");

const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

// setup our templating engine
const handlebars = expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
});

const app = express();
app.engine("handlebars", handlebars);
app.set("view engine", "handlebars");

// connects and creates database
const sequelizeConnect = require("./sequelize-connect");

const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);
Menu.hasMany(MenuItem);
MenuItem.belongsTo(Menu);
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
app.get("/restaurants", async (request, response) => {
  const restaurants = await Restaurant.findAll();
  //response.send(restaurants);
  response.render("restaurants", {
    restaurants,
  });
});

app.get("/restaurants/:id", async (request, response) => {
  const restaurantid = request.params.id;
  const restaurant = await Restaurant.findByPk(restaurantid, {
    include: [Menu],
  });
  console.log(restaurant);
  if (restaurant === null) {
    response.sendStatus(404);
  } else {
    // response.send(restaurant);
    response.render("restaurant", { restaurant });
  }
});

//HANDLEBAR GET
// app.get('/web/restaurants', async (req,res) => {
//   const restaurants = await Restaurant.findAll()
//   res.render('restaurant', {restaurants })
// })
// app.get('web/restaurants/:id', async (req,res) => {
//   const restaurant = await Restaurant.findByPk(req.params.id)
//   res.render('restaurant', {restaurant })
// })

//CREATE
app.post("/restaurants", async (request, response) => {
  console.log(request.body); // Similiar to sending a letter, and needing to include an envelope, letter etc.
  await Restaurant.create({
    name: request.body.name,
    image: request.body.image,
  });
  response.sendStatus(201);
  response.send("Restaurant created");
});
//UPDATE
app.put("/restaurants/:id", async (request, response) => {
  console.log(request.params.id);
  console.log(request.body);
  await Restaurant.update(
    {
      name: request.body.name,
      image: request.body.image,
    },
    {
      where: {
        id: request.params.id,
      },
    }
  );
  response.send("Put resto");
});
//DELETE
app.delete("/restaurants/:id", async (request, response) => {
  await Restaurant.destroy({
    where: {
      id: request.params.id,
    },
  });
  response.send("Delete resto");
});
//READ
app.get("/menus", async (request, response) => {
  const menu = await Menu.findAll();
  response.send(menu);
});
app.get("/menus/:id", async (request, response) => {
  const menuid = request.params.id;
  const menu = await Menu.findByPk(menuid, {
    include: [Restaurant],
  });
  console.log(Menu);
  if (menu === null) {
    response.sendStatus(404);
  } else {
    response.send(menu);
  }
});
//CREATE
app.post("/menus", async (request, response) => {
  console.log(request.body); // Similiar to sending a letter, and needing to include an envelope, letter etc.
  await Menu.create({
    RestaurantId: request.body.restaurantid,
    name: request.body.name,
    image: request.body.image,
  });
  response.sendStatus(201);
  response.send("Menu created");
});
//UPDATE
app.put("/menus/:id", async (request, response) => {
  console.log(request.params.id);
  console.log(request.body);
  await Menu.update(
    {
      name: request.body.name,
      image: request.body.image,
    },
    {
      where: {
        id: request.params.id,
      },
    }
  );
  response.send("Put Menu");
});
//DELETE
app.delete("/menus/:id", async (request, response) => {
  await Menu.destroy({
    where: {
      id: request.params.id,
    },
  });
  response.send("Delete menu");
});
//READ
app.get("/menuitems", async (request, response) => {
  const menuitems = await MenuItem.findAll();
  response.send(menuitemsid, {
    include: [Menu],
  });
});
app.get("/menuitems/:id", async (request, response) => {
  const menuitemsid = request.params.id;
  const menuitems = await MenuItem.findByPk(menuitemsid);
  console.log(Menu);
  if (menuitems === null) {
    response.sendStatus(404);
  } else {
    response.send(menuitems);
  }
});
//CREATE
app.post("/menuitems", async (request, response) => {
  console.log(request.body); // Similiar to sending a letter, and needing to include an envelope, letter etc.
  await MenuItem.create({
    MenuId: request.body.menuid,
    name: request.body.name,
    price: request.body.price,
  });
  response.sendStatus(201);
  response.send("Menu item created");
});
//UPDATE
app.put("/menuitems/:id", async (request, response) => {
  console.log(request.params.id);
  console.log(request.body);
  await MenuItem.update(
    {
      name: request.body.name,
      price: request.body.price,
    },
    {
      where: {
        id: request.params.id,
      },
    }
  );
  response.send("Put Menu Item");
});
//DELETE
app.delete("/menuitems/:id", async (request, response) => {
  await MenuItem.destroy({
    where: {
      id: request.params.id,
    },
  });
  response.send("Delete menu item");
});

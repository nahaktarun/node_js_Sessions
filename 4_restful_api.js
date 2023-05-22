// restful api's -> it provides you the resources which need to consumed in frontend

// verbs of restful api's
// 1. Get -> read
// 2. put -> update
// 3. delete -> delete
// 4. post-> create
// CRUD -> create, read, update , delete

// parameters:
// 1. query parameter : ?
// 2. dynamic parameter: :id

// express -> backend framework for javascript

const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());
// middleware

// Blog API
// 1. create a blog -> /blogs/
// 2. get all blogs -> /blogs/
// 3. get a single blog -> /blogs/:id -> /blogs/1 , /blogs/2
// 4. delete a single blog -> /blogs/:id

const PORT = 3000;

// dummy data
const data = [];

app.get("/blogs", (req, res) => {
  console.log(data);
  res.json({ blogs: data });
});

// get a single blog
app.get("/blogs/:id", (req, res) => {
  console.log(req.params.id);
  const result = data.filter((blog) => blog.id === req.params.id);
  res.json({ data: result });
  res.json(data);
});

app.post("/blogs", (req, res) => {
  data.push({ id: req.body.id, pos_description: req.body.post_descript });
  res.send({ data: data, posted: "success" });
});

app.listen(PORT, console.log("server listening ", PORT));

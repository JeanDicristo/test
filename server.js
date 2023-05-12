const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get(["/", "/:name"], (req, res) => {
  greeting = "<h1>Fly.io jean</h1>";
  name = req.params["name"];
  if (name) {
    res.send(greeting + "</br>and hello to " + name);
  } else {
    res.send(greeting);
  }
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`))


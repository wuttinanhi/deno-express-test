// @deno-types="npm:@types/express"
import express from "npm:express@4.18.2";
import data from "./data.json" assert { type: "json" };

const app = express();

app.get("/", (_req, res) => {
  res.send({
    "app": "dinosaurs",
    "version": "1.0.0",
    "message": "Welcome to the Dinosaur API!",
  });
});

app.get("/get", (_req, res) => {
  res.send(data);
});

app.get("/get/:dinosaur", (req, res) => {
  if (req?.params?.dinosaur) {
    const found = data.find((item) =>
      item.name.toLowerCase() === req.params.dinosaur.toLowerCase()
    );
    if (found) return res.send(found);
    return res.send("No dinosaurs found.");
  }
});

app.listen(8000, () => {
  console.log("The application is listening on port 8000!");
});

require("dotenv").config();

const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());

const productRouter = require("./product.router");
app.use("/products", productRouter);
const fruitRouter = require("./fruit.router");
app.use("/fruits", fruitRouter);


app.listen(PORT, () => {
  console.log("server listen to " + PORT);
});

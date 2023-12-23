require("dotenv").config();

const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());

// const productRouter = require("./product.router");
// app.use("/products", productRouter);


const itemRouter = require("./item.router");
app.use("/", itemRouter);

const authRouter = require("./auth.router");
app.use("/", authRouter);

const userRouter = require("./user.router");
app.use("/user", userRouter);



app.listen(PORT, () => {
  console.log("server listen to " + PORT);
});

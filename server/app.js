const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan('combined'));
const productRouter = require("./routes/product.route");
app.use("/", productRouter);
const reviewRouter = require("./routes/review.router");
app.use("/", reviewRouter);
const userRouter = require("./routes/user.router");
app.use("/", userRouter);
const connectToDB = require("./config/db.config");
connectToDB().then(() => {
  app.listen(4000, () => console.log("Servidor rodando na porta", 4000));
});
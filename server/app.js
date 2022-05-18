const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan('combined'));
const productRouter = require("./routes/product.route");
app.use("/", productRouter);
const connectToDB = require("./config/db.config");
connectToDB().then(() => {
  app.listen(4000, () => console.log("Servidor rodando na porta", 4000));
});
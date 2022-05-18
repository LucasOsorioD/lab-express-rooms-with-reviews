const router = require("express").Router();
const ProductModel = require("../models/Product.model");

router.get('/hello', (req, res) => {
  res.status(200).json({ msg: "Hello World!" });
});
router.post("/product", async (req, res) => {
  try {
    const data = req.body;
    const result = await ProductModel.create(data);
    return res.status(201).json(result)
  } catch (err) {
    console.error(err);
    return res.status(500).json({msg: "Falha ao cadastrar produto"});
  }
});

module.exports = router;

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
    return res.status(500).json({msg: "Falha ao cadastrar o quarto"});
  }
});

router.patch("/product/:_id", async (req, res) => {
  try{
    const {_id} = req.params;
    const data = req.body;
    const result = await ProductModel.findOneAndUpdate(
      {_id},
      {$set: data},
      {new: true, runValidators: true}
    );
    if (!result) {
      return res.status(404).json({msg: "Quarto não encontrado"});
    }
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json ({msg: "Falha ao editar o quarto"});
  }
});

router.delete("/product/:_id", async (req, res) => {
  try {
    const {_id} = req.params;
    const result = await ProductModel.deleteOne({_id});
    if (result.deletedCount < 1) {
      return res.status(404).json({msg: "Quarto nao encontrado"})
    }
    return res.status(200).json({});
  } catch (err) {
    console.error(err);
    return res.status(500).json({msg: "Falha ao tentar editar o quarto"})
  }
});

router.get('/product', async (req, res) => {
  try {
    let {page, limit} = req.query;
    page = Number (page);
    limit = Number (limit);
    const products = await ProductModel.find().skip(page * limit).limit(limit);
    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Falha ao buscar o quarto" })
  }
});

module.exports = router;

const productService = require('../service/productService');

async function create(req, res, next) {
  try {
    const data = req.body;
    const result = await productService.create(data);
  
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

async function findAll(_req, res, next) {
  try {
    const result = await productService.findAll();

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function findById(req, res, next) {
  try {
    const { id } = req.params;
    const result = await productService.findById(id);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await productService.update(id, data);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    return res.status(200).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  findAll,
  findById,
  update,
  deleteProduct,
};

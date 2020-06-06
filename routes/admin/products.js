// Require statements getting something from an external library
const express = require('express');
const multer = require('multer');

// Require statements getting access to files I authored
const { handleErrors } = require('./middlewares');
const productsRepo = require('../../repositories/products');
const newProductTemplate = require('../../views/admin/products/new');
const { requireTitle, requirePrice } = require('./validators');

// Declare variables
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/admin/products', (req, res) => {});

router.get('/admin/products/new', (req, res) => {
  res.send(newProductTemplate({}));
});

router.post(
  '/admin/products/new',
  upload.single('image'),
  [requireTitle, requirePrice],
  handleErrors(newProductTemplate),
  async (req, res) => {
    const image = req.file.buffer.toString('base64');
    const { title, price } = req.body;
    await productsRepo.create({ title, price, image });

    res.send('submitted');
  }
);

module.exports = router;

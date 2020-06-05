// Require statements getting something from an external library
const express = require('express');
const { validationResult } = require('express-validator');
const multer = require('multer');

// Require statements getting access to files I authored
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
  [requireTitle, requirePrice],
  upload.single('image'),
  (req, res) => {
    const errors = validationResult(req);

    console.log(req.file);

    res.send('submitted');
  }
);

module.exports = router;

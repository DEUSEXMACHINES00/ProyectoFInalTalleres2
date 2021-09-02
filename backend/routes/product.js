'use strict'
var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/product');
const jwt = require('jsonwebtoken');


const multer  = require('multer')
const storage = multer.diskStorage({
    destination : './uploads',
    filename : (req,file,cb)=>{
        cb(null, file.originalname);
    }
});


const upload = multer({ 
    storage: storage,
    dest: './uploads' })



var multipart= require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});


router.get('/product/:id',ProductController.getProduct);
router.get('/products/',ProductController.getProducts);
router.post('/save-product',ProductController.saveProduct);
router.put('/product/:id',ProductController.updateProduct);
router.delete('/product/:id',ProductController.deleteProduct);
router.post('/upload-image/:id',upload.single('image'),ProductController.uploadImagen);
router.get('/get-image/:image',ProductController.getImageFile);

module.exports = router;



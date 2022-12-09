const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');


router.post('/:id', itemsCtrl.create)
router.get('/:id', itemsCtrl.getCart); 
router.delete('/:id', itemsCtrl.deleteProduct)

module.exports = router;

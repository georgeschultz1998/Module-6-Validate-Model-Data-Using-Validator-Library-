const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// GET all customers
router.get('/', customerController.getAllCustomers);

// GET a single customer by ID
router.get('/:id', customerController.getCustomerById);

// CREATE a new customer
router.post('/', customerController.createCustomer);

// UPDATE a customer by ID
router.put('/:id', customerController.updateCustomerById);

// DELETE a customer by ID
router.delete('/:id', customerController.deleteCustomerById);

module.exports = router;

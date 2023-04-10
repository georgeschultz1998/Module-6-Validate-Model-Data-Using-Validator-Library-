const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// GET all accounts
router.get('/', accountController.getAllAccounts);

// GET a single account by ID
router.get('/:id', accountController.getAccountById);

// CREATE a new account
router.post('/', accountController.createAccount);

// UPDATE an account by ID
router.put('/:id', accountController.updateAccountById);

// DELETE an account by ID
router.delete('/:id', accountController.deleteAccountById);

module.exports = router;

const Account = require('../models/accountSchema');

exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();

    res.status(200).json({
      status: 'success',
      accountCount: accounts.length,
      data: {
        accounts
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `Error fetching accounts: ${error}`
    });
  }
};

exports.getAccountById = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        account
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `Error fetching account: ${error}`
    });
  }
};

exports.createAccount = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        account: newAccount
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: `Error creating account: ${error}`
    });
  }
};

exports.updateAccountById = async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        account
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `Error updating account: ${error}`
    });
  }
};

exports.deleteAccountById = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `Error deleting account: ${error}`
    });
  }
};

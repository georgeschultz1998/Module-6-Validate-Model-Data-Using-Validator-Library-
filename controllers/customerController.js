const Customer = require('../models/customerSchema');

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();

    res.status(200).json({
      status: 'success',
      customerCount: customers.length,
      data: {
        customers
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `Error fetching customers: ${error}`
    });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        customer
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `Error fetching customer: ${error}`
    });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        customer: newCustomer
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: `Error creating customer: ${error}`
    });
  }
};

exports.updateCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        customer
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `Error updating customer: ${error}`
    });
  }
};

exports.deleteCustomerById = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `Error deleting customer: ${error}`
    });
  }
};

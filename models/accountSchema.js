const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: [true, 'An account number is required.'],
    unique: true,
    trim: true,
    minlength: [4, 'An account number must have at least 4 characters.'],
    maxlength: [20, 'An account number cannot have more than 20 characters.']
  },
  accountType: {
    type: String,
    required: [true, 'An account type is required.'],
    enum: ['Checking', 'Savings', 'Money Market', 'Certificate of Deposit']
  },
  balance: {
    type: Number,
    required: [true, 'An account balance is required.'],
    min: [0, 'An account balance cannot be negative.']
  },
  interestRate: {
    type: Number,
    required: [true, 'An interest rate is required.'],
    min: [0, 'An interest rate cannot be negative.'],
    max: [1, 'An interest rate must be a decimal between 0 and 1.']
  },
  overdraftProtection: {
    type: Boolean,
    default: false
  },
  owner: {
    firstName: {
      type: String,
      required: [true, 'A first name is required.'],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, 'A last name is required.'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'An email address is required.'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address.']
    },
    phone: {
      type: String,
      required: [true, 'A phone number is required'],
      validate: {
        validator: function(v) {
          return /^(\d{3})-(\d{3})-(\d{4})$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number! Please enter phone number in the format XXX-XXX-XXXX`
      }
    },
    address: {
      street: {
        type: String,
        required: [true, 'A street address is required.'],
        trim: true
      },
      city: {
        type: String,
        required: [true, 'A city is required.'],
        trim: true
      },
      state: {
        type: String,
        required: [true, 'A state is required.'],
        trim: true,
        uppercase: true,
        minlength: [2, 'A state abbreviation must have exactly 2 characters.'],
        maxlength: [2, 'A state abbreviation must have exactly 2 characters.']
      },
      zip: {
        type: String,
        required: [true, 'A ZIP code is required.'],
        trim: true,
        validate: {
          validator: function(v) {
            return /^\d{5}(?:[-\s]\d{4})?$/.test(v);
          },
          message: props => `${props.value} is not a valid ZIP code.`
        }
      }
    }
  }
});

module.exports = mongoose.model('Account', accountSchema);

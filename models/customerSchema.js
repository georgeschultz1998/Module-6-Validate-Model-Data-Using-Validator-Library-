const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'A first name is required'],
    trim: true,
    maxlength: [20, 'First name must be less than or equal to 20 characters'],
    minlength: [2, 'First name must be greater than or equal to 2 characters']
  },
  lastName: {
    type: String,
    required: [true, 'A last name is required'],
    trim: true,
    maxlength: [20, 'Last name must be less than or equal to 20 characters'],
    minlength: [2, 'Last name must be greater than or equal to 2 characters']
  },
  email: {
    type: String,
    required: [true, 'An email address is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: props => `${props.value} is not a valid email address`
    }
  },
  phone: {
    type: String,
    trim: true,
    required: [true, 'A phone number is required'],
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number`
    }
  },
  address: {
    street: {
      type: String,
      required: [true, 'A street address is required'],
      trim: true,
      maxlength: [50, 'Street address must be less than or equal to 50 characters']
    },
    city: {
      type: String,
      required: [true, 'A city is required'],
      trim: true,
      maxlength: [20, 'City name must be less than or equal to 20 characters']
    },
    state: {
      type: String,
      required: [true, 'A state is required'],
      trim: true,
      maxlength: [2, 'State abbreviation must be less than or equal to 2 characters'],
      minlength: [2, 'State abbreviation must be greater than or equal to 2 characters']
    },
    zip: {
      type: String,
      required: [true, 'A ZIP code is required'],
      trim: true,
      validate: {
        validator: function (v) {
          return /^\d{5}$/.test(v);
        },
        message: props => `${props.value} is not a valid ZIP code`
      }
    }
  }
});

module.exports = mongoose.model('Customer', customerSchema);

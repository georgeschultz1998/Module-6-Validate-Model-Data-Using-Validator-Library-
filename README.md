# Bank Account API

This is an API for managing bank accounts, built using Node.js, Express, and MongoDB.

## Getting Started

Clone this repository to your local machine.
Install dependencies by running `npm install`.
Start the server by running `npm start`.
The API will be accessible at http://localhost:8000.

## API Endpoints

### Accounts

- GET /accounts - Retrieves a list of all accounts.
- GET /accounts/:id - Retrieves a single account by ID.
- POST /accounts - Creates a new account.
- PUT /accounts/:id - Updates an existing account by ID.
- DELETE /accounts/:id - Deletes an account by ID.

### Customers

- GET /customers - Retrieves a list of all customers.
- GET /customers/:id - Retrieves a single customer by ID.
- POST /customers - Creates a new customer.
- PUT /customers/:id - Updates an existing customer by ID.
- DELETE /customers/:id - Deletes a customer by ID.

## Validation Rules

The following validation rules are enforced for bank account data:

- Account number must be unique.
- Account type must be one of: Checking, Savings, or Money Market.
- Account balance must be a positive number.
- Account owner must be a valid customer ID.
- Customer name must be provided and must be between 2 and 50 characters.
- Customer email must be a valid email address.
- Customer phone number must be a valid US phone number.
- Customer address must include a street address, city, state, and ZIP code.

## Error Handling

The API will return appropriate error responses for the following scenarios:

- Resource not found (404)
- Invalid request data (400)
- Unauthorized access (401)
- Forbidden access (403)
- Server error (500)

## Contributing

To contribute to this project, fork the repository and submit a pull request with your changes.

## Data Model

The bank account data model includes the following fields:

- accountNumber (String, required)
- accountType (String, enum: "Checking", "Savings", required)
- balance (Number, min: 0, required)
- owner (Object, required)
  - firstName (String, required)
  - lastName (String, required)
  - email (String, email validation, required)
  - address (Object, required)
    - street (String, required)
    - city (String, required)
    - state (String, required)
    - zip (String, required)

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Validator.js


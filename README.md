# Basic User Management System API

A basic CRUD APIs using NodeJS, Express, and MySQL.

## Technologies

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)

## Getting Started

```sh
git clone https://github.com/lemuellloren/basic-user-management-system-API.git
```

then:

```sh
cd basic-user-management-system-API
```

## MySQL Configuration

Please create a database and make the changes in the config/db.config.js file.

```javascript
CREATE DATABASE crud_db;

CREATE  TABLE IF NOT EXISTS `users` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `postcode` VARCHAR(10) NOT NULL,
  `contact_number` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `user_name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
 ,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `crud_db`.`users` (`first_name`, `last_name`, `address`, `postcode`, `contact_number`, `email`, `user_name`, `password`,) VALUES ('John', 'Doe', 'Davao City', '8000', '0919123456', 'johndoe@mail.com', 'jonhdoe2022', '123456');
INSERT INTO `crud_db`.`users` (`first_name`, `last_name`, `address`, `postcode`, `contact_number`, `email`, `user_name`, `password`,) VALUES ('Peter', 'Parker', 'Cebu City', '6000', '09291245456', 'peter_parker@mail.com', 'spiderman', '123456');
```

## Installation

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

or run:

```bash
  nodemon start
```

Open the link below to view it in you favorate browser.

```bash
  http://localhost:5000
```

## API Endpoints

You can test the API in Postman

- GET /api/v1/users: show all users stored in database
- GET /api/v1/users/<users_id>: show a specific user with users_id.
- POST /api/v1/users : create a new user
- PATCH /api/v1/users/<users_id>: update a specific user
- DELETE /api/v1/users/<users_id>: delete a user
- PUT /api/v1/users/<users_id>: update a user completely

## Authors

- [@lemuelllorenn](https://github.com/lemuellloren/)

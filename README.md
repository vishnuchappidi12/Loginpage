# Login Authentication API

A RESTful API built with Node.js and Express.js that provides user authentication functionality with JWT (JSON Web Token) support.

## Features

- User registration with password hashing
- User login with JWT authentication
- Protected route to fetch all users
- MongoDB database integration
- Password encryption using bcrypt

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt

## Prerequisites

- Node.js
- MongoDB running on localhost:27017

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Make sure MongoDB is running on localhost:27017

## Running the Application

Start the server using:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Register User
- **POST** `/reg`
- **Body:**
```json
{
    "_id": "user@example.com",
    "name": "User Name",
    "pwd": "password"
}
```

### Login
- **POST** `/login`
- **Body:**
```json
{
    "_id": "user@example.com",
    "pwd": "password"
}
```

### Get All Users (Protected Route)
- **GET** `/:token`
- Requires JWT token as URL parameter

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes
- Input validation

## Dependencies

- express: ^5.1.0
- mongoose: ^8.13.2
- bcrypt: ^5.1.1
- jsonwebtoken: ^9.0.2
- nodemon: ^3.1.9 (development dependency)
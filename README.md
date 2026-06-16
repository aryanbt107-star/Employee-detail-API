# Employee Details API

## Overview

Employee Details API is a RESTful API built using Node.js, Express.js, and MySQL. It provides employee information from the HRMS database, including personal details, contact information, department, branch, and employment-related data.

## Technologies Used

* Node.js
* Express.js
* MySQL
* XAMPP
* phpMyAdmin
* VS Code

## Project Structure

employee-details-api

├── routes

│ └── employee.js

├── db.js

├── server.js

├── package.json

└── README.md

## API Endpoint

### Get Employee Details

```http
GET /employee/:employeeId
```

### Example Request

```http
GET /employee/1
```

### Sample Response

```json
{
  "employeeId": 1,
  "employeeCode": 1,
  "employeeName": "Test Emp",
  "contactNumber": "9999999999",
  "email": "test",
  "joiningDate": "2011-11-10T18:30:00.000Z",
  "departmentId": 1,
  "branchId": 1,
  "address": "",
  "dateOfBirth": null,
  "maritalStatus": "Single",
  "fatherName": "",
  "bloodGroup": null
}
```

## Features

* Retrieve employee information by Employee ID
* View employee contact details
* View department and branch information
* View employment details such as joining date
* View personal details including marital status and blood group
* JSON-based API responses

## Installation

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Server URL:

```http
http://localhost:3000
```

## Author

Aryan Thakur

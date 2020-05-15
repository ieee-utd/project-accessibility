# Project Accessibility Server
Server for the CFTB Help desktop application

## Installation and Usage

### Installation
1. Download this branch from the github [server branch](https://github.com/ieee-utd/project-accessibility/tree/server)
2. From a new terminal, cd into the directory
3. Install NodeJS
4. Email [Saloni](mailto:saloni.shivdasani@utdallas.edu) to get the config files.
5. Insert config file to backend/config as config.env and config.js
6. Install the node modules
```bash
cd backend
npm install
```

### Usage in Production Mode
To run the application, run the following command from the terminal

```bash
nodemon index.js
```

### Usage in Development Mode
[Version 1.1](https://github.com/ieee-utd/project-accessibility/blob/48a66e34648936cded8b5fee35eeaccdd07d4be3/README.md) of server has been hosted at [this](https://project-accessibility.wl.r.appspot.com) GCP App Engine Instance

## Models

Coming Soon

## Routes

### Solutions
GET /api/v1/solutions - Get all solutions
POST /api/v1/solutions - Add a solution
GET /api/v1/solutions/:id - Get a solution by id
PATCH /api/v1/solutions/:id - Update a solution
DELETE /api/v1/solutions/:id - Delete a solution

### Tickets
GET /api/v1/tickets - Get all tickets
POST /api/v1/tickets - Add a ticket
GET /api/v1/tickets/:id - Get a ticket by id
PATCH /api/v1/tickets/:id - Update a ticket
DELETE /api/v1/tickets/:id - Delete a ticket

## Iteration Log
Version 1.2

### Added Functionality from Last Iteration
* Coverted GET and POST from MongoDB to MySQL

### Planned Functionality for Next Iteration
* Convert GET by ID, PATCH and DELETE from MongoDB to MySQL

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

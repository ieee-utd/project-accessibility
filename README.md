# Project Accessibility Server
Server for the CFTB Help desktop application

## Installation and Usage

### Installation

1. Download this branch from the github [server branch](https://github.com/ieee-utd/project-accessibility/tree/server)
2. From a new terminal, cd into the directory
3. Install NodeJS
4. Email [Saloni](mailto:saloni.shivdasani@utdallas.edu) to get the config file.
5. Insert config file to backend/config as config.env
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

This server has been hosted at [this](https://project-accessibility.wl.r.appspot.com) GCP App Engine Instance

### Routes

Coming Soon

## Iteration Log
Version 1.1

### Added Functionality from Last Iteration
This is the initial back end

### Planned Functionality for Next Iteration
* Convert tickets from MongoDB to MySQL

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

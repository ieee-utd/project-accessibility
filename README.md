# Project Accessibility Front End
Basic UI for the CFTB Help desktop application

## Installation

1. Download this branch from the github [ui branch](https://github.com/ieee-utd/project-accessibility/tree/ui)
2. From a new terminal, cd into the UI directory
3. Install NodeJS
4. ~~Maybe install [babel](https://babeljs.io/docs/en/index.html) (I have this file in a folder called 'register' : '.babel.7.8.6.development')~~

```bash
cd UI
npm install electron
```

## Usage

To run the application, do the following command from the terminal

```bash
npm start
```

* The UI has a form so users can enter a string and submit by pressing ENTER on their keyboard or the 'Submit' button.
* A submitted string is displayed at the top of the app, below the title. This is just proof that 1. the string was received correctly and 2. the dislay could be manipulated.
* If the user submits another string, it will replace the previous string in memory and on the display.
* Below the form are text boxes where eventually buttons will be that'll display a solution to particular issue.

## Added Functionality from Last Iteration
This is the initial front end app

## Planned Functionality for Next Iteration
* Make more visually accessible (especially the form)
* Add functional buttons

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
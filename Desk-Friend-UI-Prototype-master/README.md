# Project Accessibility front-end
Second iteration of front end design

## Installation

1. Download this branch from the github [front-end branch](https://github.com/ieee-utd/project-accessibility/tree/front-end)
2. Open a terminal and change the directory into the correct folder (project-accessibility/Desk-Friend-UI-Prototype-master)
3. Install Node dependencies (to be saved in a newly created `node_modules` folder)
4. Run the application

```bash
cd Desk-Friend-UI-Prototype-master
npm install
npm start
```

## Usage

The application starts on a Solution Display page, as viewed by a non-admin. The name of the particular issue being addressed is displayed at the top. Then a container holds the steps to solve that particular issue (a "solution"). Another container holds buttons that allow the user to navigate the application. Clicking any of these buttons will switch to another page (aka the Search Page) and switch the status of the user to admin.

In the Search Page, the user is an admin. This is indicated by the change in color and text of header2. The user may input a string into the search bar, and when submitted, this updates the paragraph displayed. This is mostly to prove that the correct string was received and that the page could be re-rendered correctly. The buttons are previews to common issues. When clicked, the application will switch to another page (aka the Solution Display) and switch the status of the user to non-admin.

Note: Each page is a reuseable component. For example, an additional Search Page for non-admins could easily be added by going into `App.js` and returning another SearchPage with different passed props.

## Added Functionality from Last Iteration

* A unique and editable design CSS file. Purpose was to allow for more control over margin/padding sizes, colors that are adequately constrasting for the visually impaired, controlling colors displayed for special users (i.e. admins), and (eventually) controlling and changing the colors of component outlines
* Created functional buttons able to switch between pages of the application and change the status of a user (i.e. not an admin vs. admin)
* Able to take certain user interactions (currently clicking any button; eventually will be logging in) to recognize a user as an admin, giving them access to pages regular users do not have.
* Improved the Solution Search Page
  - Solution previews are now entirely buttons
  - The display is generally more realistic in regards to what a user will actually see
* Created a Solutions Display page

## Planned Functionality for Next Iteration

* Implement more pages by creating more components

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
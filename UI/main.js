// Source: 
// Source: https://github.com/electron/simple-samples/blob/master/hash/app.js
const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;

// Set environment. Uncomment when ready to publish. Comment out to allow for dev tools
//process.env.NODE_ENV = 'production';

// Windows
let mainWindow;
let addWindow;

// Listen for the app to be ready
app.on('ready', function(){
    //Create main Window upon 'ready'
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false, //don't show until window is ready, prevent any flickering
        webPreferences: {
            nodeIntegration: true //DO NOT USE THIS if loadURL is a 3rd party webpage or html written by someone else. Security risk. That's why it's disabled by default. Read more: https://stackoverflow.com/questions/44391448/electron-require-is-not-defined?fbclid=IwAR2kuTFFVLj5oZGtRvcFOuHAPxGtaHwU8QJo8MYF4IXrLSAPzwU95sWW1PM
        }
    });
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'), 
        protocol: 'file:',
        slashes: true
    }));
    // Build Menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert menu
    Menu.setApplicationMenu(mainMenu);
    // Quit app when closed
    mainWindow.on('closed', function(){
        app.quit();
    });
    // Show window once page is ready
    mainWindow.once('ready-to-show', function() {
        mainWindow.show();
    })
});

// Create Window to Add an Item
function createAddWindow() {
    //Create new window
    addWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true 
        },
        width: 300,
        height: 200,
        title: 'Add shopping list item'
    });
    // Load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'), 
        protocol: 'file:',
        slashes: true
    }));
    // Garbage collection handle
    addWindow.on('close', function(){
        addWindow = null;
    });
}

// Catch item:question
ipcMain.on('item:question', function(e, item) {
    console.log(item);
    mainWindow.webContents.send('item:question', item);
    //addWindow.close();
});

// Create main Menu template
const mainMenuTemplate = [
    {
    label: 'File', 
    submenu: [
        {
            label: 'Homepage',
            accelerator: process.platform == 'darwin' ? 'Command+W' : 'Ctrl+W',
            click() {
                //createAddWindow();
            }
        },
        {
            label: 'Back',
            accelerator: process.platform == 'darwin' ? 'Command+D' : 'Ctrl+D',
            click() {
                //mainWindow.webContents.send('item:clear');
            }
        },
        {
            label:  'Quit',
            // If on a Mac (darwin), hotkey is Command+Q. Otherwise, it's Ctrl+Q
            accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
            click(){
                app.quit();
            }
        }
    ]
    }
];

// If Mac, add empty object to menu
if(process.platform=='darwin'){
    mainMenuTemplate.unshift({}); //fn adds parameter to front of array
}

// Add developer tools item if not in production
if(process.env.NODE_ENV != 'production'){
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}
const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    Menu.setApplicationMenu(null);

    win.loadFile('src/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
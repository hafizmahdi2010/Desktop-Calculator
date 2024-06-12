const {app, BrowserWindow} = require("electron");
const path = require("path");

const createWindow = () => {
  let win = new BrowserWindow({
    title: "Calculator - Code With Mahdi",
    width: 400,
    height: 600,
    resizable: false,
    icon: path.join(__dirname, 'assets', 'icon.png') // Path to your icon file
  });

  win.loadFile("index.html");
  win.setMenuBarVisibility(false);
  
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
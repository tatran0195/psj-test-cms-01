const { app, BrowserWindow } = require("electron");
const path = require("path");

// Load environment variables for the embedded server
process.env.IS_CLIENT_RELEASE = "true";
// Instruct the server to use the packaged extraResource DB
process.env.DB_FILE = app.isPackaged 
  ? path.join(process.resourcesPath, "release.db") 
  : "release.db";

let mainWindow;

async function createWindow() {
  // Dynamically import the ES module server wrapper
  const { startServer } = await import("../server.js");
  
  // Start server on a random available port (0) to avoid conflicts
  const port = await startServer(0);
  console.log(`Internal server running on port: ${port}`);

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "CAE Docs Viewer",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Hide default menu bar for cleaner CAE look
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(`http://localhost:${port}/main`);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
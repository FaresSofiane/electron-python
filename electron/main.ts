import { app, BrowserWindow } from 'electron'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { spawn, execFile, ChildProcess } from 'child_process' // Import ChildProcess
import fs from 'fs-extra'; // Importation du module fs-extra
import treeKill from 'tree-kill'; // Import the tree-kill package

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, '..')

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let pythonProcess: ChildProcess | null = null // Variable to hold the Python process

let win: BrowserWindow | null

const isDev = !!VITE_DEV_SERVER_URL


async function extractAndRunPython() {
  const pyLibDir = path.join(process.resourcesPath, '..', 'lib', 'main');
  const isWindows = process.platform === 'win32';
  const isMac = process.platform === 'darwin';

  try {
    if (isDev) {
      // En mode développement, exécutez le script Python directement
      const pyScript = path.join(__dirname, '..', 'python', 'main.py');
      console.log('Running Python script at (dev mode):', pyScript);

      let PythonExecutor = null

      if (isWindows){

      PythonExecutor = path.join(__dirname, '..','venv', 'Scripts', 'python.exe')

      } else {

        PythonExecutor = "python"

      }

      pythonProcess = spawn(PythonExecutor, [pyScript]);

      pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });
    } else {
      const pyExecutable = path.join(pyLibDir, isWindows ? 'main.exe' : 'main');

      console.log('Running Python executable at:', pyExecutable);

      // Définir les permissions d'exécution si nécessaire (seulement pour les plateformes non-Windows)
      if (!isWindows) {
        await fs.chmod(pyExecutable, '755');
      }

      // Exécuter l'exécutable Python
      pythonProcess = execFile(pyExecutable, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Error: ${stderr}`);
          return;
        }
        console.log(`Output: ${stdout}`);
      });
    }
  } catch (err) {
    // @ts-ignore
    console.error(`Error handling Python executable: ${err.message}`);
  }
}

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    titleBarStyle:'hidden',
    titleBarOverlay: {
      color: '#2f3241',
      symbolColor: '#74b1be',
      height: 20
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
    },
    
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, 'index.html'))
  }
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on('before-quit', () => {
  // Terminate the Python process if it exists
  if (pythonProcess) {
    treeKill(pythonProcess.pid as number, 'SIGTERM', (err) => {
      if (err) {
        console.error(`Error killing Python process: ${err.message}`);
      }
      pythonProcess = null;
    });
  }
});


app.on('will-quit', (event) => {
  if (pythonProcess) {
    event.preventDefault();
    treeKill(pythonProcess.pid as number, 'SIGTERM', (err) => {
      if (err) {
        console.error(`Error killing Python process: ${err.message}`);
      }
      pythonProcess = null;
      app.quit();
    });
  }
});

app.whenReady().then(async () => {
  await extractAndRunPython()
  createWindow()
})
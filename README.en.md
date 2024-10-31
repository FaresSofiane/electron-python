# Electron-Python 🚀🐍

## Description 📖

`electron-python` is a desktop application created with Electron, React, and integrating Python scripts. This project combines the best of modern front-end technologies with the power of Python for backend tasks and scripts.

## Prerequisites ✅

Make sure you have the following installed on your machine:

- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) (Version 14 or higher)
- ![npm](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white) (Version 6 or higher)
- ![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white) (Version 3.6 or higher)
- ![PyInstaller](https://img.shields.io/badge/-PyInstaller-3776AB?logo=python&logoColor=white) (for packaging Python scripts)

## Installation 🛠️

To install and set up the project:

1. Clone the repository:
    ```sh
    git clone https://github.com/FaresSofiane/electron-python.git
    cd electron-python
    ```

2. Install npm dependencies:
    ```sh
    npm install
    ```

3. Initialize the Python environment:
    ```sh
    npm run python_init
    ```

## Scripts 📜

Here is a list of the available npm scripts and their usage:

- `npm run dev`: Starts the development server with Vite. ⚡
- `npm run build`: Compiles TypeScript, initializes the Python environment, builds Python scripts, builds the Vite project, and packages the application with Electron Builder. 🛠️
- `npm run build_nocheck`: Builds the Vite project and packages the application without type checking. 🔍
- `npm run lint`: Runs ESLint to check for code syntax. 🧹
- `npm run preview`: Previews the build with Vite. 👀
- `npm run build_python`: Initializes the Python environment and compiles Python scripts. 🐍

### Specific Python Scripts 🐍

- `npm run python_init:unix`: Initializes the Python virtual environment on Unix and installs dependencies. 🐧
- `npm run python_init:win`: Initializes the Python virtual environment on Windows and installs dependencies. 🪟
- `npm run python_build:unix`: Activates the virtual environment and uses PyInstaller to build Python scripts on Unix. 🐧
- `npm run python_build:win`: Activates the virtual environment and uses PyInstaller to build Python scripts on Windows. 🪟

## Project Structure 🗂️

- `src/`: Contains the React application source code.
- `public/`: Public resources for the application.
- `python-src/`: Contains Python scripts.
- `dist-electron/`: The final build of the Electron application.
- `requirements.txt`: List of Python dependencies.

## Mini-Guide for Modifications 🛠️

### ⚛️ Modifying React Components

1. Navigate to the React source code:
    ```sh
    cd src
    ```

2. Open and modify the desired `.tsx` files. For example, to modify `App.tsx`:
    ```sh
    nano src/App.tsx
    ```

    On Windows, you can use a text editor like Notepad++ or Visual Studio Code:
    ```sh
    code src/App.tsx
    ```

3. Start the development server to see your changes:
    ```sh
    npm run dev
    ```

### ⚡ Modifying Electron Configuration

1. Navigate to the Electron directory:
    ```sh
    cd dist-electron
    ```

2. Open and edit the necessary configuration files, such as `main.js`:
    ```sh
    nano dist-electron/main.js
    ```

    On Windows, use a text editor like Notepad++ or Visual Studio Code:
    ```sh
    code dist-electron/main.js
    ```

3. Rebuild the project to apply the changes:
    ```sh
    npm run build
    ```

### 🚀 Modifying FastAPI Configuration

1. Navigate to the Python source code:
    ```sh
    cd python-src
    ```

2. Open and edit the FastAPI files like `api.py`:
    ```sh
    nano python-src/api.py
    ```

    On Windows:
    ```sh
    code python-src/api.py
    ```

3. Make sure to modify the `api.spec` file if necessary for packaging the Python scripts:
    ```sh
    nano python-src/api.spec
    ```

    On Windows:
    ```sh
    code python-src/api.spec
    ```

4. Rebuild the Python scripts:
    ```sh
    npm run python_build
    ```

5. Always ensure you are in the virtual environment (venv) when installing new packages:
    ```sh
    source .venv/bin/activate  # On Unix
    .venv\Scripts\activate     # On Windows
    ```

## Contributing 👐

Contributions are welcome! Please submit a pull request or open an issue to discuss what you would like to change.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## Credits 👏

This project uses the following technologies:

- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white) for styles.
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) for the user interface.
- ![Electron](https://img.shields.io/badge/-Electron-47848F?logo=electron&logoColor=white) for the desktop application.
- ![FastAPI](https://img.shields.io/badge/-FastAPI-009688?logo=fastapi&logoColor=white) for backend API development in Python.

## License ⚖️

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

Thank you for using `electron-python`! If you have any questions, feel free to contact us.
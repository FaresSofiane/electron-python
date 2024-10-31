# Electron-Python

##  Description

`electron-python` is a desktop application created with Electron, React, and integrating Python scripts. This project combines the best of modern front-end technologies with the power of Python for backend tasks and scripts.

##  Prerequisites

Make sure you have the following installed on your machine:

- Node.js (Version 14 or higher)
- npm (Version 6 or higher)
- Python (Version 3.6 or higher)
- PyInstaller (for packaging Python scripts)

##  Installation

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

##  Scripts

Here is a list of the available npm scripts and their usage:

- `npm run dev`: Starts the development server with Vite.
- `npm run build`: Compiles TypeScript, initializes the Python environment, builds Python scripts, builds the Vite project, and packages the application with Electron Builder.
- `npm run build_nocheck`: Builds the Vite project and packages the application without type checking.
- `npm run lint`: Runs ESLint to check for code syntax.
- `npm run preview`: Previews the build with Vite.
- `npm run build_python`: Initializes the Python environment and compiles Python scripts.

###  Specific Python Scripts

- `npm run python_init:unix`: Initializes the Python virtual environment on Unix and installs dependencies.
- `npm run python_init:win`: Initializes the Python virtual environment on Windows and installs dependencies.
- `npm run python_build:unix`: Activates the virtual environment and uses PyInstaller to build Python scripts on Unix.
- `npm run python_build:win`: Activates the virtual environment and uses PyInstaller to build Python scripts on Windows.

##  Project Structure

- `src/`: Contains the React application source code.
- `public/`: Public resources for the application.
- `python-src/`: Contains Python scripts.
- `dist-electron/`: The final build of the Electron application.
- `requirements.txt`: List of Python dependencies.

##  Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss what you would like to change.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

##  Credits

This project uses the following technologies:

- [Tailwind CSS](https://tailwindcss.com/) for styles.
- [React](https://reactjs.org/) for the user interface.
- [Electron](https://www.electronjs.org/) for the desktop application.
- [FastAPI](https://fastapi.tiangolo.com/) for backend API development in Python.

##  License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

Thank you for using `electron-python`! If you have any questions, feel free to contact us.
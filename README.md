# Electron-Python

## [FR] Description

`electron-python` est une application de bureau créée avec Electron, React, et intégrant des scripts Python. Ce projet combine le meilleur des technologies front-end modernes avec la puissance de Python pour des tâches backend et des scripts.

## [FR] Prérequis

Assurez-vous que vous avez les éléments suivants installés sur votre machine :

- Node.js (Version 14 ou supérieure)
- npm (Version 6 ou supérieure)
- Python (Version 3.6 ou supérieure)
- PyInstaller (pour le packaging des scripts Python)

## [FR] Installation

Pour installer et configurer le projet :

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/FaresSofiane/electron-python.git
    cd electron-python
    ```

2. Installez les dépendances npm :
    ```sh
    npm install
    ```

3. Initialisez l'environnement Python :
    ```sh
    npm run python_init
    ```

## [FR] Scripts

Voici une liste des scripts npm disponibles et leur utilisation :

- `npm run dev` : Lance le serveur de développement avec Vite.
- `npm run build` : Compile TypeScript, initialise l'environnement Python, construit les scripts Python, construit le projet Vite, et emballe l'application avec Electron Builder.
- `npm run build_nocheck` : Construit le projet Vite et emballe l'application sans vérification de type.
- `npm run lint` : Exécute ESLint pour vérifier la syntaxe du code.
- `npm run preview` : Prévisualise la build avec Vite.
- `npm run build_python` : Initialise l'environnement Python et compile les scripts Python.

### [FR] Scripts Python spécifiques

- `npm run python_init:unix` : Initialise l'environnement virtuel Python sur Unix et installe les dépendances.
- `npm run python_init:win` : Initialize l'environnement virtuel Python sur Windows et installe les dépendances.
- `npm run python_build:unix` : Active l'environnement virtuel et utilise PyInstaller pour construire les scripts Python sur Unix.
- `npm run python_build:win` : Active l'environnement virtuel et utilise PyInstaller pour construire les scripts Python sur Windows.

## [FR] Structure du Projet

- `src/` : Contient le code source de l'application React.
- `public/` : Ressources publiques pour l'application.
- `python-src/` : Contient les scripts Python.
- `dist-electron/` : Le build final de l'application Electron.
- `requirements.txt` : Liste des dépendances Python.

## [FR] Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

1. Fork le projet.
2. Créer votre branche feature (`git checkout -b feature/AmazingFeature`).
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`).
4. Push vers la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une pull request.

## [FR] Crédits

Ce projet utilise les technologies suivantes :

- [Tailwind CSS](https://tailwindcss.com/) pour les styles.
- [React](https://reactjs.org/) pour l'interface utilisateur.
- [Electron](https://www.electronjs.org/) pour l'application de bureau.
- [FastAPI](https://fastapi.tiangolo.com/) pour le développement de l'API backend en Python.

## [FR] Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.

Merci d'utiliser `electron-python` ! Si vous avez des questions, n'hésitez pas à nous contacter.

---

## [EN] Description

`electron-python` is a desktop application created with Electron, React, and integrating Python scripts. This project combines the best of modern front-end technologies with the power of Python for backend tasks and scripts.

## [EN] Prerequisites

Make sure you have the following installed on your machine:

- Node.js (Version 14 or higher)
- npm (Version 6 or higher)
- Python (Version 3.6 or higher)
- PyInstaller (for packaging Python scripts)

## [EN] Installation

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

## [EN] Scripts

Here is a list of the available npm scripts and their usage:

- `npm run dev`: Starts the development server with Vite.
- `npm run build`: Compiles TypeScript, initializes the Python environment, builds Python scripts, builds the Vite project, and packages the application with Electron Builder.
- `npm run build_nocheck`: Builds the Vite project and packages the application without type checking.
- `npm run lint`: Runs ESLint to check for code syntax.
- `npm run preview`: Previews the build with Vite.
- `npm run build_python`: Initializes the Python environment and compiles Python scripts.

### [EN] Specific Python Scripts

- `npm run python_init:unix`: Initializes the Python virtual environment on Unix and installs dependencies.
- `npm run python_init:win`: Initializes the Python virtual environment on Windows and installs dependencies.
- `npm run python_build:unix`: Activates the virtual environment and uses PyInstaller to build Python scripts on Unix.
- `npm run python_build:win`: Activates the virtual environment and uses PyInstaller to build Python scripts on Windows.

## [EN] Project Structure

- `src/`: Contains the React application source code.
- `public/`: Public resources for the application.
- `python-src/`: Contains Python scripts.
- `dist-electron/`: The final build of the Electron application.
- `requirements.txt`: List of Python dependencies.

## [EN] Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss what you would like to change.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## [EN] Credits

This project uses the following technologies:

- [Tailwind CSS](https://tailwindcss.com/) for styles.
- [React](https://reactjs.org/) for the user interface.
- [Electron](https://www.electronjs.org/) for the desktop application.
- [FastAPI](https://fastapi.tiangolo.com/) for backend API development in Python.

## [EN] License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

Thank you for using `electron-python`! If you have any questions, feel free to contact us.
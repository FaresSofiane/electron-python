# Electron-Python 🚀🐍

## Description 📖

`electron-python` est une application de bureau créée avec Electron, React, et intégrant des scripts Python. Ce projet combine le meilleur des technologies front-end modernes avec la puissance de Python pour des tâches backend et des scripts.

## Prérequis ✅

Assurez-vous que vous avez les éléments suivants installés sur votre machine :

- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) (Version 14 ou supérieure)
- ![npm](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white) (Version 6 ou supérieure)
- ![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white) (Version 3.6 ou supérieure)
- ![PyInstaller](https://img.shields.io/badge/-PyInstaller-3776AB?logo=python&logoColor=white) (pour le packaging des scripts Python)

## Installation 🛠️

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

## Scripts 📜

Voici une liste des scripts npm disponibles et leur utilisation :

- `npm run dev` : Lance le serveur de développement avec Vite. ⚡
- `npm run build` : Compile TypeScript, initialise l'environnement Python, construit les scripts Python, construit le projet Vite, et emballe l'application avec Electron Builder. 🛠️
- `npm run build_nocheck` : Construit le projet Vite et emballe l'application sans vérification de type. 🔍
- `npm run lint` : Exécute ESLint pour vérifier la syntaxe du code. 🧹
- `npm run preview` : Prévisualise la build avec Vite. 👀
- `npm run build_python` : Initialise l'environnement Python et compile les scripts Python. 🐍

### Scripts Python spécifiques 🐍

- `npm run python_init:unix` : Initialise l'environnement virtuel Python sur Unix et installe les dépendances. 🐧
- `npm run python_init:win` : Initialisez l'environnement virtuel Python sur Windows et installez les dépendances. 🪟
- `npm run python_build:unix` : Activez l'environnement virtuel et utilisez PyInstaller pour construire les scripts Python sur Unix. 🐧
- `npm run python_build:win` : Activez l'environnement virtuel et utilisez PyInstaller pour construire les scripts Python sur Windows. 🪟

## Structure du Projet 🗂️

- `src/` : Contient le code source de l'application React.
- `public/` : Ressources publiques pour l'application.
- `python-src/` : Contient les scripts Python.
- `dist-electron/` : Le build final de l'application Electron.
- `requirements.txt` : Liste des dépendances Python.

## Mini-Guide de Modification 🛠️

### ⚛️ Modifier les Composants React

1. Naviguez vers le code source React :
    ```sh
    cd src
    ```

2. Ouvrez et modifiez les fichiers `.tsx` souhaités. Par exemple, pour modifier `App.tsx`:
    ```sh
    nano src/App.tsx
    ```

    Sur Windows, vous pouvez utiliser un éditeur de texte comme Notepad++ ou Visual Studio Code:
    ```sh
    code src/App.tsx
    ```

3. Lancez le serveur de développement pour voir vos modifications :
    ```sh
    npm run dev
    ```

### ⚡ Modifier la Configuration d'Electron

1. Naviguez vers le répertoire Electron :
    ```sh
    cd dist-electron
    ```

2. Ouvrez et modifiez les fichiers de configuration nécessaires, par exemple `main.js` :
    ```sh
    nano dist-electron/main.js
    ```

    Sur Windows, utilisez un éditeur de texte comme Notepad++ ou Visual Studio Code:
    ```sh
    code dist-electron/main.js
    ```

3. Rebuild le projet pour appliquer les modifications :
    ```sh
    npm run build
    ```

### 🚀 Modifier la Configuration de FastAPI

1. Naviguez vers le code source Python :
    ```sh
    cd python-src
    ```

2. Ouvrez et modifiez les fichiers FastAPI comme `api.py` :
    ```sh
    nano python-src/api.py
    ```

    Sur Windows:
    ```sh
    code python-src/api.py
    ```

3. Assurez-vous de modifier le fichier `api.spec` si nécessaire pour le packaging des scripts Python:
    ```sh
    nano python-src/api.spec
    ```

    Sur Windows:
    ```sh
    code python-src/api.spec
    ```

4. Rebuild les scripts Python :
    ```sh
    npm run python_build
    ```

5. N'oubliez pas de toujours être dans l'environnement virtuel (venv) lors de l'installation de nouveaux packages:
    ```sh
    source .venv/bin/activate  # Sur Unix
    .venv\Scripts\activate     # Sur Windows
    ```

## Contribuer 👐

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

1. Fork le projet.
2. Créer votre branche feature (`git checkout -b feature/AmazingFeature`).
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`).
4. Push vers la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une pull request.

## Crédits 👏

Ce projet utilise les technologies suivantes :

- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white) pour les styles.
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) pour l'interface utilisateur.
- ![Electron](https://img.shields.io/badge/-Electron-47848F?logo=electron&logoColor=white) pour l'application de bureau.
- ![FastAPI](https://img.shields.io/badge/-FastAPI-009688?logo=fastapi&logoColor=white) pour le développement de l'API backend en Python.

## Licence ⚖️

Ce projet est sous licence MIT. Voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.

Merci d'utiliser `electron-python` ! Si vous avez des questions, n'hésitez pas à nous contacter.
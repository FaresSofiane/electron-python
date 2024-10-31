# Electron-Python

## Description

`electron-python` est une application de bureau créée avec Electron, React, et intégrant des scripts Python. Ce projet combine le meilleur des technologies front-end modernes avec la puissance de Python pour des tâches backend et des scripts.

## Prérequis

Assurez-vous que vous avez les éléments suivants installés sur votre machine :

- Node.js (Version 14 ou supérieure)
- npm (Version 6 ou supérieure)
- Python (Version 3.6 ou supérieure)
- PyInstaller (pour le packaging des scripts Python)

## Installation

Pour installer et configurer le projet :

1. Clonez le dépôt :
    ```sh
    git clone [https://github.com/votre-utilisateur/votre-repo.git](https://github.com/FaresSofiane/electron-python.git)
    cd votre-repo
    ```

2. Installez les dépendances npm :
    ```sh
    npm install
    ```

3. Initialisez l'environnement Python :
    ```sh
    npm run python_init
    ```

## Scripts

Voici une liste des scripts npm disponibles et leur utilisation :

- `npm run dev` : Lance le serveur de développement avec Vite.
- `npm run build` : Compile TypeScript, initialise l'environnement Python, construit les scripts Python, construit le projet Vite, et emballe l'application avec Electron Builder.
- `npm run build_nocheck` : Construit le projet Vite et emballe l'application sans vérification de type.
- `npm run lint` : Exécute ESLint pour vérifier la syntaxe du code.
- `npm run preview` : Prévisualise la build avec Vite.
- `npm run build_python` : Initialise l'environnement Python et compile les scripts Python.

### Scripts Python spécifiques

- `npm run python_init:unix` : Initialise l'environnement virtuel Python sur Unix et installe les dépendances.
- `npm run python_init:win` : Initialize l'environnement virtuel Python sur Windows et installe les dépendances.
- `npm run python_build:unix` : Active l'environnement virtuel et utilise PyInstaller pour construire les scripts Python sur Unix.
- `npm run python_build:win` : Active l'environnement virtuel et utilise PyInstaller pour construire les scripts Python sur Windows.

## Structure du Projet

- `src/` : Contient le code source de l'application React.
- `public/` : Ressources publiques pour l'application.
- `python-src/` : Contient les scripts Python.
- `dist-electron/` : Le build final de l'application Electron.
- `requirements.txt` : Liste des dépendances Python.

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

1. Fork le projet.
2. Créer votre branche feature (`git checkout -b feature/AmazingFeature`).
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`).
4. Push vers la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.

---

Merci d'utiliser `electron-python` ! Si vous avez des questions, n'hésitez pas à nous contacter.

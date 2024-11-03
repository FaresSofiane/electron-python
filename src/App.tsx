import React, { useState } from 'react';
import axios from 'axios';

// Déclaration globale de l'interface Window pour utilisez ipcRenderer
declare global {
  interface Window {
    ipcRenderer: {
      on: (channel: string, listener: (event: any, ...args: any[]) => void) => void;
      off: (channel: string, listener: (event: any, ...args: any[]) => void) => void;
      send: (channel: string, ...args: any[]) => void;
      invoke: (channel: string, ...args: any[]) => Promise<any>;
      openExternalLink: (url: string) => void;
    };
  }
}

function App() {
    const [inputValue, setInputValue] = useState('');
    const [stateValue, setStateValue] = useState('');
    const [language, setLanguage] = useState('en'); // État pour la langue
    const [pingTime, setPingTime] = useState<number | null>(null); // État pour le temps de réponse

    const translations = {
        en: {
            title: 'Electron-Python Application',
            description: '`electron-python` is a desktop application built with Electron, React, and integrating Python scripts. This project combines the best of modern front-end technologies with the power of Python for backend tasks and scripts.',
            githubButton: 'Go to GitHub',
            inputPlaceholder: 'Type something...',
            testBackendButton: 'Test the backend',
            fastAPIResponse: 'FastAPI response: ',
            pingButton: 'Send Ping',
            pingResponseTime: 'Ping response time: ',
        },
        fr: {
            title: 'Application Electron-Python',
            description: '`electron-python` est une application de bureau créée avec Electron, React, et intégrant des scripts Python. Ce projet combine le meilleur des technologies front-end modernes avec la puissance de Python pour des tâches backend et des scripts.',
            githubButton: 'Aller sur GitHub',
            inputPlaceholder: 'Tapez quelque chose...',
            testBackendButton: 'Tester le backend',
            fastAPIResponse: 'Réponse FastAPI: ',
            pingButton: 'Envoyer Ping',
            pingResponseTime: 'Temps de réponse du ping: ',
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        setStateValue(inputValue);

        const url = `http://localhost:7777/hello/${inputValue}`;
        axios.get(url)
            .then(response => {
                setStateValue(response.data);
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    };

    const handlePingClick = async () => {
        const startTime = Date.now();
        const ws = new WebSocket('ws://127.0.0.1:7777/ws');
        ws.onopen = () => {
            ws.send('ping');
        };
        ws.onmessage = (event) => {
            if (event.data === 'pong') {
                const endTime = Date.now();
                setPingTime(endTime - startTime);
                ws.close();
            }
        };
    };

    const openExternalLink = (url: string) => {
        window.ipcRenderer.openExternalLink(url);
    };

    const handleLanguageToggle = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
    };

    return (
        <div className="bg-gradient-to-br from-transparent to-blue-500/20 bg-black h-screen-tb flex flex-col items-center justify-center p-8 space-y-4">
            <h1 className="text-4xl text-white mb-4">{translations[language].title}</h1>
            <p className="text-white mb-6 text-center">
                {translations[language].description}
            </p>
            <div className="flex space-x-4">
                <img src="/react.svg" alt="React Logo" className="w-12 h-12" />
                <img src="/electron.svg" alt="Electron Logo" className="w-12 h-12" />
                <img src="/vite.svg" alt="Vite Logo" className="w-12 h-12" />
                <img src="/fastapi.svg" alt="FastAPI Logo" className="w-12 h-12" />
                <img src="/tailwind.svg" alt="Tailwind Logo" className="w-12 h-12" />
                <img src="/axios.svg" alt="Axios Logo" className="w-12 h-12" />
            </div>
            <button
                onClick={handleLanguageToggle}
                className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded"
            >
                {language === 'en' ? 'Switch to French' : 'Switch to English'}
            </button>
            <button
                onClick={() => openExternalLink("https://github.com/FaresSofiane/electron-python")}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
                {translations[language].githubButton}
            </button>
            <div className="flex flex-col items-center mt-4">
                <input
                    type="text"
                    className="px-4 py-2 mb-2 text-black"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={translations[language].inputPlaceholder}
                />
                <button
                    onClick={handleButtonClick}
                    className="px-4 py-2 bg-green-600 text-white rounded"
                >
                    {translations[language].testBackendButton}
                </button>
                <p className="text-white mt-4">{translations[language].fastAPIResponse}: {stateValue}</p>
                <button onClick={handlePingClick}>{translations[language].pingButton}</button>
            {pingTime !== null && (
                <p>{translations[language].pingResponseTime} {pingTime} ms</p>
            )}
            </div>
        </div>
    );
}

export default App;
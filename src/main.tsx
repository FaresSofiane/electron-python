import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TopBar from "./components/TopBar.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <TopBar/>
      <div className={""} style={{ WebkitUserSelect: 'none' }}>
          <App />
      </div>

    </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
    console.log(message);
});

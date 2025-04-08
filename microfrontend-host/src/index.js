import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// Carrega o componente remoto
const RemoteButton = React.lazy(() => import("remote/Button"));

const App = () => (
  <div>
    <h1>Host App</h1>
    <Suspense fallback={<div>Carregando botão...</div>}>
      <RemoteButton />
    </Suspense>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

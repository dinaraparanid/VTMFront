import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LangProvider from "./utils/lang/LangProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<React.StrictMode>
    <LangProvider>
        <App/>
    </LangProvider>
</React.StrictMode>);

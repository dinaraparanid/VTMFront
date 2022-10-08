import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CurrentScreenProvider from "./utils/current_screen/CurrentScreenProvider";
import LangProvider from "./utils/lang/LangProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<React.StrictMode>
    <CurrentScreenProvider>
        <LangProvider>
            <App/>
        </LangProvider>
    </CurrentScreenProvider>
</React.StrictMode>);

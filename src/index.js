import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer, {initialState}  from './Reducer';
import { StateProvider } from './StateProvider';

ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}> {/**Here we'll wrap our app with the state */}
            <App />
        </StateProvider>
    </React.StrictMode>,
     document.getElementById('root'));
registerServiceWorker();

import React, { Suspense } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

//Firebase
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase-config';

const store = createStore(rootReducer);

render(
  <Suspense fallback={"Cargando!"}>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </FirebaseAppProvider>
  </Suspense>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

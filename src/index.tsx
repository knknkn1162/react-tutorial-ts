import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, Store } from 'react-redux'
import { createStore } from 'redux';
import todos from './reducers/todos';
import { Todos } from './states/TodoState'

import App from './App';

let store: Store<Todos> = createStore(todos, []);

// @@redux/INIT
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

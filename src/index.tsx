import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, Store } from 'react-redux'
import { createStore } from 'redux';
import todoApp from './reducers/';
import { TodoList } from './states/Filter'

import App from './App';

let store: Store<TodoList> = createStore(todoApp);

// @@redux/INIT
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

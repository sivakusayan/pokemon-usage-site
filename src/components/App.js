import React from 'react';
import { Provider } from 'react-redux';
import create from '../ducks/create';

const store = create();

function App() {
  return (
    <Provider store={store} >
      <div className="app">
      </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import create from '../ducks/create';

import UsageTable from './UsageTable/index';

const store = create();

function App() {
  return (
    <Provider store={store} >
      <div className="app">
        <UsageTable />
      </div>
    </Provider>
  );
}

export default App;

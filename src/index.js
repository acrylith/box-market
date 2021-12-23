import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import context from './context';

const Main = () => {
  const [refresh, setRefresh] = useState(0)

  return(
    <React.StrictMode>
      <context.Provider value={{refresher:{refresh, setRefresh}}}>
        <App />
      </context.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
)
import React from 'react'
import GlobalState from './context/GlobalState'
import Routes from './pages'

//type AppProps = { message: string, myProp: number }; /* could also use interface */

const App: React.FC = () => (
  <GlobalState>
    <Routes />
  </GlobalState>
);

export default App;

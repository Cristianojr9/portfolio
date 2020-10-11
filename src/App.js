import React from 'react';

import Routes from './routes';
import GlobalStyles from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

const App = () => {
  return(
    <>
      <ToastContainer />
      <GlobalStyles />
      <Routes />
    </>
  )
}

export default App;

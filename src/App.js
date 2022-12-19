import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MyRoute from './components/MyRoute';
import ContactContext from './ContactContext';

const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <ContactContext>
    <MyRoute/>
    </ContactContext>
    </BrowserRouter>
    </>
  );
};

export default App;
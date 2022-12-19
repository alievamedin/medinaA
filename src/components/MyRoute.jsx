import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddContact from './AddContact.jsx/AddContact';

const MyRoute = () => {
    return (
       <Routes>
          <Route path='/' element={<AddContact/>} />
       </Routes>
    );
};

export default MyRoute;
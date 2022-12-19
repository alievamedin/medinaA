import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddContact from './AddContact.jsx/AddContact';
import EditContact from './EditContact/EditContact';

const MyRoute = () => {
    return (
       <Routes>
          <Route path='/' element={<AddContact/>} />
          <Route path='/edit' element={<EditContact/>} />
       </Routes>
    );
};

export default MyRoute;
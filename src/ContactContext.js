import axios from 'axios';
import React, { children, createContext, useContext, useEffect, useState } from 'react';


export const contactContext = createContext();
export const useContact=()=>{
    return useContext(contactContext)
}




const ContactContext = ({children}) => {
    const [users, setUsers] = useState([])
    const postUser=async(user)=>{ 
        await axios.post('http://localhost:8000/contacts', user)
        getUsers()
    } 
    
        async function getUsers () {
         const res = await axios('http://localhost:8000/contacts')
            setUsers(res.data)

         }
         async function deleteUser (id){
            await axios.delete(`http://localhost:8000/contacts/${id}`)
            getUsers()
         }
         useEffect(()=>{
             getUsers()
           
         }, [])

          

        const values={
            postUser,
            users,
            deleteUser
            
        }
    return (
        <contactContext.Provider value={values}>
            {children}
        </contactContext.Provider>
    );
};

export default ContactContext;
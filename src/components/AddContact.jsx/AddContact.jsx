import axios from 'axios';
import React, { useState } from 'react';
import { contactContext, useContact } from '../../ContactContext';

const AddContact = () => {
    const {postUser, users, deleteUser}=useContact(contactContext);
    console.log(users);
const [user, setUser]=useState({
    name:"",
    lastName:"",
    url:"",

}

)


    return (
        <div >
            <input value={user.name} onChange={(e)=>setUser({ ...user, name:e.target.value})} type="text" placeholder='name'  />
            <input value={user.lastName} onChange={(e)=>setUser({ ...user, lastName:e.target.value})} type="text" placeholder='lastName'/>
            <input value={user.url} onChange={(e)=>setUser({ ...user, url:e.target.value})} type="text"  placeholder='url'/>
            <button onClick={ ()=>postUser(user)} >Post</button>
            {users?.map((item)=>(
                <div  key={item.id}>
                    <h1>{item.name}</h1>
                    <h3>{item.lastName}</h3>
                    <img style={{width:"20%"}}  src={item.url} alt="" />
                    <button onClick={()=>deleteUser(item.id)} >Edit</button>
                </div>
            ))}
        </div>
    );
};

export default AddContact;
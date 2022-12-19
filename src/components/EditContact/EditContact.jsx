import React from 'react';

const EditContact = () => {
    return (
        <div>
             <input type="text" placeholder='name'  />
            <input type="text" placeholder='lastName'/>
            <input type="text"  placeholder='url'/>
            <button >Post</button> 
        </div>
    );
};

export default EditContact;
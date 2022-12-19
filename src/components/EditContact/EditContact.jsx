import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditContact = ({setShow, oneStudent, editStudent}) => {

    const handleClose = () => setShow(false); 
    
  const [user, setUser] = useState(oneStudent);
  useEffect(() => {
    setUser(oneStudent);
  }, [oneStudent]);

  const params = useParams();
  console.log(params);

  const handleSave = () => {
    editStudent(user, params.id);
    handleClose(); 
  };
//   console.log(user);

    
    return (
        <div>
             <input type="text" placeholder='name'  
          onChange={(e) => setUser({ ...user, img: e.target.value })} />
            <input type="text" placeholder='lastName'  
          onChange={(e) => setUser({ ...user, img: e.target.value })}/>
            <input type="text"  placeholder='url'  
          onChange={(e) => setUser({ ...user, url: e.target.value })}/>
            <button onClick={handleSave} >Post</button> 
        </div>
    );
};

export default EditContact;
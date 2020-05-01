import React,{useState} from 'react';

import  {v4 as uuidv4} from 'uuid';
/*import Formulario from  './components/Formulario'
import FormHook from  './components/FormHook'
import EjemploUNO from  './components/EjemploUNO'
import Saludo from './components/Saludo'
import Comentario from './components/Comentario'*/



import './App.css';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';



function App(){
 /* const sujeto = {
    nombre:'Ramon',
    urlImagen:'http://via.placeholder.com/64',
    texto:'Ramon quiere a karina'
  }*/
  const UsersData=[
   { id:uuidv4(), name:'Ramon',username:'devops'},
   { id:uuidv4(), name:'karina',username:'Ancelma'},
   { id:uuidv4(), name:'Evy', username:'carranza'},

  ]
  //agregar usuarios
  const [users, setUsers]=useState(UsersData);
  const addUser= (user) => {
    user.id= uuidv4()
    setUsers([...users,user])
  }
  //eliminar usuario
  const deleteUser= (id) => {
    const arrayfiltrado=users.filter(user=> user.id !==id );
   setUsers(arrayfiltrado)
   
  }
  //editar usuario
  const [editing,setEditing]=useState(false);
  const [currentUser,setcurrentUser]=useState(
    {
      id:null, name:'',username:''
    }
  );
  const editRow=(user)=> {
    setEditing(true)
    setcurrentUser({
    id: user.id, name: user.name, username:user.username
  })
  const updateUser=(id,updateUser)=>{
    setEditing(false)
    setUsers(users.map(user => (user.id === id? updateUser :user)))
   }  
 return (
    
    <div className="container">
      <h1> CRUD App with Hooks </h1>
       <div className="flex-row">
        <div className="flex-large" >
        {
          editing ? (
          <div> 
            <h2> Editar Usuarios </h2>
            <EditUserForm
            currentUser={currentUse}
            updateUser={updateUser}/>
           </div>
         ) :(
            <div>       
                <h2> Agregar Usuarios </h2>
               <AddUserForm addUser={addUser}/>
            <div> 
         )
        }
         </div>
       <div className="flex-large">
         <h2> ver Usuarios </h2>

         <UserTable users={users}
          deleteUser={deleteUser} 
          
          editRow={ editRow} />
       </div>
     </div>
  </div>
  );
}


export default App;


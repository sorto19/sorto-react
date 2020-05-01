import React from 'react'

import {useForm} from 'react-hook-form'

const AddUserForm = (props)=>
{
    const {register,errors,handleSubmit}=useForm();
    const onSubmit =(data,e)=>{
        props.addUser(data)
        //limpia campos
        e.target.reset();
    }
    return(
<form onSubmit={handleSubmit(onSubmit)}>
    <label >Name</label>
     <input type="text" name="name"
     ref={
         register({
             required: {value:true, message:"Campo Requerido"}
         })
     }/>
     <span>{errors?.name?.message}</span>
     <label >UserNameame</label>
     <input type="text" name="username"
      ref={
        register({
            required: {value:true, message:"Campo Requerido"}
        })
    }/>
    <span>{errors?.username?.message}</span>
     <button>Add new User</button>

</form>
    );
}
export default AddUserForm;


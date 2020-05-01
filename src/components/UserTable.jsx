import React from 'react'
const UserTable = (props)=>{
    console.log(props.users)
    return(
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            {
                props.users.length>0 ?
                props.users.map(user =>(
                    <tr key ={user.id}> 
                    <td>{user.name }</td>
                    <td>{user.username }</td>
                    <td>
                    <button className="button mutted-button"
                    onClick={()=> {props.editRow(user)}}>Edit</button>

                    <button className="button mutted-button"
                    onClick={()=> {props.deleteUser(user.id)}}>Delete</button>
                    </td>
                    </tr>
       
                )) :(
                    <tr colSpan={3}> No users </tr>
                )
            }
        </tbody>
        </table>
    );
}
export default UserTable;
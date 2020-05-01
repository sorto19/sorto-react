import React,{Fragment,useState }from 'react';
import {useForm} from 'react-hook-form'

const EjemploUNO = () =>{
    const {register,errors,handleSubmit}=useForm();

const [Entradas, setEntradas]=useState([])

    const onSubmit=(data,e) =>{
        console.log(data)
        e.target.reset();
        setEntradas([
            ...Entradas,
            data
        ])
    }   
    return(
        <Fragment> 
        <h1>Ejemplo Uno</h1>
        <form onSubmit={handleSubmit(onSubmit)}> 
         <input
         name ="titulo"
         className="form-control my-2"
         placeholder="Ingrese Titulo"
         ref={
            register({
                required: {value: true, message:'Campo obligatorio'},
                minLength:{value:2, message:'Minimo dos letras'}
            })
        }
         /> 
          { errors.titulo &&
              <span className="text-danger text-small d-block mb-2">
                 {errors?.titulo?.message }
             </span>
         }
          <input
         name ="descripcion"
         className="form-control my-2"
         placeholder="Ingrese Descripcion"
         ref={
            register({
                required: {value: true, message:'Campo obligatorio'},
                minLength:{value:2, message:'Minimo dos letras'}
            })
        }
         /> 

         { errors.descripcion &&
              <span className="text-danger text-small d-block mb-2">
                 {errors?.descripcion?.message }
             </span>
         }
         <button  className="btn btn-primary">Agregar</button>
       </form> 
         <ul>
             {
                 Entradas.map(item=>
                    <li>{item.titulo}-{item.descripcion} </li>
                 )
             }
         </ul>
      </Fragment> 
    );
}  
export default EjemploUNO;
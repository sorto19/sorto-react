import  React, {Fragment} from  'react'
import Avatar from './Avatar'
const Comentario =({sujeto})=>{
    return(
            <Fragment>
                <h1>Comentarrios </h1>
                <hr/>
               <div className="media">
              
               <Avatar urlImagen={sujeto.urlImagen}/>
               </div>
               <div class="mt-0">
               <h5 className="mt-0">{sujeto.nombre}</h5>
               {sujeto.texto}
               </div>
            </Fragment> 
    );
}
export default Comentario;
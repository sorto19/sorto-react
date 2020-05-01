import React ,{Fragment} from 'react'

const Avatar = ({urlImagen}) =>{
 return(
    <Fragment>
    <img src={urlImagen} alt="" className="mr-3"/>
        
   </Fragment>

 );
}
export default Avatar;
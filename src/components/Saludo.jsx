import  React, {Fragment} from  'react'

const Saludo =(props)=>{
    return(
            <Fragment>
                <h1>Hola {props.persona}</h1>
            </Fragment> 
    );
}
export default Saludo;
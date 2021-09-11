import {INPUT,LeyendaError} from './form.js';



import React from 'react'

function Input({tipo,placeholder,name,estado,cambiarEstado,expresionRegular,funcion,leyendaError,errorSoloNombre}) {

        const onChange = (e) => {
            cambiarEstado({...estado,campo:e.target.value});
        }

        const validacion = () => {
            if(expresionRegular){
                if(expresionRegular.test(estado.campo)){
                    cambiarEstado({...estado, valido: 'true'});
                } else {
                    cambiarEstado({...estado, valido: 'false'});
                }
            }

            if(funcion){
                funcion();
            }
        }
    return (
        <>
        <div>
            <INPUT 
            type={tipo}
            placeholder={placeholder}
            id={name}
            value={estado.campo}
            onChange={onChange}
            onKeyUp={validacion}
            onBlur={validacion}
            valido={estado.valido}
            />
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
        
        </>
    )
}

export default Input

import React, {useState} from 'react'
import {Title,FORMS,MensajeExito,MensajeError} from './form.js';
import INPUT from './input.js';
import axios from 'axios';
import {BsExclamationTriangle} from 'react-icons/bs';

function Forms() {

    const [NAME,cambiarNOME]= useState({campo: '', valido: null})
    const [AGE,cambiarAGE]= useState({campo: '', valido: null})
    const [DIRECCION,cambiarDIRECCION]= useState({campo: '', valido: null})
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        NAME: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,30}$/,
        AGE: /[0-9]$|^[1-9][0-9]$|^(100)$/,
        DIRECCION: /^([a-zA-Z]+( [a-zA-Z]+)+).*$/

    }

    const OnSubmit = (e) => {
        e.preventDefault();

        if(NAME.valido === "true" && AGE.valido === 'true' && DIRECCION.valido === "true"){
            cambiarFormularioValido(true);
            cambiarNOME({campo: '', valido:null});
            cambiarAGE({campo: '', valido:null});
            cambiarDIRECCION({campo: '', valido:null})

            const Datos = {
                NAME: NAME.campo,
                AGE: AGE.campo,
                DIRECCION: DIRECCION.campo
            }

            axios({
                method:"post",
                ContenType: "application/json",
                url: '',
                data: Datos
            })
            .then(res => {
                if(res.data.status === "success"){
                    console.log("Message Sent!")
                }
            })
            .catch(err => {
                console.log(err.message ? err.message : "Unknow error");
            })

        }else{
            cambiarFormularioValido(false);
        }  

    }

    return (
        <>
        <Title>Practice with Forms</Title>
        <FORMS onSubmit={OnSubmit} autoComplete="off">
            <INPUT
            tipo='text'
            placeholder="John Doe"
            name="NAME"
            estado={NAME}
            cambiarEstado={cambiarNOME}
            leyendaError="No debe estar vacio este campo"
            expresionRegular={expresiones.NAME}
            />
             <INPUT
            tipo='text'
            placeholder="How's old are you"
            name="AGE"
            estado={AGE}
            cambiarEstado={cambiarAGE}
            leyendaError="No debe estar vacio y solo contener Numeros"
            expresionRegular={expresiones.AGE}
            />
             <INPUT
            tipo='text'
            placeholder="What's is your street"
            name="DIRECCION"
            estado={DIRECCION}
            cambiarEstado={cambiarDIRECCION}
            leyendaError="No debe estar vacio y solo ingresar direcciones validas"
            expresionRegular={expresiones.DIRECCION}

            />
             <div>
                {formularioValido === false && <MensajeError>
                    <p className='WrongW'>
                        <div className='DisplayIcon'>{<BsExclamationTriangle size='1.8rem' color='red'/>}</div>
                        rellena el formulario completamente. 
                    </p>
                </MensajeError>}
                <div className='DisplayButton'>
                    <button className='Button' type="submit">Enviar</button>
                </div>
                <div id='msg' className=''>
                {
                 formularioValido === true && <MensajeExito id='msg-exito' className=''>Formulario enviado exitosamente!</MensajeExito>
                }
                </div>
            </div>
        </FORMS>
        </>
    )
}

export default Forms;

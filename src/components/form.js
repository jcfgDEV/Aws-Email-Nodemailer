import styled,{css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const colores = {
	borde: "#0075FF",
	error: "#ba3030",
	exito: "#70ff63",
}


const Title = styled.h1`
font-size:2rem;
color:black;
display:flex;
justify-content: center;
transform:translateY(9rem);
`;


const INPUT = styled.input`
width:400px;
height:35px;
padding:15px;
outline:none;
border:none;
box-shadow: -3px 12px 7px 0px rgba(0,0,0,0.67);
font-family: 'Staatliches', cursive;
font-size:2rem;

@media(max-width: 767px) {
    width:330px;

}

${props => props.valido === 'true' && css`
    border: 2px solid transparent;
`}

${props => props.valido === 'false' && css`
    border: 2px solid ${colores.error} !important;
`}

::placeholder,
::-webkit-input-placeholder {
color: black;
font-weight:bolder;
font-size:2rem;
}
:-ms-input-placeholder {
 color: white;
 font-weight:bolder;
}

`;

const FORMS = styled.form`
transform:translateY(9rem);
display:grid;
justify-content:center;
gap:40px;

`

const LeyendaError = styled.p`
	position:absolute;
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	font-weight:900;
	text-transform: uppercase;

	${props => props.valido === 'true' && css`
		display: none;
	`}

	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const MensajeExito = styled.p`
    background-color:${colores.exito};
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    width:190px;
    font-size:1.2rem;
    font-weight:bold;
    box-shadow: -3px 12px 7px 0px rgba(0,0,0,0.67);
`;

const MensajeError = styled.div`
	background-color:${colores.error};
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    transform:translateY(-30rem);
    position:absolute;
    width:330px;
    font-weight:bold;
    box-shadow: -3px 12px 7px 0px rgba(0,0,0,0.67);

    


`;

const IconoValidacion = styled(FontAwesomeIcon)`
	@media(max-width: 767px) {
		transform: translate(23rem) translateY(-2.7rem);

	}
	position:absolute;
	transform: translate(23rem) translateY(-2.7rem);
	z-index: 100;
	font-size: 20px;
	opacity: 0;

	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}

	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;






export {Title,INPUT,FORMS,IconoValidacion,MensajeError,MensajeExito,LeyendaError}
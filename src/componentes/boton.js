import React from "react";
import '../hojasEstilo/Boton.css'


function Boton(props){

		const esOperador = valor => {
			return isNaN(valor) && ( valor !=='.' ) && ( valor !=='=' );
		};
    return(
			<div
				className={` boton__contenedor ${esOperador(props.children) ? 'operador' : '' }`.trimEnd() } 
				onClick={() => props.manejarClic(props.children)}>
				{props.children}
			</div>
		)
}

export default Boton;
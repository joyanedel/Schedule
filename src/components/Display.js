import React from 'react';
import Schedule from '../data/Schedule';
import '../css/Display.css';

function Display(props) {
  var nombre, profesor, tipo, day, block;
  try{
    day = props.bloque.slice(0,2);
    block = props.bloque.slice(2);
    [nombre, profesor] = Schedule.Siglas[props.sigla];
    tipo = Schedule.Horario[day][block][1];
  }
  catch(err){
    nombre = "";
    profesor = "";
  }
  return(
    <div>
      <span className="details"> Asignatura: {"["+props.sigla+"] - "+nombre} </span>
      <span className="details"> Profesor: {profesor} </span>
      <span className="details"> Tipo: {tipo} </span>
      <span className="details"> Bloque: {Schedule.Bloques[block]} </span>
    </div>
  );
}

export default Display;

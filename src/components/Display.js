import React from 'react';
import Schedule from '../data/Schedule';
import '../css/Display.css';
import Cookie from 'universal-cookie';

const cookies = new Cookie();

function Display(props) {
  var nombre, profesor, tipo, day, block, sigla;
  if(props.init){
    try{
      sigla = props.sigla;
      day = props.bloque.slice(0,2);
      block = props.bloque.slice(2);
      [nombre, profesor] = Schedule.Siglas[props.sigla];
      tipo = Schedule.Horario[day][block][1];
    }
    catch(err){
      nombre = "";
      profesor = "";
    }
  } else {
    sigla = cookies.get('data').sigla;
    day = cookies.get('data').bloque.slice(0,2);
    block = cookies.get('data').bloque.slice(2);
    [nombre, profesor] = Schedule.Siglas[sigla];
    tipo = Schedule.Horario[day][block][1];
  }
  return(
    <div>
      <span className="details"> Asignatura: {"["+sigla+"] - "+nombre} </span>
      <span className="details"> Profesor: {profesor} </span>
      <span className="details"> Tipo: {tipo} </span>
      <span className="details"> Bloque: {Schedule.Bloques[block]} </span>
    </div>
  );
}

export default Display;

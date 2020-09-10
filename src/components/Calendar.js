import React from 'react';
import Bloque from './Bloque';
import '../css/Calendar.css';

const blocks = ["1-2","3-4","5-6","7-8","9-10","11-12","13-14","15-16"];
const days = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

class Calendar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sigla: this.props.data.sigla,
      bloque: this.props.data.bloque
    };
    this.putData = props.putData;
  }

  render() {
    return(
      <table>
        <tbody>
          <tr style={{backgroundColor: "orange"}}>
            <th> Bloque </th>
            <th> Lunes </th>
            <th> Martes </th>
            <th> Miércoles </th>
            <th> Jueves </th>
            <th> Viernes </th>
            <th> Sábado </th>
            <th> Domingo </th>
          </tr>

          {blocks.map(block => {
            return(
              <tr key={block}>
                <td> {block} </td>
                {days.map(day => {
                  return(
                    <Bloque key={day} day={day} block={block} putData={this.putData}/>
                  );
                })}
              </tr>
            );
          })}

        </tbody>
      </table>);
  }
}

export default Calendar;

import React from 'react';
import Schedule from '../data/Schedule';
import Colores from '../data/Ramos';
import '../css/Bloque.css';

class Bloque extends React.Component {
  constructor(props) {
    super(props);
    try{
      this.sigla = Schedule.Horario[this.props.day][this.props.block][0];
      this.color = Colores[this.sigla];
    }
    catch(err){
      this.sigla = "";
      this.color = "white";
    }
    this.discriminate = this.discriminate.bind(this);
    this.setColor = this.setColor.bind(this);
    this.onHover = this.onHover.bind(this);
  }

  onHover(e) {
    if(this.sigla === "") return;
    e.target.style.background = "linear-gradient(to bottom, rgba(255,165,31,0.65) 0%,rgba(255,165,31,0) 100%)";
  }

  setColor(e) {
    if(this.sigla === "") return;
    e.target.style.background = this.color;
  }

  discriminate() {
    this.props.putData({sigla: this.sigla, bloque: this.props.day+this.props.block})
  }

  render() {
    return(
      <td className="td-ramos"
        key={this.props.day}
        id={this.props.day+this.props.block}
        style={{backgroundColor: this.color}}
        onMouseOver={(e) => this.onHover(e)}
        onMouseOut={(e) => this.setColor(e)}
        onClick={() => this.discriminate()}>
          {this.sigla}
      </td>
    );
  }
}

export default Bloque;

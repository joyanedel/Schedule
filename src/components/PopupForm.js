import React from 'react';
import styles from '../css/PopupForm.css';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sigla: '',
      nombre: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    alert('Successful');
  }

  render(){
    return(
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>
          Sigla:
            <input type="text" name="sigla" placeholder="Example: INF130" onChange={this.handleChange} />
          </label>
          <label>
            Nombre:
            <input type="text" name="nombre" placeholder="Example: Programación" onChange={this.handleChange} />
          </label>
          <button type="submit"> Send </button>
        </form>
      </div>
    );
  }
}

export default Form;

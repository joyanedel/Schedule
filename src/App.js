import React from 'react';
import { connect } from 'react-redux';
import { putData } from './actions/blockAction';
import Calendar from './components/Calendar';
import Display from './components/Display';
import './css/App.css';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <h2> Horario académico </h2>
        <div className="split left"> <Display sigla={this.props.data.sigla} bloque={this.props.data.bloque} init={this.props.data.init}/> </div>
        <div className="split right"> <Calendar data={this.props.data} putData={this.props.putData}/> </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    putData: (state) => dispatch(putData(state))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import logo from './../assets/logo.svg';
import logoBridge from './../assets/logoBridge.svg';
import './../css/App.css';
import FormInput from './../components/FormInput';

class App extends Component {
  state = {
    result: [],
  };

  updateResultState = (value) => {
    this.setState({ result: value });
  };
  teste = (value) => {
    console.log(value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logoBridge} alt="logoBridge" />
        </header>
        <div>
          <h3>Teste prático</h3>
          <FormInput
            setStateResult={this.updateResultState} //passo a função para o filho sem chamar ela
          ></FormInput>
        </div>
      </div>
    );
  }
}

export default App;

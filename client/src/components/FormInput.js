import React from 'react';
import axios from 'axios';
import { Button, TextField } from 'bold-ui';
import MyTable from './MyTable';

export default class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startNumber: '',
      endNumber: '',
      rows: [],
    };
  }

  handleChangeStartNumber = (event) => {
    this.setState({ startNumber: parseInt(event.target.value) });
  };

  handleChangeEndNumber = (event) => {
    this.setState({ endNumber: parseInt(event.target.value) });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.startNumber >= this.state.endNumber) {
      this.props.setStateResult('');
      this.setState({ endNumber: '' });
      return alert(`O segundo número deve ser maior que o primeiro!`);
    }

    let input = {
      startNumber: this.state.startNumber,
      endNumber: this.state.endNumber,
    };

    axios.post(`/api/teste`, { input }).then((res) => {
      this.props.setStateResult(res.data);

      //depois de terminado melhorar isso
      let dataFormated = [];
      res.data.forEach((element, index) => {
        return dataFormated.push({ id: index + 1, number: element });
      });
      this.setState({ rows: dataFormated });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="Form">
          <TextField
            name="name"
            label="Digite um intervalo numérico: "
            placeholder="Digite aqui.."
            value={this.state.startNumber}
            onChange={this.handleChangeStartNumber}
            required
          />
          <TextField
            name="name"
            placeholder="Digite aqui.."
            value={this.state.endNumber}
            onChange={this.handleChangeEndNumber}
            required
          />
          <div className="Button">
            <Button type="submit" kind="primary" size="small">
              Enviar
            </Button>
          </div>
        </form>
        <div>
          <MyTable rows={this.state.rows}></MyTable>
        </div>
      </div>
    );
  }
}

import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'number', headerName: 'Número Primo', width: 150 },
  ];

  render() {
    return (
      <div className="MyTable">
        <DataGrid rows={this.props.rows} columns={this.columns} />
      </div>
    );
  }
}

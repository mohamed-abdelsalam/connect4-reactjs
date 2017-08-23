import React from 'react';
import Cell from './Cell.jsx';

export default class Column extends React.Component {

  constructor() {
    super();
    this.state = {
      cells: Array(8).fill('0'),
    };
  }

  handleClick = () => {
    const cells = this.state.cells.slice();
    for (var index = cells.length; index >= 0 ; index--) {
      if (cells[index] === '0') {
        cells[index] = '1';
        this.setState({cells: cells});
        return;
      }
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <Cell name={this.state.cells[0]}/>
        <Cell name={this.state.cells[1]}/>
        <Cell name={this.state.cells[2]}/>
        <Cell name={this.state.cells[3]}/>
        <Cell name={this.state.cells[4]}/>
        <Cell name={this.state.cells[5]}/>
        <Cell name={this.state.cells[6]}/>
        <Cell name={this.state.cells[7]}/>
      </div>);
  }

}

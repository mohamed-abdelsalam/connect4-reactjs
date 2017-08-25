import React from 'react';
import Cell from './Cell.jsx';

export default class Column extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.colOnClick(this.props.colNum)}>
        <Cell value={this.props.colMap[0]}/>
        <Cell value={this.props.colMap[1]}/>
        <Cell value={this.props.colMap[2]}/>
        <Cell value={this.props.colMap[3]}/>
        <Cell value={this.props.colMap[4]}/>
        <Cell value={this.props.colMap[5]}/>
        <Cell value={this.props.colMap[6]}/>
        <Cell value={this.props.colMap[7]}/>
      </div>);
  }
}

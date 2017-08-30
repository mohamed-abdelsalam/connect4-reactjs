import React from 'react';
import '../style/Grid.css';
import Cell from './Cell.jsx';

function Column(props) {

  return (
    <div onClick={() => props.colOnClick(props.colNum)}>
      <Cell value={props.colMap[0]}/>
      <Cell value={props.colMap[1]}/>
      <Cell value={props.colMap[2]}/>
      <Cell value={props.colMap[3]}/>
      <Cell value={props.colMap[4]}/>
      <Cell value={props.colMap[5]}/>
      <Cell value={props.colMap[6]}/>
      <Cell value={props.colMap[7]}/>
    </div>);
}

export default class Grid extends React.Component {

  renderColumn = (colNum, colMap) => {
    return (<Column colNum={colNum}
      colOnClick={(i) => this.props.girdOnClick(i)} colMap={colMap}/>);
  }

  render() {

    return (<div className='grid'>
      {this.renderColumn(0, this.props.board[0])}
      {this.renderColumn(1, this.props.board[1])}
      {this.renderColumn(2, this.props.board[2])}
      {this.renderColumn(3, this.props.board[3])}
      {this.renderColumn(4, this.props.board[4])}
      {this.renderColumn(5, this.props.board[5])}
      {this.renderColumn(6, this.props.board[6])}
    </div>);
  }
}

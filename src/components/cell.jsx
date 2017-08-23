import React from 'react';
import './Cell.css';

export default class Cell extends React.Component {

  constructor() {
    super();
    this.state = {
      sign: '0',
    };
  }

  render() {
    let cellStyle;
    if (this.props.name === '0') {
      cellStyle = {
        background: '#fAf'
      };
    } else {
      cellStyle = {
        background: '#f00'
      };
    }
    return (<div className='cell'>
      <div className='circle' style={cellStyle}>
      </div>
    </div>);
  }
}

import React from 'react';
import '../style/Cell.css';

export default class Cell extends React.Component {

  render() {
    let cellStyle;
    switch (this.props.value) {
      case '0':
        cellStyle = { background: '#fAf' };
      break;
      case '1':
        cellStyle = { background: '#E00' };
      break;
      case '2':
        cellStyle = { background: '#00E' };
      break;
      default:
    }
    return (<div className='cell'>
      <div className='circle' style={cellStyle}>
      </div>
    </div>);
  }
}

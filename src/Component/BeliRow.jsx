import React from 'react';

export default class BeliRow extends React.Component {
  render() {
    let nama = this.props.nama;
    let harga = this.props.harga;
    let jumlah = this.props.jumlah;
    let total = harga * jumlah;

    return (
      <tr className='row px-2 py-1 g-1'>
      <td className='col-md-3' style={{ border: '1px solid black' }}>{nama}</td>
      <td className='col-md-3' style={{ border: '1px solid black' }}>{harga}</td>
      <td className='col-md-3' style={{ border: '1px solid black' }}>{jumlah}</td>
      <td className='col-md-3' style={{ border: '1px solid black' }}>{total}</td>
      </tr>
    )
  }
}
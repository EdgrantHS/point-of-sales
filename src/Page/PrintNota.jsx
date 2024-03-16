import React from 'react'; 
import Box from "../Component/box";

export default class InventoryCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data })
        console.log(data)
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex pt-5 justify-content-center">
          <div className="col-xl-8">
            <h1 className='py-3'>Print Nota</h1>
            <Box customClass="row my-1" header="Items" items={[
              <div className='row'>
                <div className='col-md-6 text-start'>
                  <p className='px-3'>
                    Nama Toko: <br />
                    Alamat: <br />
                    No. Telp: <br /> 
                  </p>
                </div>
                <div className='col-md-6 text-end'>
                  <p className='px-3'>
                    Tanggal: <br />
                    No. Nota: <br />
                  </p>
                </div>  
              </div>,
              // table
              <div className="d-flex justify-content-center align-items-center">
                <table className="table rounded-table">
                  <thead>
                    <tr className='table-primary'>
                      <th scope="col">Nama</th>
                      <th scope="col">Kategori</th>
                      <th scope="col">Status</th>
                      <th scope="col">Harga</th>
                      <th scope="col">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((item, index) => (
                      <tr key={item.name + index}>
                        <td>{item.Nama}</td>
                        <td>{item.Kategori}</td>
                        <td>{item.Status}</td>
                        <td>{item.Harga}</td>
                        <td>{item.Jumlah}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>,
              <div className="row pt-1 px-5 g-3">
                <div className="col-md-6">
                  <button className="btn btn-primary btn-lg btn-block">Cetak</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-secondary btn-lg btn-block">Simpan</button>
                </div>
              </div>
            ]} />
          </div>
        </div>
      </div>
    )
  }
}
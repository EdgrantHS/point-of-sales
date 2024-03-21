import React from "react";
import Box from "../Component/box";
import BeliRow from "../Component/BeliRow";

export default class PenambahanBarang extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="row g-5 py-5">
          <div className="col-md-8">
            <Box header="Tambah Barang" items={[
              <BeliRow nama="Baju" harga="100000" jumlah="2"/>,
              <BeliRow nama="Baju" harga="100000" jumlah="2"/>,
              <BeliRow nama="Baju" harga="100000" jumlah="2"/>,
              <BeliRow nama="Baju" harga="100000" jumlah="2"/>,
            ]}></Box> 
          </div>

          <div className="col-md-4">
            <Box header="Rekap" items={[
              <p><b>Value Total:</b> Rp.800.000</p>,
              <p><b>Jumlah Penambahan:</b> 10</p>,
              <p className='pt-5'><b>Harga Akhir:</b> Rp.8.000.000</p>,
              <hr />,
              <div className="row gx-3">
                <div className="col-md-6">
                  <button className="btn btn-secondary btn-lg">Back</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary btn-block btn-lg">Add</button>
                </div>
              </div>

            ]}></Box> 
            
          </div>
        </div>
      </div>
    )
  }
}
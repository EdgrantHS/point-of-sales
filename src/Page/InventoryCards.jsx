import React from "react";
import Box from "../Component/box";

export default class InventoryCards extends React.Component {
  render() {
    return(
      <div className="main">
        <div className="container-xl">
          <div className="d-flex pt-5 justify-content-between">
            <h1 className='h1'>Inventory Dashboard</h1>
            <input className="form-control mr-sm-2 my-4 me-5" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-lg btn-secondary my-4 py-3" onClick={this.handleClick}>Refresh</button>
          </div>
          <div className="row gx-5 pt-5">
            <div className="col-xl-2 position-relative ">
              <Box customClass="row m-2" header="New Items" items={[
                <button className='btn btn-primary shadow btn-md px-2'>Add New Items</button>,
              ]} />
              <br />
              <Box customClass="row m-2" header="Categories" items={[
                <button className='btn btn-info shadow btn-md px-2'>One</button>,
                <button className='btn btn-secondary btn-md px-2'>Two</button>,
                <button className='btn btn-secondary btn-md px-2'>Three</button>,
                <button className='btn btn-primary btn-md px-2 mt-5'>Search</button>
              ]} />
            </div>
            <div className="col-xl-10">
              <Box customClass="row my-2" header="Items" items={[
                // table
                <div className="d-flex">
                  <div className="row justify-content-center">
                    <div className="card col-md-3 m-3 card-size">
                      <img className="card-img-top" src="https://via.placeholder.com/50" alt="Card cap" />
                      <div className="card-body">
                        <h5 className="card-title">Nike Sportswear Futura Luxe</h5>
                        <div className="d-flex justify-content-between">
                          <p className="card-text">Bag</p>
                          <p className="card-text">$130.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="card col-md-3 m-3 card-size">
                      <img className="card-img-top" src="https://via.placeholder.com/50" alt="Card cap" />
                      <div className="card-body">
                        <h5 className="card-title">Nike Sportswear Futura Luxe</h5>
                        <div className="d-flex justify-content-between">
                          <p className="card-text">Bag</p>
                          <p className="card-text">$130.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="card col-md-3 m-3 card-size">
                      <img className="card-img-top" src="https://via.placeholder.com/50" alt="Card cap" />
                      <div className="card-body">
                        <h5 className="card-title">Nike Sportswear Futura Luxe</h5>
                        <div className="d-flex justify-content-between">
                          <p className="card-text">Bag</p>
                          <p className="card-text">$130.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="card col-md-3 m-3 card-size">
                      <img className="card-img-top" src="https://via.placeholder.com/50" alt="Card cap" />
                      <div className="card-body">
                        <h5 className="card-title">Nike Sportswear Futura Luxe</h5>
                        <div className="d-flex justify-content-between">
                          <p className="card-text">Bag</p>
                          <p className="card-text">$130.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="card col-md-3 m-3 card-size">
                      <img className="card-img-top" src="https://via.placeholder.com/50" alt="Card cap" />
                      <div className="card-body">
                        <h5 className="card-title">Nike Sportswear Futura Luxe</h5>
                        <div className="d-flex justify-content-between">
                          <p className="card-text">Bag</p>
                          <p className="card-text">$130.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="card col-md-3 m-3 card-size">
                      <img className="card-img-top" src="https://via.placeholder.com/50" alt="Card cap" />
                      <div className="card-body">
                        <h5 className="card-title">Nike Sportswear Futura Luxe</h5>
                        <div className="d-flex justify-content-between">
                          <p className="card-text">Bag</p>
                          <p className="card-text">$130.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="card col-md-3 m-3 card-size">
                      <img className="card-img-top" src="https://via.placeholder.com/50" alt="Card cap" />
                      <div className="card-body">
                        <h5 className="card-title">Nike Sportswear Futura Luxe</h5>
                        <div className="d-flex justify-content-between">
                          <p className="card-text">Bag</p>
                          <p className="card-text">$130.00</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>,
                // pagination
                <div className="d-flex justify-content-center align-items-center pt-4">
                  <nav aria-label="Page navigation">
                    <ul class="pagination">
                      <li class="page-item">
                        <button class="page-link" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </button>
                      </li>
                      
                      <li class="page-item"><button class="page-link">1</button></li>
                      <li class="page-item"><button class="page-link">2</button></li>
                      <li class="page-item"><button class="page-link">3</button></li>
                      <li class="page-item">
                        <button class="page-link" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              ]} />
            </div>
          </div>
        </div>
      </div>
    )  
  }
}
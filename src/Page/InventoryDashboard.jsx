import React from 'react';
import Box from '../Component/box';
import InputPair from '../Component/InputPair';
import MyVerticallyCenteredModal from '../Component/Modal';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdated: "",
      searchName: "",
      searchCategory: "",
      searchStatus: "",
      addName: "",
      addCategory: "",
      addStatus: "",
      addPrice: "",
      addQuantity: "",
      data: [],
      currentPage: 1,
      maxPage: 1,
      modalShow: false,
      selectedItem: null, // Add this line
    }

    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.paginationLogic = this.paginationLogic.bind(this);
    this.handleGetAll = this.handleGetAll.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }


  componentDidMount() {
    this.setLastUpdated(this.props.newTime);
    this.handleRefresh();
  }

  async handleGetAll() {
    await axios.get('http://heeveapi.mooo.com/api/item/all')
      .then(response => {
        this.setState({ data: response.data.data })
        // console.log(response.data.data)
      })
      .catch(error => console.error('Error:', error));
  }

  handleEditClick = (data) => () => {
    this.setState({
      selectedItem: data,
      modalShow: true
    });
  }


  setLastUpdated(value) {
    this.setState({
      lastUpdated: value
    })
  }

  handleRefresh() {
    this.handlePagination(0)

    const now = new Date()
    this.setLastUpdated(now.toLocaleString())
  }

  async handlePagination(page){
    let size = 10
    await axios.get('http://heeveapi.mooo.com/api/item/paged?page=' + page + '&pageSize=' + size) 
      .then(response => {
        this.setState({ data: response.data.data })
        // this.setState({ data: })
      })
      .catch(error => console.error('Error:', error));
  }

  paginationLogic(pageChange){
    const updatedPage = this.state.currentPage + pageChange;
    this.setState({ currentPage: updatedPage });

    //handle over limit
    if(updatedPage < 1){
      this.setState({ currentPage: 1 });
    }
    else if(updatedPage > this.state.maxPage + 1){
      this.setState({ currentPage: this.state.maxPage + 1 });
    }
    else {
      this.handlePagination(updatedPage);
    }
  }

  async handleAdd() {
    // Ensure the state values are correctly parsed as numbers
    const name = String(this.state.addName);
    const price = parseFloat(this.state.addPrice);
    const category = String(this.state.addCategory);
    const stock = parseInt(this.state.addQuantity, 10);

    // Only proceed if price and stock are valid numbers
    if (!isNaN(price) && !isNaN(stock)) {
      const item = { 
        "name": name, 
        "price": price, 
        "category": category, 
        "stock": stock 
      }

      const data = JSON.stringify([item])

      await axios.post('http://heeveapi.mooo.com/api/item/add', data, {
        headers : {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          // console.log(response);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      // console.log({ name, price, category, stock });
    } else {
      console.error('Invalid input: Price and stock must be numbers.');
    }


    // reset input fields
    this.setState({
      addName: "",
      addCategory: "",
      addPrice: "",
      addQuantity: ""
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSearch() {
    // BUTUH API SEARCH
    console.log(this.state.searchName, this.state.searchCategory, this.state.searchStatus);
  }

  render() {
    return (
      <div className="main">
        <div className="container-xl">
          <div className="row pt-5">
            <div className="col-6">
              <h1 className='h1'>Inventory Dashboard</h1>
              <h2 className='lead last-updated' id='last-updated'>{this.state.lastUpdated}</h2>
            </div>
            <div className="col-6">
              <button className="btn btn-lg custom-button float-end py-3" onClick={this.handleRefresh}>Refresh</button>
            </div>
          </div>
          <div className="row gx-5 pt-5">
            <div className="col-xl-3 position-relative">
              <Box customClass="row my-2" header="Search" items={[
                <InputPair id="s1" label="Nama" onChange={this.handleInputChange} value={this.state.searchName} name="searchName" />,
                <InputPair id="s2" label="Kategori" onChange={this.handleInputChange} value={this.state.searchCategory} name="searchCategory" />,
                <InputPair id="s3" label="Status" onChange={this.handleInputChange} value={this.state.searchStatus} name="searchStatus" />,
                  <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary mt-4 col-9" onClick={this.handleSearch}>Search</button>
                </div>
              ]} />

              <div className="row py-3"></div>

              <Box customClass="row my-2" header="Add New Item" items={[
                <InputPair id="a1" label="Nama" onChange={this.handleInputChange} value={this.state.addName} name="addName" />,
                <InputPair id="a2" label="Kategori" onChange={this.handleInputChange} value={this.state.addCategory} name="addCategory" />,
                // <InputPair id="a3" label="Status" onChange={this.handleInputChange} value={this.state.addStatus} name="addStatus" />,
                <InputPair id="a4" label="Harga" onChange={this.handleInputChange} value={this.state.addPrice} name="addPrice" />,
                <InputPair id="a5" label="Jumlah" onChange={this.handleInputChange} value={this.state.addQuantity} name="addQuantity" />,
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary mt-4 col-9" onClick={this.handleAdd}>Add</button>
                </div>
              ]} />

            </div>
            <div className="col-xl-9">
              <Box customClass="row my-2" header="Items" items={[
                // table
                <div className="d-flex justify-content-center align-items-center">
                  <table className="table rounded-table">
                    <thead>
                      <tr className='table-primary'>
                        <th scope="col">Nama</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Jumlah</th>
                        <th scope="col">Setting</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map((data, index) => (
                        <tr key={data.name + index}>
                          <td>{data.name}</td>
                          <td>{data.category}</td>
                          <td>{data.price}</td>
                          <td>{data.stock}</td>
                          <td><b className='text-primary' onClick={this.handleEditClick(data)}>Edit</b></td>
                          <MyVerticallyCenteredModal
                            show={this.state.modalShow}
                            onHide={() => this.setState({ modalShow: false })}
                            item={this.state.selectedItem} // Pass the selectedItem state as props
                          />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>,
                // pagination
                <div className="d-flex justify-content-center align-items-center pt-4">
                  <nav aria-label="Page navigation">
                    <ul class="pagination">
                      <li class="page-item">
                        <button class="page-link" aria-label="Previous" onClick={() => this.paginationLogic(-1)}>
                          <span aria-hidden="true">«</span>
                        </button>
                      </li>
                      
                      {/* TODO: buat pagination angka page */}
                      {/* <li class="page-item"><button class="page-link">1</button></li>
                      <li class="page-item"><button class="page-link">2</button></li>
                      <li class="page-item"><button class="page-link">3</button></li> */}
                      <li class="page-link">{this.state.currentPage}</li>
                      <li class="page-item">
                        <button class="page-link" aria-label="Next" onClick={() => this.paginationLogic(1)}>
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

export default App;
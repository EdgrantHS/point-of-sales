import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputPair from './InputPair';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


export default function MyVerticallyCenteredModal(props) {
  // Extract item from props
  const { item } = props;
  
  // states
  const [name, setName] = useState(item ? item.name : '');
  const [price, setPrice] = useState(item ? item.price : '');
  const [category, setCategory] = useState(item ? item.category : '');
  const [quantity, setQuantity] = useState(item ? item.stock : '');

  async function handleEdit(id) {
    const name = String(name);
    const price = parseFloat(price);
    const category = String(category);
    const stock = parseInt(quantity, 10);

    // Only proceed if price and stock are valid numbers
    if (!isNaN(price) && !isNaN(stock)) {
      const item = {
        "id": id,
        "name": name,
        "price": price,
        "category": category,
        "stock": stock
      }

      const data = JSON.stringify([item])

      await axios.post('http://heeveapi.mooo.com/api/item/update', data, {
        // !Cek api ke yg bener atau gak
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      // console.log({ name, price, category, stock });
    } else {
      console.error('Invalid input: Price and stock must be numbers.');
    }
  }

  useEffect(() => {
    if (item) {
      setName(item.name);
      setPrice(item.price);
      setCategory(item.category);
      setQuantity(item.stock);
    }
  }, [item]); // This effect depends on 'item' and runs whenever 'item' changes

  const handleInputChange = (inputName) => (event) => {
    const { value } = event.target;
    switch (inputName) {
      case 'name':
        setName(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'quantity':
        setQuantity(value);
        break;
      default:
        break;
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {item.id}</p>
        <InputPair label='Name' value={name} onChange={handleInputChange('name')} />
        <InputPair label='Price' value={price} onChange={handleInputChange('price')} />
        <InputPair label='Category' value={category} onChange={handleInputChange('category')} />
        <InputPair label='Stock' value={quantity} onChange={handleInputChange('quantity')} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className='btn-danger'>Delete</Button>
        <Button onClick={() => this.handleInputChange} className='btn-primary'>Edit</Button>
      </Modal.Footer>
    </Modal>
  );
}

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
    const tempname = String(name);
    const tempprice = parseFloat(price);
    const tempcategory = String(category);
    const tempstock = parseInt(quantity, 10);

    console.log("1" + { tempname, tempprice, tempcategory, tempstock });

    // Only proceed if price and stock are valid numbers
    if (!isNaN(tempprice) && !isNaN(tempstock)) {
      const item = {
        "name": tempname,
        "price": tempprice,
        "category": tempcategory,
        "stock": tempstock
      }

      console.log("2" + { tempname, tempprice, tempcategory, tempstock });

      const data = JSON.stringify(item)

      console.log("3" + data);

      await axios.put('http://heeveapi.mooo.com/api/item/update/' + id, data, {
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

  async function handleDelete(id) {
    await axios.delete('http://heeveapi.mooo.com/api/item/delete/' + id)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
        <p>ID: {item?.id}</p>
        <InputPair label='Name' value={name} onChange={handleInputChange('name')} />
        <InputPair label='Price' value={price} onChange={handleInputChange('price')} />
        <InputPair label='Category' value={category} onChange={handleInputChange('category')} />
        <InputPair label='Stock' value={quantity} onChange={handleInputChange('quantity')} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleDelete(item.id)} className='btn-danger'>Delete</Button>
        <Button onClick={() => handleEdit(item.id)} className='btn-primary'>Edit</Button>
      </Modal.Footer>
    </Modal>
  );
}

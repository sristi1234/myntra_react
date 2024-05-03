import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {remove} from '../state/store/cartSlice'

function Cart() {

  const products = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const removeFromCart = (id) =>{
     dispatch(remove(id))

     }

  
  const cards = products.map((product)  => (
       
    
    <div className='col-md-12' style={{marginBottom: '18px'}}>
 <Card key={product.id} style={{ width: '18rem' }}>
 <Card.Img variant="top" src={product.images} />
 <Card.Body>
   <Card.Title>{product.title}</Card.Title>
   <Card.Text>
     INR:{product.price}
      
     
   </Card.Text>
   
 </Card.Body>
 <Card.Footer style={{background: 'white'}}>
 <Button variant="primary" >buy</Button>
 <Button variant="danger" onClick={() => removeFromCart(product.id)} >remove</Button>
 </Card.Footer>
</Card>
</div>

) ) 

  return (
    <div>
       {cards}
    </div>
  )
}

export default Cart

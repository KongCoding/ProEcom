import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4' justify>
      <Nav.Item>
        <Nav.Link disabled={!step1} as={Link} to='/login'>
          Sign In
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled={!step2} as={Link} to='/shipping'>
          Sipping
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled={!step3} as={Link} to='/payment'>
          Payment
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled={!step4} as={Link} to='/placeorder'>
          Place Order
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;

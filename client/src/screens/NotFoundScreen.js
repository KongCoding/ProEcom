import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const NotFoundScreen = () => {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        textAlign: 'center',
      }}
    >
      <div>
        <h1>404</h1>
        <h2>UH OH! You're lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <Button as={Link} to='/' className='btn btn-block my-3'>
          HOME
        </Button>
      </div>
    </Container>
  );
};

export default NotFoundScreen;

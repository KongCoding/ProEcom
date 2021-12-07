import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, InputGroup } from 'react-bootstrap';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <InputGroup>
        <Form.Control
          type='text'
          name='q'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products...'
          className='me-sm-2 ms-sm-5'
        ></Form.Control>
        <Button type='submit' variant='outline-success' className='p-2'>
          <i className='fas fa-search'></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;

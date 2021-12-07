import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import TimeoutMessage from '../components/TimeoutMessage';
import { SyncLoader } from 'react-spinners';
import { forgotPassword } from '../actions/userActions';
import Message from '../components/Message';
import { USER_FORGOT_PASSWORD_RESET } from '../constants/userConstants';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(
    (state) => state.userForgotPassword
  );

  useEffect(() => {
    return () => {
      dispatch({ type: USER_FORGOT_PASSWORD_RESET });
    };
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <FormContainer>
      <h1>Forgot Password</h1>
      {error && <TimeoutMessage variant='danger'>{error}</TimeoutMessage>}
      {loading && (
        <div className='loader'>
          <SyncLoader />
        </div>
      )}
      {success && <Message variant='success'>Email Successfully Sent</Message>}
      <p>
        Please enter your email address below and we will send you password
        reset instructions.
      </p>
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Send Email
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ForgotPasswordScreen;

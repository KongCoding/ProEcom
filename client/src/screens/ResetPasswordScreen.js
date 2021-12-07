import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import TimeoutMessage from '../components/TimeoutMessage';
import { USER_RESET_PASSWORD_RESET } from '../constants/userConstants';
import { MoonLoader } from 'react-spinners';
import Message from '../components/Message';
import { resetPassword } from '../actions/userActions';

const RegisterScreen = () => {
  const { resetToken } = useParams();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const userResetPassword = useSelector((state) => state.userResetPassword);
  const { loading, error, success } = userResetPassword;

  useEffect(() => {
    return () => {
      dispatch({ type: USER_RESET_PASSWORD_RESET });
    };
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(resetPassword(resetToken, password));
    }
  };

  return (
    <FormContainer>
      <h1>Reset Password</h1>
      {message && <TimeoutMessage variant='danger'>{message}</TimeoutMessage>}
      {error && <TimeoutMessage variant='danger'>{error}</TimeoutMessage>}
      {loading && (
        <div className='loader'>
          <MoonLoader />
        </div>
      )}
      {success && (
        <Message variant='success'>
          Password Successfully Changed
          <span className='ms-3'>
            <Link to='/login'>Login Now</Link>
          </span>
        </Message>
      )}
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter new password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='confirmPassword'>
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm new password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Reset Password
        </Button>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;

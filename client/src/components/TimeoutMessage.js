import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const TimeOutMessage = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <>{show && <Alert variant={variant}>{children}</Alert>}</>;
};

TimeOutMessage.defaultProps = {
  variant: 'info',
};

export default TimeOutMessage;

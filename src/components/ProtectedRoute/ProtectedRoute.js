import React, {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';

function ProtectedRoute({element: Component, ...props}) {
  const tokenCheck = props.tokenCheck;
  const [path, setPath] = useState('');

  useEffect(() => {
    if (props.loggedIn) {
      setPath('/movies');
    } else {
      setPath('/');
    }
    tokenCheck();
  }, [props.loggedIn, tokenCheck]);

  return props.loggedIn ? <Component {...props} /> : <Navigate to={path} />;
}

export default ProtectedRoute;

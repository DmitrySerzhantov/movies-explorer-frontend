import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';

function ProtectedRoute({element: Component, ...props}) {
  const tokenCheck = props.tokenCheck;
  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  return props.loggedIn ? <Component {...props} /> : <Navigate to={'/'} />;
}

export default ProtectedRoute;

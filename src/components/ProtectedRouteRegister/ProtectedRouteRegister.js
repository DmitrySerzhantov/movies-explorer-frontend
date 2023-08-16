import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';

function ProtectedRouteRegister({element: Component, ...props}) {
  const tokenCheck = props.tokenCheck;
  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);
  return props.loggedIn === null ? (
    <Component {...props} />
  ) : (
    <Navigate to={'/movies'} />
  );
}

export default ProtectedRouteRegister;

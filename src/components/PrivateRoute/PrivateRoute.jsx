import React from 'react';
import { Route, redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

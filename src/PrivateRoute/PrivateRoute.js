import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { Route } from 'react-router';
import useAuth from '../Hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    console.log(isLoading)
    if (isLoading) {
        return <div className="d-flex align-items-center justify-content-center">
            <Spinner animation="border" variant="primary" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={
                ({ location }) => user?.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                >
                </Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;
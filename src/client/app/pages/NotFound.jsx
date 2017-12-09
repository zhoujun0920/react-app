import React from 'react';

const NotFound = ({location}) => {
    return (
        <h1>404 Aw, shucks! {location.pathname} cannot be found</h1>
    );
};

export default NotFound;

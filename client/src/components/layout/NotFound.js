import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 class="x-large text-primary">
        <i class="fas fa-exclamation-triangle" /> Page Not Found
      </h1>
      <p class="larg">Sorry, this page does not exit</p>
    </Fragment>
  );
};

export default NotFound;

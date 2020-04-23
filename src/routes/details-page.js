import React from 'react';
import { Text } from 'grommet';
import { Link } from 'react-router-dom';

const DetailsPage = () => {
  return (
    <>
      <Text>You are on details page.</Text>
      <Link to='/'>Home Page</Link>
    </>
  );
};

export default DetailsPage;

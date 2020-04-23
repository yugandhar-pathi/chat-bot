import React from 'react';
import { Text } from 'grommet';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Text>You are on home page</Text>
      <Link to='/details'>Details Page</Link>
    </>
  );
};

export default HomePage;

import React from 'react';
import { Text } from 'grommet';

const ListItem = ({ children }) => {
  return (
    <li>
      <Text>{children}</Text>
    </li>
  );
};

export default ListItem;

import React from 'react';
import { Box, Text } from 'grommet';

const PageHeader = () => {
  return (
    <>
      <Box
        direction='row'
        as='header'
        justify='center'
        align='center'
        elevation='small'
        pad='small'
      >
        <Text>ChatBot On Hackdays</Text>
      </Box>
    </>
  );
};

export default PageHeader;

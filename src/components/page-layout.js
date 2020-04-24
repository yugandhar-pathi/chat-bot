import React, { useState } from 'react';
import { Grommet, Box } from 'grommet';

import { grommet } from 'grommet/themes';

import ChatbotContainer from './chatbot-container';
import ChatButton from './chat-button';

import PageHeader from './page-header';

const PageLayout = ({ children }) => {
  const [startChat, setStartChat] = useState(false);
  return (
    <Grommet theme={grommet}>
      <Box width='100%'>
        <PageHeader />
        {children}
        {!startChat && <ChatButton startChat={setStartChat} />}
        <ChatbotContainer hideChat={startChat} controlChat={setStartChat} />
      </Box>
    </Grommet>
  );
};

export default PageLayout;

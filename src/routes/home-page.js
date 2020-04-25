import React from 'react';
import { Text, Markdown, Box } from 'grommet';
import { Link } from 'react-router-dom';

const markdownContent = `

## Goal - Prototype chat bot experience

- Have Chat-button on bottom right corner of the App which can launch chat window.
- Chat button should exist in the same position when user navigates between pages.
- Chat button should launch chat window which will have capability to connect with salesforce liveagent.
- Chat Window stays on the app when user switches between pages.
- Chat window should be draggable and allow user to view what is behind the window.

`;

const HomePage = () => {
  return (
    <>
      <Text size='xlarge' weight='bold'>
        Welcome!
      </Text>
      <Box margin={{ top: 'small' }}>
        <Link to='/details'>How do I test this?</Link>
      </Box>

      <Markdown>{markdownContent}</Markdown>
    </>
  );
};

export default HomePage;

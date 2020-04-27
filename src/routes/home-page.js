import React from 'react';
import { Text, Markdown, Box, Image } from 'grommet';
import { Link } from 'react-router-dom';
import ChatBotError from '../images/chatbot-error.png';
import ChatBotSummary from '../images/chatbot-summary.png';

import { ListItem } from '../components';

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

      <Text size='xlarge' weight='bold' margin={{ top: 'medium' }}>
        I would like to just see Chat UI:
      </Text>
      <ul>
        <ListItem>Here is how it looks ....</ListItem>
      </ul>
      <Box height='medium' width='xlarge'>
        <Image fill src={ChatBotSummary} />
      </Box>

      <Box margin={{ top: 'small' }}>
        <Text size='xlarge' weight='bold'>
          What if I get Error in the ChatBot?
        </Text>
        <ul>
          <ListItem>
            We are in prototype phase you may see some errors in chatbot.
          </ListItem>
          <ListItem>How do I bring chatbot back to initial state?</ListItem>
          <ListItem>
            Click <a href={process.env.PUBLIC_URL}>Refresh</a>
          </ListItem>
        </ul>
        <Box height='medium' width='medium'>
          <Image fill src={ChatBotError} />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;

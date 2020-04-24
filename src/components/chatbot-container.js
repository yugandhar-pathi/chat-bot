import React, { useEffect } from 'react';
import { Box, Text } from 'grommet';
import { Hpe, Pan, FormDown } from 'grommet-icons';
import PropTypes from 'prop-types';

import { dragElement } from '../utils';

const chatURL =
  'https://lightning-nimble.cs17.force.com/apex/Prechat_Form?endpoint=https%3A%2F%2F2616.la1-c1cs-ord.salesforceliveagent.com%2Fcontent%2Fs%2Fchat%3Flanguage%3Den_US%26org_id%3D00Dg0000006UNYM%26deployment_id%3D572g00000008Or5%26sid%3D4c0d632e-fc74-4cb1-86d0-20986feb6987%23deployment_id%3D572g00000008Or5%26org_id%3D00Dg0000006UNYM%26button_id%3D573g00000008PXw%26session_id%3D4c0d632e-fc74-4cb1-86d0-20986feb6987';

const ChatbotContainer = ({ hideChat, controlChat }) => {
  useEffect(() => {
    dragElement(document.getElementById('chat-box'));
    return () => {
      // @Todo
      // need to unregister drag event
    };
  }, []);

  useEffect(() => {
    // when hiding the chat window remove top and left
    // If user drags the chat window to new position and hides
    // On re-launch go back to default position - [bottom & right - 5px]
    if (!hideChat) {
      document.getElementById('chat-box').style.top = null;
      document.getElementById('chat-box').style.left = null;
      document.getElementById('chat-box').style.bottom = '5px';
      document.getElementById('chat-box').style.right = '5px';
    }
  }, [hideChat]);

  return (
    <Box
      id='chat-box'
      style={{
        position: 'absolute',
        bottom: '5px',
        right: '5px',
        display: hideChat ? null : 'none',
        backgroundColor: 'white',
      }}
    >
      <Box width='300px' height='480px' border>
        <Box
          direction='row'
          align='center'
          justify='between'
          as='header'
          elevation='small'
          pad='small'
        >
          <div id='chat-box-drag'>
            <Pan size='medium' />
          </div>
          <Box direction='row' alignContent='center' gap='small'>
            <Hpe size='medium' color='#00c781' />
            <Text>HPE Infosight Bot</Text>
          </Box>
          <FormDown
            size='medium'
            onClick={() => {
              controlChat(false);
            }}
          />
        </Box>

        <Box flex overflow='auto' pad='xsmall'>
          <iframe
            title='chatFrame'
            src={chatURL}
            width='100%'
            height='100%'
            style={{ border: 'none' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

ChatbotContainer.propTypes = {
  hideChat: PropTypes.bool.isRequired,
  controlChat: PropTypes.func.isRequired,
};

export default ChatbotContainer;

import React, { useEffect } from 'react';
// import { Box, Text, TextInput } from 'grommet';
// import { Hpe, Pan, FormDown, Return } from 'grommet-icons';
import { Box, Text } from 'grommet';
import { Hpe, Pan, FormDown } from 'grommet-icons';
import PropTypes from 'prop-types';

import { dragElement } from '../utils';

const chatURL =
  'https://lightning-nimble.cs17.force.com/apex/Prechat_Form?endpoint=https%3A%2F%2F2616.la1-c1cs-ord.salesforceliveagent.com%2Fcontent%2Fs%2Fchat%3Flanguage%3Den_US%26org_id%3D00Dg0000006UNYM%26deployment_id%3D572g00000008Or5%26sid%3D4c0d632e-fc74-4cb1-86d0-20986feb6987%23deployment_id%3D572g00000008Or5%26org_id%3D00Dg0000006UNYM%26button_id%3D573g00000008PXw%26session_id%3D4c0d632e-fc74-4cb1-86d0-20986feb6987';

const ChatbotContainer = ({ hideChat }) => {
  useEffect(() => {
    dragElement(document.getElementById('chat-box'));
  }, []);

  return (
    <Box
      id='chat-box'
      style={{
        position: 'absolute',
        bottom: '5px',
        right: '5px',
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
              hideChat(false);
            }}
          />
        </Box>

        <Box flex overflow='auto' pad='xsmall'>
          {/* <Text> Chat window</Text> */}
          <iframe title='chatFrame' src={chatURL} width='100%' height='100%' />
        </Box>
        {/* <Box
          as='footer'
          border={{ side: 'top' }}
          pad='small'
          justify='between'
          direction='row'
          align='center'
        >
          <TextInput placeholder='Send a message' />
          <Return size='medium' />
        </Box> */}
      </Box>
    </Box>
  );
};

ChatbotContainer.propTypes = {
  hideChat: PropTypes.func.isRequired,
};

export default ChatbotContainer;

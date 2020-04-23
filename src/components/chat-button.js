import React from 'react';
import { Layer, Button } from 'grommet';
import { Chat } from 'grommet-icons';

const ChatButton = ({ startChat }) => {
  return (
    <Layer position='bottom-right' modal={false} margin='xsmall'>
      <Button
        icon={<Chat />}
        label='Chat Now'
        onClick={() => startChat(true)}
      />
    </Layer>
  );
};

export default ChatButton;

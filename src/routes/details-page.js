import React from 'react';
import { Text } from 'grommet';
import { Link } from 'react-router-dom';
import { Pan } from 'grommet-icons';

const ListItem = ({ children }) => {
  return (
    <li>
      <Text>{children}</Text>
    </li>
  );
};

const DetailsPage = () => {
  return (
    <>
      <Text size='xlarge' weight='bold'>
        Steps:
      </Text>
      <ul>
        <ListItem>Click on Chat Now button on bottom right.</ListItem>
        <ListItem>It will bring up a chat window.</ListItem>
        <ListItem>Displays an Button to Chat with LiveAgent.</ListItem>
        <ListItem>
          Click on It ?? No!! We are not in production yet!! we don't have
          customer care waiting, to chat with you!!.
        </ListItem>
        <ListItem>
          Then how do I chat ? You need to request salesforce developer to
          accept your request.
        </ListItem>
        <ListItem>
          How do I request? Ping Abdul (abdul.khader@hpe.com) on skype. Abdul
          works from San Jose, so you need to ping him in PST timings (not on wk
          ends, ok !!).
        </ListItem>
        <ListItem>
          Once Abdul says, YES!! Go ahead and click on .. Chat with LiveAgent.
        </ListItem>
      </ul>
      <Text size='xlarge' weight='bold'>
        I didn't Read your steps, my chatbot shows some error page:
      </Text>
      <ul>
        <ListItem>
          We are in prototype phase you may see some errors in chatbot.
        </ListItem>
        <ListItem>How do I bring chatbot back to initial state?.</ListItem>
        <ListItem>
          Just refresh your page!! I will re-initialize your chatbot.
        </ListItem>
      </ul>
      <Link to='/'>Back to Home Page</Link>

      <Text size='xlarge' weight='bold' margin={{ top: 'medium' }}>
        What else can I test?
      </Text>
      <ul>
        <ListItem>You can test a lot!!.</ListItem>
        <ListItem>You can test dragging feature of Chat window!!</ListItem>
        <ListItem>
          Click on {<Pan size='medium' />}icon and move the chat window around.
        </ListItem>
        <ListItem>
          Keep the chatbot open and switch between HomePage and DetailsPage.
          Your chat window should be as it is.
        </ListItem>
      </ul>
    </>
  );
};

export default DetailsPage;

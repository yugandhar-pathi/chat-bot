import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './routes/home-page';
import DetailsPage from './routes/details-page';

import { PageLayout } from './components';

function App() {
  return (
    <PageLayout>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/' children={<HomePage />} />
        <Route exact path='/details' children={<DetailsPage />} />
      </Router>
    </PageLayout>
  );
}

export default App;

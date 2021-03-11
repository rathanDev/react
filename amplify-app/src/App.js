import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignout, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignout />
        <h2>Amplify App Content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);

import React from 'react';
import './App.css';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>Amplify App Content</h2>
      </header>
    </div>
  );

  const listPublicBucket = async () => {
    try {
      const files = await Storage.list('');
      console.log('files', files);
    } catch (err) {
      console.error('Err accessing public bucket', err);
    }
  }

}

export default withAuthenticator(App);

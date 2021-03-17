import React from 'react';
import './App.css';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

const App = () => {

  const listPublicBucket = async () => {
    console.log('list bucket');
    try {
      const files = await Storage.list('', { 'level': 'private'});
      console.log('files', files);

      const file = await Storage.get('2.png', { 'level': 'private'});
      console.log('file png', file);


    } catch (err) {
      console.error('Err accessing public bucket', err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>Amplify App Content</h2>
        <button onClick={listPublicBucket}>List</button>
      </header>
    </div>
  );

}

export default withAuthenticator(App);

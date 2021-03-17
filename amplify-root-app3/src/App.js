import React, { Component } from 'react'
import './App.css';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Storage } from 'aws-amplify';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

class App extends Component {

  state = { fileUrl: '', file: '', filename: '' };

  handleChange = e => {
    const file = e.target.files[0];
    this.setState({
      fileUrl: URL.createObjectURL(file),
      file,
      filename: file.name
    })
  }

  saveFile = () => {
    Storage.put(this.state.filename, this.state.file)
      .then(() => {
        console.log('Successfully saved file')
        this.setState({ fileUrl: '', file: '', filename: '' })
      })
      .catch(err => {
        console.log('Err uploading file')
      })
  }

  render() {
    return (
      <div className="App" >
        Amplify File App with React
        <hr />
        <input type='file' onChange={this.handleChange} />
        <img src={this.state.fileUrl} />
        <br />
        <button onClick={this.saveFile}>Save File</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount')
    Storage.get('work.jpg')
      .then(data => {
        this.setState({
          fileUrl: data
        })
      }).catch(err => { console.err('Err', err) })
  }


}

export default withAuthenticator(App, { includeGreetings: true });

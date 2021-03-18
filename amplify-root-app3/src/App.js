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
    console.log('SaveFile')
    Storage.put(this.state.filename, this.state.file, {
      level: 'private',
      contentType: 'image/jpeg'
    }).then(() => {
      console.log('Successfully saved file')
      this.setState({ fileUrl: '', file: '', filename: '' })
    }).catch(err => {
      console.log('Err uploading file')
    })
  }

  render() {
    return (
      <div className="App" >
        Amplify File App with React
        <hr />

        <br />
        <div>
          <AmplifySignOut />
        </div>

        <br />

        <input type='file' onChange={this.handleChange} />
        <br />
        <button onClick={this.saveFile}>Save File</button>
        <br />
        <br />
        <h3>Current Image</h3>
        <img src={this.state.fileUrl} />
      </div>
    );
  }

  // async 
  componentDidMount() {
    console.log('componentDidMount')
    Storage.get('fitness.png', { level: 'private', expires: 300 })
      .then(data => {
        console.log('FileUrl', data)
        this.setState({
          fileUrl: data
        })
      }).catch(err => { console.err('Err', err) })

    // const downloadUrl = await Storage.get('fitness.png', { level: 'private', expires: 300 });
    // window.location.href = downloadUrl
  }

}

export default withAuthenticator(App, { includeGreetings: true });

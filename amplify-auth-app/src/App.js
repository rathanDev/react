import React, { useState, useEffect } from 'react'
import './App.css';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Storage } from 'aws-amplify';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const App = () => {

  const [fileName, setFileName] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const [file, setFile] = useState('')

  useEffect(() => {
    console.log('Inside useEffect similar to componentDidMount')

    Storage.list('', { level: 'private' })
      .then(data => {
        console.log('list private ', data)
      }).catch(err => { console.err('Err at list', err) })

    Storage.get('fitness.png', { level: 'private', expires: 300 })
      .then(data => {
        console.log('FileUrl', data)
        this.setState({
          fileUrl: data
        })
      }).catch(err => { console.err('Err', err) })

    // async
    // const downloadUrl = await Storage.get('fitness.png', { level: 'private', expires: 300 });
    // window.location.href = downloadUrl

  })

  handleChange = e => {
    const file = e.target.files[0];
    setFile(file)
    setFileName(file.name)
    setFileUrl(URL.createObjectURL(file))
  }

  saveFile = () => {
    console.log('SaveFile')
    Storage.put(this.state.filename, this.state.file, {
      level: 'private',
      contentType: 'image/jpeg'
    }).then(() => {
      console.log('Successfully saved file')
      setFile('')
      setFileName('')
      setFileUrl('')
    }).catch(err => {
      console.log('Err uploading file')
    })
  }

  return (
    <div className="App" >
      Amplify File App with React
      <hr />

      <br />
      <div>
        <AmplifySignOut />
      </div>

      <br />

      <input type='file' onChange={handleChange} />
      <br />
      <button onClick={saveFile}>Save File</button>
      <br />
      <br />
      <h3>Current Image</h3>
      <img src={this.state.fileUrl} />
    </div>
  );


}

export default withAuthenticator(App, { includeGreetings: true });

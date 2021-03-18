import React, { useState, useEffect } from 'react'

import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Storage } from 'aws-amplify';
import {authResBucketConfig, panaDataBucketConfig} from '../aws-exports';
Amplify.configure(panaDataBucketConfig);

const PanaDashboard = () => {

    const [fileName, setFileName] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [file, setFile] = useState('')

    useEffect(() => {
        console.log('Inside useEffect similar to componentDidMount')

        Storage.list('', { level: 'private' })
            .then(data => {
                console.log('PanaDashboard list private ', data)
            }).catch(err => { console.error('Err at list', err) })

        Storage.get('menAtWork.jpg', { level: 'private', expires: 300 })
            .then(data => {
                console.log('PanaDashboard FileUrl', data)
                if (data)
                    setFileUrl(data)
            }).catch(err => { console.error('Err', err) })

        // async
        // const downloadUrl = await Storage.get('fitness.png', { level: 'private', expires: 300 });
        // window.location.href = downloadUrl

    })

    const handleChange = (e) => {
        const file = e.target.files[0];
        setFile(file)
        setFileName(file.name)
        setFileUrl(URL.createObjectURL(file))
    }

    const saveFile = () => {
        console.log('SaveFile ', fileName, file)
        Storage.put(fileName, file, {
            level: 'private',
            contentType: 'image/jpeg'
        }).then(() => {
            console.log('PanaDashboard Successfully saved file')
            setFile('')
            setFileName('')
            setFileUrl('')
        }).catch(err => {
            console.error('PanaDashboard Err uploading file')
        })
    }

    return (
        <div className="App">
            Amplify Auth App Pana Dashboard
            <hr />
            <input type='file' onChange={(e) => handleChange(e)} />
            <br />
            <button onClick={saveFile}>Save File</button>
            <br />
            <h3>File</h3>
            <img src={fileUrl} />
        </div>
    )

}

export default withAuthenticator(PanaDashboard);
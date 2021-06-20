import React, { useState, useEffect } from 'react'

import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Storage } from 'aws-amplify';
import { authResBucketConfig, panaDataBucketConfig, panaConfig } from '../aws-exports';

Amplify.configure(panaConfig);

Storage.configure({
    customPrefix: {
        public: 'daq/',
        protected: 'reactProtected/',
        private: 'reactPrivate/'
    }
})

const PanaDashboard = () => {

    const [fileName, setFileName] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [file, setFile] = useState('')

    useEffect(() => {
        console.log('Inside useEffect similar to componentDidMount')

        Storage.list('')
            .then(data => {
                console.log('Listed objects size:', data.length)
                //console.log('PanaDashboard panalytics-data ', data)
                data.length = 5;
                data.map((e, index) => { console.log(index, " --> ", e) })
            }).catch(err => { console.error('Err at list', err) })

        Storage.get('react3.png', { level: '', expires: 10 })
            .then(data => {
                console.log('PanaDashboard FileUrl -> ', data)
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
            level: '',
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
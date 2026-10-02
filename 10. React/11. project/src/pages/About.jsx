import axios from 'axios';
import React from 'react'

const About = () => {
    const [file, setFile] = React.useState({})
    const [username, setUsername] = React.useState('asif')

    const uploadFile = async () => {
        console.log(file);

        const data = new FormData()
        data.append("file", file)
        data.append("username", username)


        axios.post("http://localhost:8000/api/upload", data)
            .then((response) => {
                console.log('File uploaded successfully:', response.data)
            })
            .catch((error) => {
                console.error('Error uploading file:', error)
            })

    }

    return (
        <div>
            <h1>About Us</h1>

            <input type="file" onChange={(e) => setFile(e.target.files[0])} />

            <button className='bg-blue-500 text-white px-4' onClick={uploadFile}>Upload</button>
        </div>
    )
}

export default About
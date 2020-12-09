import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const FileUpload = ({userCreated, type, setFileUploaded}) => {

  const [selectedFile, setSelectedFile] = useState("")

  const handleUpload = (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append('userId', userCreated._id)
    data.append('type', type)
    data.append('userFile', selectedFile);
    console.log({data})
    fetch('http://localhost:3000/fileupload',
    {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then(data => {
      setFileUploaded(prevFileUploaded => ({...prevFileUploaded, [type]: true}))
      console.log({fileUploadedData: data})
    })
    .catch(e => console.error(e.message))
    alert('success')

  }

console.log({userId: userCreated._id})

  return (
    <div style={{display: 'flex', width: 'min-content'}}>
      <form
        style={{ display: "flex", textAlign: 'center' }}
      >
        <div>
          <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          onCklick ={(e) => alert('success')}
      
        />
        </div>
        <div>
          <input type="submit" onClick={handleUpload}/>
        </div>
      </form>
    </div>
  );
};

export default FileUpload;

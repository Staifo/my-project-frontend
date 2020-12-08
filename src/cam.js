import React from 'react';
import Webcam from "react-webcam";
import ReactDOM from 'react-dom';
import {useState, useCallback, useRef} from 'react';
import { VisibilityOff } from '@material-ui/icons';
import Button from "@material-ui/core/Button";

const WebcamStreamCapture = ({ userId, setVideoUploaded }) => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
    const [cam, setCam] = useState()

  
  
    const handleStartCaptureClick = React.useCallback(() => {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);
  
    const handleDataAvailable = React.useCallback(
      ({ data }) => {
        if (data.size > 0) {
          setRecordedChunks((prev) => prev.concat(data));
        }
      },
      [setRecordedChunks]
    );
  
    const handleStopCaptureClick = React.useCallback(() => {
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);
  
    const handleDownload = React.useCallback(() => {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"
        });

        const fd = new FormData();
        fd.append('userId', userId);
        fd.append('userRecordedVideoCV', blob, 'userVideoCV.webm');

        fetch('http://localhost:3000/api/test',
        {
          method: 'post',
          body: fd
        })
        .then(res => res.json())
        .then(data => setVideoUploaded(true))
        .catch(e => console.error(e.message))
      }
    }, [recordedChunks]);
  
    return (
      <form style={{display: 'flex', justifyContent: 'center'}}>
        <Webcam audio={true} ref={webcamRef} name='video'/>
        {capturing ? (
          <Button color = 'primary' onClick={handleStopCaptureClick}>Stop Capture</Button>
        ) : (
          <Button color= 'primary' onClick={handleStartCaptureClick}>Start Capture</Button>
        )}
        {recordedChunks.length > 0 && (
          <Button color = 'primary' onClick={handleDownload}>Upload</Button>
        )}
        
      </form>
    );
  };
  

  ReactDOM.render(<WebcamStreamCapture />, document.getElementById("root"));
 
  export default WebcamStreamCapture
  
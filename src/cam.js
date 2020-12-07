import React from 'react';
import Webcam from "react-webcam";
import ReactDOM from 'react-dom';
import {useState, useCallback, useRef} from 'react';
import { VisibilityOff } from '@material-ui/icons';
import Button from "@material-ui/core/Button";

const WebcamStreamCapture = ({userId}) => {
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
        fd.append('userRecordedVideoCV', blob, 'userVideoCV.webm');
        fd.append('userId', userId);

        fetch('http://localhost:3000/api/test',
        {
          method: 'post',
          body: fd
        });
        // const url = URL.createObjectURL(blob);
        // const a = document.createElement("a");
        // document.body.appendChild(a);
        // a.style = "display: none";
        // a.href = url;
        // a.download = "react-webcam-stream-capture.webm";
        // a.click();
        // window.URL.revokeObjectURL(url);
        // setRecordedChunks([]);
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
  
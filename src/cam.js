import React from "react";
import Webcam from "react-webcam";
import ReactDOM from "react-dom";
import { useState, useCallback, useRef } from "react";
import { VisibilityOff } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

const WebcamStreamCapture = ({ userId, setVideoUploaded }) => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [cancel, setCancel]=useState(null);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
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
        type: "video/webm",
      });

      const fd = new FormData();
      fd.append("userId", userId);
      fd.append("userRecordedVideoCV", blob, "userVideoCV.webm");

      fetch("/api/videoUpload", {
        method: "post",
        body: fd,
      })
        .then((res) => res.json())
        .then((data) => setVideoUploaded(true))
        .catch((e) => console.error(e.message));
    }
  }, [recordedChunks]);

  const handleCancel = (e) => {
setCancel(e.target);
setRecordedChunks([]);
  }

  return (
    <form
    
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: '100%'
      }}
    >
      <div 
     
      style={{width: '100%',}}>
        <ol>
          <li>
            Click on 'Start Capture' to start recording. Recording starts
            immediately
          </li>
          <li>Click on 'Stop Capture' to stop recording</li>
          <li>Click on 'Upload'. Done!</li>
          <li>If you are not happy, just press 'I Don't like...I try it again' before 'Upload' and try again.</li>
        </ol>
      </div>
      <Webcam audio={true} ref={webcamRef} name="video" />
      {capturing ? (
        <Button color="primary" onClick={handleStopCaptureClick}>
          Stop Capture
        </Button>
      ) : (
        <Button color="primary" onClick={handleStartCaptureClick}>
          Start Capture
        </Button>
      )}
      {recordedChunks.length > 0 && (
        <div style={{display: 'flex', flexDirection: 'column'}}><Button color="primary" onClick={handleDownload}>
          Upload
        </Button>
        <Button color="primary" onClick={handleCancel}>I Don't like...I try it again</Button>
        </div>
      )}
    </form>
  );
};

ReactDOM.render(<WebcamStreamCapture />, document.getElementById("root"));

export default WebcamStreamCapture;

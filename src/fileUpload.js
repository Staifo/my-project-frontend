import React from "react";

const FileUpload = () => {

  // const fd = new FormData();
  // fd.append('userId', userId);
  // fd.append('userRecordedVideoCV', blob, 'userVideoCV.webm');

  // fetch('http://localhost:3000/api/test',
  // {
  //   method: 'post',
  //   body: fd
  // });



  return (
    <div style={{display: 'flex'}}>
      <form
        method="POST"
        action="http://localhost:3000/fileupload"
        enctype="multipart/form-data"
        style={{ display: "flex", textAlign: 'center' }}
      >
        <div>

          <input type="file" name="profile_pic" placeholder= ''/>
        </div>
        <div>
          <input type="submit" value="Upload" />
        </div>
      </form>
    </div>
  );
};

export default FileUpload;

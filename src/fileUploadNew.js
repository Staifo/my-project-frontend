import React from "react";

const FileUploadNew = () => {
  return (
    <div style={{display: 'flex'}}>
      <form
        // method="POST"
        // action="http://localhost:3000/fileupload"
        // enctype="multipart/form-data"
        // style={{ display: "flex", textAlign: 'center' }}
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

export default FileUploadNew;

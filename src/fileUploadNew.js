import React from "react";

const FileUploadNew = () => {
  return (
    <div style={{display: 'flex'}}>
      <form
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

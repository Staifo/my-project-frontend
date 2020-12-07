import React from "react";

const CV = () => {
  return (
    <div style={{display: 'flex'}}>
      {/* <form
        method="POST"
        action="http://localhost:3000/fileupload"
        enctype="multipart/form-data"
        style={{ display: "flex", flexDirection: "column", textAlign: 'center' }}
      > */}
        <div>

          <input type="file" name="CV" />
        </div>
        <div>
          <input type="submit" value="Upload" />
        </div>
      
    </div>
  );
};

export default CV;

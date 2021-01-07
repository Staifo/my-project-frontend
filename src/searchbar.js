import React, {useState} from "react";


const Searchbar = ({handleChange, handleOnClick, userInput}) => {
  
  const key = (e) => {
    if (e.key === 'Enter') {
      return handleOnClick();
    }
  }

 

  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        marginRight: "2%",
        width: "100%",
        height: "36px",
        
      }}
    >
      <input type="search" placeholder="Search" style={{ width: "60%" }} onChange={handleChange} onKeyDown={key} value={userInput}/>
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
};

export default Searchbar;

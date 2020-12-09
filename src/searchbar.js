import React from "react";

const Searchbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginRight: "2%",
        width: "100%",
        marginLeft: "10%",
        height: "36px",
        marginTop: "26px",
      }}
    >
      <input type="search" placeholder="Search" style={{ width: "60%" }} />
    </div>
  );
};

export default Searchbar;

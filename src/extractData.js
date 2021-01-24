import React from "react";
import OneCard from "./card";
import "bootstrap/dist/css/bootstrap.min.css";




const ExtractData = ({ datas, data, onChooseVideo, handleClick, handleFav, like, handleFavorite, handleFavoriteNew, }) => {
  console.log(datas)
  
  return (
    
     <div class="container" className='box'>
      <div class="row">
      {datas &&
        datas
          .map((data) => {
            return (
             
              
                    <OneCard data={data} onChooseVideo={onChooseVideo} handleClick={handleClick} handleFav={handleFav} like={like} handleFavorite={handleFavorite} handleFavoriteNew={handleFavoriteNew}/>
                  
            );
          })}
    </div>
    </div>
  );
};

export default ExtractData;

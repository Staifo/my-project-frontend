import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OneCard from "./card";
import NewCard from "./newCard";
import FavoriteCard from './favoriteCard';
import "bootstrap/dist/css/bootstrap.min.css";



const Favorite = ({
  datas,
  data,
  onChooseVideo,
  onOtherVideo,
  onClickFav,
  handleClick,
  handleFav,
  item,
 
}) => {
  const [favoCard, setFavoCard] = useState(null);


  console.log(favoCard);


  const { id, } = useParams();

  useEffect(() => {
    fetch(`/api/singleUser/${id}`)
      .then((res) => res.json())
      .then((database) => setFavoCard(database));
  }, []);

  return (
    <div class="container" className="box" style={{ width: "100%" }}>
      <div class="row" style={{}}>
        {favoCard && (
          <FavoriteCard
            favoCard={favoCard}
            onChooseVideo={onChooseVideo}
            handleClick={handleClick}
            handleFav={handleFav}
          />
        )}
      </div>
    </div>
  );
};

export default Favorite;

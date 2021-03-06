import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OneCard from "./card";
import NewCard from "./newCard";
import "bootstrap/dist/css/bootstrap.min.css";

const MyPersonalSpace = ({
  datas,
  data,
  onChooseVideo,
  onOtherVideo,
  onClickFav,
  handleClick,
  handleFav,
}) => {
  const [userCard, setUserCard] = useState(null);
  console.log(userCard);

  const { id, } = useParams();

  useEffect(() => {
    fetch(`/api/singleUser/${id}`)
      .then((res) => res.json())
      .then((database) => setUserCard(database));
  }, []);

  return (
    <div class="container" className="box" style={{ width: "100%" }}>
      <div class="row" style={{}}>
        {userCard && (
          <NewCard
            userCard={userCard}
            onChooseVideo={onChooseVideo}
            handleClick={handleClick}
            handleFav={handleFav}
          />
        )}

        {/* {userCard && userCard.filter(user=>{
            return id ? id === user.id : user
        }).map(user => {
            return <NewCard user = {user}/>
        })
            
        } */}
      </div>
    </div>
  );
};

export default MyPersonalSpace;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OneCard from "./card";
import NewCard from "./newCard";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalSpaceCard from './personalSpaceCard'

const PersonalSpaceUseEffect = ({ datas, data, onChooseVideo, onOtherVideo }) => {
  const [skillDiv, setSkillDiv] = useState(null);
 

  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/singleUser/${id}`)
      .then((res) => res.json())
      .then((database) => setSkillDiv(database));
  }, []);

  return (
    <div class="container" className="box">
      <div class="row">
      
        {skillDiv && <PersonalSpaceCard skillDiv={skillDiv} onChooseVideo={onChooseVideo}  />}

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

export default PersonalSpaceUseEffect;

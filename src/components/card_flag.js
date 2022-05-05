
import React from 'react';

function Card_flag(props) {
   
    
    return (

  <div className="col-sm-3">
      {props.image}
    <div className="card my_card">
      <div className="card-body">
        <h5
          className="card-title"
          style={{ textAlign: "right", fontSize: "20px", lineHeight: "55px" }}
        >
          {props.name}
        </h5>
        <a href="#" className="light_button button_card">
          Подробнее
        </a>
      </div>
    </div>
  </div>


    );
}

export default Card_flag;
import React from 'react';
import Card from "./Card";

function TourCard(props) {
    let tour_card_img =
        <div className="tour_card-head">
            <p className="card_label">Портонови, Черногория</p>
        </div>;
    let tour_card_body =
      <div className="bott">
          <h3>One&Only Portonovi </h3>
          <h4>первый ультрароскошный курорт One&Only в Европе</h4>

          <div className="tour_card-foot">
              <div className="tour_card-text">
                  <p>от <span> 818 €</span></p>
                  <h6>за номер в сутки в сезон </h6>
              </div>
              <p> от 3 ночей <br/> c 01 мая 2021</p>
          </div>
      </div>


return (
    <Card body = {tour_card_body} img = {tour_card_img}/>
);
}

export default TourCard;
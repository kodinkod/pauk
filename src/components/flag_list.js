
import React from 'react';
import Card_flag from './card_flag';

function Flag_list(props) {
   
    
    return (
        <div className="contry_presentasion container">
  <div style={{ marginTop: "100px" }} className="row">
    <div className="col-sm-8">
      <p style={{ fontWeight: "500px", fontSize: "31px", lineHeight: "42px" }}>
        ОТДЫХ&nbsp;ПРЕМИУМ-КЛАССА&nbsp;С&nbsp;БОЛЬШИМ ВНИМАНИЕМ К ДЕТАЛЯМ
      </p>
    </div>
    <div className="col-3">
      <p style={{ color: "red", fontSize: "20px", lineHeight: "24px" }}>
        Специализируемся
        <br /> <b>на 4 странах</b>
      </p>
    </div>
  </div>

  <div class="row row-cols-4">
  <Card_flag 
  name={"ХОРВАТИЯ"}
  image={ <img class="img_card" src="images/Frame%20horwat.png" alt="" srcset="" />}
  />

  <Card_flag 
  name={"ЧЕРНОГОРИЯ"}
  image={<img class="img_card" src="images/Frame%20chern.png" alt="" srcset=""/>}
  />

  <Card_flag 
  name={"СЛОВЕНИЯ"}
  image={ <img class="img_card" src="images/Frame%20slov.png" alt="" srcset="" />}
  />

  <Card_flag 
  name={"ИТАЛИЯ"}
  image={ <img class="img_card" src="images/Frame%20italy.png" alt="" srcset="" />}
  />

  
  </div>

  <div style={{ marginTop: 100 }} className="row">
  <div className="col-sm-6">
    <p style={{ fontWeight: "500px", fontSize: "18px", lineHeight: "20px" }}>
      Обеспечиваем отдых с повышенной <br />
      надежностью и персонализированным
      <br /> сервисом и{" "}
      <font color="red">
        <u>в других странах</u>
      </font>
    </p>
  </div>
  <div
    style={{
      border: "1px solid #969696",
      textAlign: "left",
      width: "505px",
      height: "81px"
    }}
    className="col-sm-6"
  >
    <p style={{ fontSize: "18px", lineHeight: "24px", padding: "14px 17px 15px 8px" }}>
      <b>ОТДЫХ&nbsp;С&nbsp;VALANTA</b>&nbsp;ОСТАНЕТСЯ&nbsp;ЯРКИМ <br />
      ВОСПОМИНАНИЕМ&nbsp;У&nbsp;ВАС&nbsp;В&nbsp;ПАМЯТИ&nbsp;НАВСЕГДА
    </p>
  </div>
</div>



  </div>

  );
}

export default Flag_list;
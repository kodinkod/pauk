import React from 'react';
import Block from "./Block";

function Big_add(props) {
   
    return (
    <Block className="grid big_add">
        <img src="images/mark1.png" alt="" srcSet=""/>
        <div class="text_bar_k">
             <p style={{ fontSize: "45px", textTransform: "uppercase" }}>
                 {props.title}
                 
            </p>
            <p style={{ fontSize: "18px" }}>
                     {props.text}
                     
            </p>
            <a type="button" class="light_button">
            <b>Узнать подробнее</b>
            </a>

        </div>
    </Block>

    );
}

export default Big_add;
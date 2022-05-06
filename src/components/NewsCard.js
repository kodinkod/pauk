import React, {Fragment} from 'react';
import Card from "./Card";

function NewsCard(props) {

    let news_card_img = <img src={props.news.img} className="card-img-top" alt="..."/>;
    let news_card_body = <Fragment>
        <div className="card_header">

            <time dateTime="">{props.news.date}</time>
        </div>

        <h5 className="card-title">{props.news.title}</h5>
        <a href={props.news.href} className="news link">Подробнее</a>
    </Fragment>

    return (
        <Card img={news_card_img} body={news_card_body}></Card>
    );
}

export default NewsCard;
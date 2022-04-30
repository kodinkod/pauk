import React, {Fragment} from 'react';
import Card from "./Card";

function ArticleCard(props) {
    let blog_card_img = <img src={props.article.img} className="card-img-top" alt="..."/>;
    let blog_card_body = <Fragment>
        <div className="card_header">
            <div>
                <svg className="calendar-icon" width="16" height="16" viewBox="0 0 16 16"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.2857 1.71428H12.5714V0.571439C12.5714 0.255837 12.3156 0 12 0C11.6844 0 11.4286 0.255837 11.4286 0.571439V1.71428H4.57141V0.571439C4.57141 0.255837 4.31558 0 4.00001 0C3.68444 0 3.42857 0.255837 3.42857 0.571439V1.71428H1.71428C0.767511 1.71428 0 2.4818 0 3.42857V14.2857C0 15.2325 0.767511 16 1.71428 16H14.2857C15.2325 16 16 15.2325 16 14.2857V3.42857C16 2.4818 15.2325 1.71428 14.2857 1.71428ZM14.8571 14.2857C14.8571 14.6013 14.6013 14.8572 14.2857 14.8572H1.71428C1.39868 14.8572 1.14285 14.6013 1.14285 14.2857V6.85714H14.8571V14.2857ZM14.8571 5.71429H1.14285V3.42857C1.14285 3.11297 1.39868 2.85713 1.71428 2.85713H3.42857V3.99997C3.42857 4.31558 3.68441 4.57141 4.00001 4.57141C4.31561 4.57141 4.57145 4.31558 4.57145 3.99997V2.85713H11.4286V3.99997C11.4286 4.31558 11.6844 4.57141 12 4.57141C12.3156 4.57141 12.5715 4.31558 12.5715 3.99997V2.85713H14.2857C14.6014 2.85713 14.8572 3.11297 14.8572 3.42857V5.71429H14.8571Z"
                        fill="#BBBBBB"/>
                    <path
                        d="M11.8183 8.16749C11.5969 7.95361 11.2458 7.95361 11.0244 8.16749L6.85696 12.3349L4.97524 10.4532C4.74823 10.2339 4.38649 10.2402 4.16725 10.4672C3.95337 10.6887 3.95337 11.0397 4.16725 11.2612L6.45297 13.5469C6.67613 13.77 7.03783 13.77 7.26096 13.5469L11.8324 8.97548C12.0516 8.74847 12.0453 8.38673 11.8183 8.16749Z"
                        fill="#BBBBBB"/>
                </svg>
                <time dateTime="">{props.article.date}</time>
            </div>
            <div>
                <svg className="views-icon" width="16" height="12" viewBox="0 0 16 12" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.8983 5.68882C15.7554 5.49329 12.3496 0.901123 7.99992 0.901123C3.65019 0.901123 0.244313 5.49329 0.101531 5.68863C-0.0338438 5.87413 -0.0338438 6.12573 0.101531 6.31123C0.244313 6.50676 3.65019 11.0989 7.99992 11.0989C12.3496 11.0989 15.7554 6.50673 15.8983 6.31138C16.0339 6.12592 16.0339 5.87413 15.8983 5.68882ZM7.99992 10.044C4.79588 10.044 2.02085 6.99607 1.19938 5.99966C2.01979 5.00238 4.78901 1.95606 7.99992 1.95606C11.2038 1.95606 13.9787 5.00344 14.8005 6.00038C13.9801 6.99763 11.2108 10.044 7.99992 10.044Z"
                        fill="#BBBBBB"/>
                    <path
                        d="M7.9998 2.83496C6.25474 2.83496 4.83496 4.25474 4.83496 5.99981C4.83496 7.74488 6.25474 9.16466 7.9998 9.16466C9.74487 9.16466 11.1646 7.74488 11.1646 5.99981C11.1646 4.25474 9.74487 2.83496 7.9998 2.83496ZM7.9998 8.10969C6.83637 8.10969 5.88993 7.16322 5.88993 5.99981C5.88993 4.8364 6.8364 3.88993 7.9998 3.88993C9.16321 3.88993 10.1097 4.8364 10.1097 5.99981C10.1097 7.16322 9.16324 8.10969 7.9998 8.10969Z"
                        fill="#BBBBBB"/>
                </svg>

                <time dateTime="">{props.article.views}</time>
            </div>
        </div>

        <h5 className="card-title">{props.article.title}</h5>
        <a href={props.article.href} className="link">
            Подробнее
            <svg width="26" height="8" viewBox="0 0 26 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25.3536 4.03553C25.5488 3.84027 25.5488 3.52369 25.3536 3.32843L22.1716 0.146446C21.9763 -0.0488155 21.6597 -0.0488155 21.4645 0.146446C21.2692 0.341708 21.2692 0.658291 21.4645 0.85355L24.2929 3.68198L21.4645 6.51041C21.2692 6.70567 21.2692 7.02225 21.4645 7.21751C21.6597 7.41278 21.9763 7.41278 22.1716 7.21751L25.3536 4.03553ZM0 4.18198H25V3.18198H0V4.18198Z"
                    fill="#2C2C2C"/>
            </svg>
            </a> </Fragment>

    return (
        <Card body={blog_card_body} img={blog_card_img}></Card>
    );
}

export default ArticleCard;
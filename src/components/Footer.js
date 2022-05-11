import React from 'react';
import {createPortal} from "react-dom";

function Footer(props) {
    return (
        createPortal(
        <div
            className="footer-main"
            style={{
                width: "100%",
                height: 370,
                backgroundImage: "url(images/SloveniaHeader3.png)",
                backgroundSize: "cover"
            }}
        >
            <div
                className="footer-one-window"
                style={{opacity: "100%", padding: "130px 201px 68px 202px"}}
            >
                <div className="container">
                    <div className="row align-items-center position-static">
                        <div className="row">
                            <div className="col">
                                <div className="">
                                    <img
                                        src="images/logo (1) 1.png"
                                        style={{width: 131, height: 72}}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <a className="nav-link text-dark" href="#">
                                        Отели
                                    </a>
                                </div>
                                <div className="row">
                                    <a className="nav-link text-dark" href="#">
                                        Страны
                                    </a>
                                </div>
                                <div className="row">
                                    <a className="nav-link text-dark" href="#">
                                        Maistra online
                                    </a>
                                </div>
                                <div className="row">
                                    <a className="nav-link text-dark" href="#">
                                        Туры online
                                    </a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <a className="nav-link text-dark" href="#">
                                        Агентам
                                    </a>
                                </div>
                                <div className="row">
                                    <a className="nav-link text-dark" href="#">
                                        О нас
                                    </a>
                                </div>
                                <div className="row">
                                    <a className="nav-link text-dark" href="#">
                                        Блог
                                    </a>
                                </div>
                            </div>
                            <div className="col">
                                <p>РЕЖИМ РАБОТЫ</p>
                                <h6>Пн-Пт 10:00-19:00</h6>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <h6>+38 (000) 000-00-00</h6>
                                </div>
                                <div className="row">
                                    <h6>+38 (000) 000-00-00</h6>
                                </div>
                                <div className="row ">
                                    <a className="nav-link text-dark" href="#">
                                        ВСЕ КОНТАКТЫ
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="vertical-line-rectangle"/>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-4">
                                <p>2002-2021 Туроператор Valanta Travel Company</p>
                            </div>
                            <div className="col-4">
                                <a href="#">
                                    <img src="images/header_facebook.png" alt=""/>
                                </a>
                                <a href="#">
                                    <img src="images/header_instagram.png" alt=""/>
                                </a>
                                <a href="#">
                                    <img src="images/header_youtube.png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    ,   document.getElementById("footer")));
}

export default Footer;
import React from 'react';
import {createPortal} from "react-dom";

function Header(props) {
    return (createPortal(<>
            <div style={{}}>
                <nav style={{}} className="navbar navbar-expand-lg navbar-light">
                    <div
                        className="container-fluid"
                        style={{width: 1440, height: 70, marginLeft: 174, marginRight: 173}}
                    >
        <span className="img-container">
          <a href="#">
            <img
                src="images/logo (1) 1.png"
                style={{width: 131, height: 72}}
            />
          </a>
        </span>
                        {/* DIVCHIK */}
                        <div className="vertical-small-line-rectangle"/>
                        <div className="header-1-second-block">
                            <input
                                type="radio"
                                className="btn-check"
                                name="options-outlined"
                                id="success-outlined"
                                autoComplete="off"
                                defaultChecked=""
                            />
                            <div className="btn-group-vertical btn-group-sm">
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btnradio1"
                                    autoComplete="off"
                                />
                                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                                    UA
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btnradio2"
                                    autoComplete="off"
                                    defaultChecked=""
                                />
                                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                                    RU
                                </label>
                            </div>
                        </div>
                        {/* DIVCHIK */}
                        <div className="vertical-small-line-rectangle"/>
                        <div
                            className="header-1-3-block"
                            style={{display: "flex", flexDirection: "column"}}
                        >
                            <h7>USD 28,90</h7>
                            <h7>EUR 35,00</h7>
                        </div>
                        {/* DIVCHIK */}
                        <div className="vertical-small-line-rectangle"/>
                        <a href="#">
                            <img src="images/header_facebook.png" alt=""/>
                        </a>
                        <a href="#">
                            <img src="images/header_instagram.png" alt=""/>
                        </a>
                        <a href="#">
                            <img src="images/header_youtube.png" alt=""/>
                        </a>
                        {/* DIVCHIK */}
                        <div className="vertical-small-line-rectangle"/>
                        <div
                            className=""
                            style={{fontSize: 16, marginTop: 20, fontStyle: "bold"}}
                        >
                            <p>044-537-20-07</p>
                            <p>068-537-20-07</p>
                        </div>
                        <div className="">
                            <img src="images/smartphone_1.png" alt=""/>
                        </div>
                        {/* DIVCHIK */}
                        <div className="vertical-small-line-rectangle"/>
                        <div className="row gx-5">
                            <div className="col">
                                <div className="maistra-online justify-content-end position-relative">
                                    <h5
                                        className="position-absolute top-50 translate-middle "
                                        style={{left: "40% !important"}}
                                    >
                                        MAISTRA ONLINE
                                    </h5>
                                    <div className="maistra-redblock" style={{}}>
                <span
                    className="img-container"
                    style={{
                        position: "absolute", padding: 15, pointerEvents: "none"
                    }}
                >
                  <img
                      src="images/Frame_18.png"
                      width={19}
                      height={17}
                      alt=""
                  />
                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="tour-online justify-content-end position-relative">
                                    <h5
                                        className="position-absolute top-50 translate-middle "
                                        style={{left: "38% !important"}}
                                    >
                                        ТУРЫ ONLINE
                                    </h5>
                                    <div className="tour-greenblock" style={{}}>
                <span
                    className="img-container"
                    style={{
                        position: "absolute", padding: 15, pointerEvents: "none"
                    }}
                >
                  <img
                      src="../../public/images/book 1.png"
                      width={19}
                      height="17.17"
                      alt=""
                  />
                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* между (просто линия) */}
            <div className="vertical-line-rectangle"/>
            {/* НИЖНЯЯ ЧАСТЬ */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div
                    className="container-fluid"
                    style={{width: 1440, height: 70, marginLeft: 174, marginRight: 173}}
                >
                    <div
                        className="collapse navbar-collapse navbar-nav navbar-header-2"
                        id="navbarNavDropdown"
                    >
                        <div
                            className="search-box"
                            style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}
                        >
                            <button className="btn-search">
                                <i className="fas fa-search"/>
                            </button>
                            <input
                                type="text"
                                className="input-search"
                                placeholder="Type to Search..."
                            />
                            <span
                                className="img-container"
                                style={{position: "absolute", padding: 15, pointerEvents: "none"}}
                            >
            <img src="images/Vector.png" width={19} height="17.17" alt=""/>
          </span>
                        </div>
                        <li className="nav-item dropdown menu_line_under">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Отели
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown menu_line_under">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Страны
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown menu_line_under">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Авиа
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown menu_line_under">
                            <a className="nav-link" href="#">
                                Каталог туров
                            </a>
                        </li>
                        <li className="nav-item dropdown menu_line_under">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Агентам
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown menu_line_under">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                О нас
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown menu_line_under">
                            <a className="nav-link" href="#">
                                Блог
                            </a>
                        </li>
                        <li className="nav-item dropdown menu_line_under">
                            <a className="nav-link" href="#">
                                FAQ
                            </a>
                        </li>
                        <li className="nav-item dropdown menu_line_under">
                            <a className="nav-link" href="#">
                                Контакты
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
            <div className="" style={{}}>
            </div>
        </>, document.getElementById("header"))

    );
}

export default Header;
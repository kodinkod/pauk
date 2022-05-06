import React from 'react';

function NewsHeader(props) {
    return (
        <div className="row mb-4 justify-content-between align-items-center block_slider-header g-0">
            <div className="col p-0">
                {props.header_text}
            </div>
            <div className="col-lg d-none d-lg-inline p-0 pe-3">
                <hr/>
            </div>
            <div className="col-lg-2 p-0 d-lg-flex">
                <button className=" button m-lg-auto my-2">{props.link_text}</button>
            </div>
            {props.children}
        </div>
    );
}

export default NewsHeader;
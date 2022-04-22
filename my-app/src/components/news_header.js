import React from 'react';

function NewsHeader(props) {
    return (
        <div className="row mb-4 justify-content-between align-items-center block_slider-header">
            <div className="col-lg col-xxl-6 p-0">
                Важные новости
            </div>
            <div className="col-lg d-none d-lg-inline p-0 pe-3">
                <hr/>
            </div>
            <div className="col-lg-2 p-0 d-lg-flex">
                <button className=" button m-lg-auto my-2">Все новости</button>
            </div>
        </div>
    );
}

export default NewsHeader;
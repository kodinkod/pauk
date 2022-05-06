import React from 'react';


function ListSlider(props) {


    let slider_items = (n) => {
        let res = []
        for (let i = 0; i < n; i++) res[i] = (<div className='slider__item'>{[props.item]} </div>)
        return res

    }
    return (
        <div className="slider">
            <div className="slider__container">
                <div className="slider__wrapper">
                    <div className="slider__items">
                        {slider_items(6)}
                    </div>
                </div>
            </div>
            <button className="slider__control" data-slide="prev">
                <svg  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" stroke="#454545"/>
                    <path
                        d="M12.6464 25.0355C12.4512 24.8403 12.4512 24.5237 12.6464 24.3284L15.8284 21.1464C16.0237 20.9512 16.3403 20.9512 16.5355 21.1464C16.7308 21.3417 16.7308 21.6583 16.5355 21.8536L13.7071 24.682L16.5355 27.5104C16.7308 27.7057 16.7308 28.0223 16.5355 28.2175C16.3403 28.4128 16.0237 28.4128 15.8284 28.2175L12.6464 25.0355ZM38 25.182H13V24.182H38V25.182Z"
                        fill="#454545"/>
                </svg>
            </button>
            <button className="slider__control" data-slide="next">
                <svg  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="24.5" stroke="#454545"/>
                    <path
                        d="M37.3536 25.0355C37.5488 24.8403 37.5488 24.5237 37.3536 24.3284L34.1716 21.1464C33.9763 20.9512 33.6597 20.9512 33.4645 21.1464C33.2692 21.3417 33.2692 21.6583 33.4645 21.8536L36.2929 24.682L33.4645 27.5104C33.2692 27.7057 33.2692 28.0223 33.4645 28.2175C33.6597 28.4128 33.9763 28.4128 34.1716 28.2175L37.3536 25.0355ZM12 25.182H37V24.182H12V25.182Z"
                        fill="#454545"/>
                </svg>
            </button>
        </div>
    );
}

export default ListSlider;
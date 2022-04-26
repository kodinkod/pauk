import React from 'react';

function Card(props) {
    return (
        <div className="card news-card">
            {props.img}
            <div className="card-body">
                {props.body}
            </div>

        </div>
    );
}

export default Card;
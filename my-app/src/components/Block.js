import React from 'react';
function Block(props) {
    return (
        <div className="block container-fluid">
            {props.children}
        </div>
    );
}

export default Block;
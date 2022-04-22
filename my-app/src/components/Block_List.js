import React from 'react';
import Block from "./Block";

function Block_List(props) {
    return (
        <Block>
            {props.header}
            {props.list}
        </Block>
    );
}

export default Block_List;
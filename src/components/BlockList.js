import React from 'react';
import Block from "./Block";

function BlockList(props) {
    return (
        <Block className = {props.className}>
            {props.header}
            {props.list}
        </Block>
    );
}

export default BlockList;
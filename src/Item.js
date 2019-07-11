import React from 'react';

export default function Item (props) {
    return <li>
        {props.children}
        <button onClick={props.deleteEvent}> Del</button>
    </li>

}


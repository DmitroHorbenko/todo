import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Item (props) {
    return <li>
        {props.children}
        <IconButton aria-label="delete" onClick={props.deleteEvent}><DeleteIcon /></IconButton>
    </li>
}
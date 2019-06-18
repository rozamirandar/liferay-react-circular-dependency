import React from 'react';
import Group from './Group';

export default function Row(props) {
    return (
        props.items ? <Group items={props.items} /> : <div>{props.name}</div>
    );
}
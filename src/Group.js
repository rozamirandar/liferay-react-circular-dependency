import React from 'react';
import Row from './Row';

export default function Group(props) {
    return (
        props.items.map(
            item => <Row key={item.name} items={item.childItems} name={item.name} />
        )
    )
}
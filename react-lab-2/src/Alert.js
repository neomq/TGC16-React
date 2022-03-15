import React from 'react'

export default function Alert(props) {
    return(
        <div style={{backgroundColor: "red"}}>{props.message}</div>
    );
}
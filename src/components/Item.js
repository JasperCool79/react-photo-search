import React from 'react'
import Container from './Container';
export default function Item({searchTerm}) {
    return (
        <div>
            <h2>{searchTerm} pictures</h2>
            <Container searchTerm={searchTerm}/>
        </div>
    )
}

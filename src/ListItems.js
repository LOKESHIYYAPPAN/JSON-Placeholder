import React from 'react'

const ListItems = ({ datum }) => {
    return (
        <li>{JSON.stringify(datum)}</li>
    )
}

export default ListItems
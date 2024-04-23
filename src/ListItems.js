import React from 'react'

const ListItems = ({ datum }) => {
    console.log(datum)
    return (
        <li>{JSON.stringify(datum)}</li>
    )
}

export default ListItems
import React from 'react'
import Cell from './Cell'

const Row = ({ datum }) => {
    const values = Object.values(datum)
    // console.log(values)
    return (
        <tr>
            {values.map((item) =>(
                <Cell item={JSON.stringify(item)}  key={JSON.stringify(item)} />
            ))}
        </tr>
    )
}

export default Row
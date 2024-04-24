import React from 'react'
import Row from './Row'

const Table = ({ data }) => {
    return (
        <table border={2}>
            <tbody>
                {data.map(datum => (
                    <Row
                        datum={datum}
                        key={datum.id}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Table
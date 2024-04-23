import React from 'react'
import ListItems from './ListItems'

const Content = ({ data }) => {
  return (
    <>
      <ul>
        {data.map(datum => (
          <ListItems
            datum={datum}
            key={datum.id}
          />
        ))}
      </ul>
    </>
  )
}

export default Content
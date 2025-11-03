import React from 'react'

const Com01 = ({name, age, oncl}) => {
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={oncl}>{age}</button>
    </div>
  )
}

export default Com01
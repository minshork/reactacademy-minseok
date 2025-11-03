import React from 'react'
// 함수 전달 Props

const Test02 = ({txt, oncl}) => {
  return (
    <div>
        <button onClick={oncl}>{txt}</button>
    </div>
  )
}

export default Test02
import React from 'react'

const Ex01 = ({name, age}) => {
  return (
    <div>
        <p>
            안녕하세요, <strong>{name}</strong>님! <br/>
            당신의 나이는 {age}살 입니다.
        </p>
    </div>
  )
}

export default Ex01
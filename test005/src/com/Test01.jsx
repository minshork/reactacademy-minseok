import React from 'react'

const Test01 = ({name, age, job}) => {
  return (
    <div>
        <h2>안녕하세요, {name}님!</h2>
        <h4>나이는 {age}</h4>
        <h4>직업은 {job}</h4>
    </div>
  )
}

export default Test01
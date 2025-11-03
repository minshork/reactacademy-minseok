import React, { useState } from 'react'

const Com01 = () => {
    // useState :: [현재값변수, 값변경변수] = useState(초기값)
    let [count, setCount] = useState(0)
  return (
    <div>
        <h2>현재 숫자 : {count}</h2>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  )
}

export default Com01
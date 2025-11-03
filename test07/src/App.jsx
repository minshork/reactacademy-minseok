import React, { useEffect, useState } from 'react'
import Com01 from './com/Com01'
// useEffect : 화면이 바뀐뒤에 실행할 코드
// useEffect(() => {
//     실행될 코드
//   return ==> 정리(clean-up)
// }, [의존값])
// [] => 처음 한번만 실행(가장 많이 사용)
// 생략 => 매 렌더링 마다 실행(잘 사용하지 않음)
// [값] => 값이 바뀔때 마다 실행

const App = () => {
  let [count, SetCount] = useState(0)
  let [text, SetText] = useState("")

  // 마운트 직후 한번만 실행
  useEffect(() => {
    console.log("여기는 처음 한번만 실행")
  }, [])

  // 매 렌더링 마다 실행
  useEffect(() => {
    console.log(`여기는 매번 실행 count = ${count}`)
  })
  return (
    <div>
      <h2>useEffict : 마운트</h2>
      <h3>{count}</h3>
      <button onClick={() => SetCount((kk) => kk + 1)}>증가</button>
      <input type="text" value={text} onChange={(e) => SetText(e.target.value)} />
      <h3>{text}</h3>
      <Com01 />
    </div>
  )
}

export default App
import React from 'react'
import Acom01 from './com/Acom01'
// 버튼, 그림자, 플렉스, 그리드등 재사용가능한 반복코드를 정의
// @mixin 플렉스사용{ } :: 반복코드 정의
// @include 플렉스사용 :: 정의된 반복 코드 사용(호출)

const App = () => {
  return (
    <div>
      <Acom01 />
    </div>
  )
}

export default App
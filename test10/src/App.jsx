import React from 'react'
import './App.scss'
import Acom01 from './com/Acom01'
import Acom02 from './com/Acom02'
// sass :: css를 더 편하게, 더 깔끔하게 작성하게 해주는 preprocessor(전처리기)
// 확장자가 scss
// 원래 scss -watch a.scss a.css
// 리액트에서는 자동으로 css로 번역

const App = () => {
  let hClick = (msg) => {
    alert(`${msg} 버튼이 클릭되었습니다`);
  }

  return (
    <div>
      <h1>여기는 사스</h1>
      <Acom01 />
      <Acom02 text="일반 버튼" oncl={() => hClick("일반")}/>
      <Acom02 text="위험 버튼" type='danger' oncl={() => hClick("위험")} />
      <Acom02 text="중간 버튼" type='blue' oncl={() => hClick("중간")} />
    </div>
  )
}

export default App
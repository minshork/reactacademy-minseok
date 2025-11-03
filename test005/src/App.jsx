import React from 'react'
import './App.css'
import Ex01 from './com/Ex01';
import Ex02 from './com/Ex02';
// Props : 부모 컴퍼넌트가 자식 컴퍼넌트에게 값을 전달

const App = () => {
  let helloB = () => {
    alert("안녕하세요 프롭스예제입니다.");
  };

  return (
    <div>
      <h1>프롭스 기초 예제</h1>
      <Ex01 name="이민석" age={25}/>
      <Ex02 oncl={helloB}/>
    </div>
  )
}


export default App
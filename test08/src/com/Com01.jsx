import React, { useState } from 'react'
import { useEffect } from 'react';
// 로컬스토리지에 메모를 0.05초 뒤에 자동저장하는 프로그램
// 리셋버튼을 클릭하면 로컬스토리지가 클리어
// 메모 :: input과 비슷하지만 많은 양을 저장할 수 있는 textarea를 사용
// localStorage.setItem(name, "홍길동") => 로컬스토리지에 name이라는 키로 입력
// localStorage.getItem(name) => 로컬스토리지에 name이라는 키를 호출
// localStorage.removeItem(name) => 로컬스토리지에 name 클리어

const Com01 = () => {
    let [text, SetText] = useState("");

    useEffect(() => {
        localStorage.getItem("memo");
    },[])

    useEffect(() => {
        let txtValue = document.getElementById("memoText").value;
        localStorage.setItem("memo", txtValue);
    });


  return (
    <div>
        <textarea value={text} id="memoText" onChange={e => {
            SetText(e.target.value);
        }}></textarea>
        <button>리셋</button>
        <h2>memo</h2>
        <div>{text}</div>
    </div>
  )
}

export default Com01
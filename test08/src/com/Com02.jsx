import React, { useState, useEffect } from 'react'
// 로컬스토리지에 메모를 0.05초 뒤에 자동저장하는 프로그램
// 리셋버튼을 클릭하면 로컬스토리지가 클리어
// 메모 :: input과 비슷하지만 많은 양을 저장할 수 있는 textarea를 사용
// localStorage.setItem(name, "홍길동") => 로컬스토리지에 name이라는 키로 입력
// localStorage.getItem(name) => 로컬스토리지에 name이라는 키를 호출
// localStorage.removeItem(name) => 로컬스토리지에 name 클리어

const Com02 = () => {
    let [text, SetText] = useState("");
    let [stas, SetStas] = useState("saving") // saving, saved
    let memoKey = "메모장입니다";

    useEffect(() => {
        try{
            let show = localStorage.getItem(memoKey);
            SetText(show);
        }catch{}
    }, []);

    useEffect(() => {
        SetStas("saving");
        let m = setTimeout(() => {
            localStorage.setItem(memoKey, text);
            SetStas("saved");
        }, 500);

        return () => clearTimeout(m);
    }, [text]);

    let clearS = () => {
        localStorage.removeItem(memoKey);
        SetStas("cleared");
    };

  return (
    <div>
        <h2>자동저장 메모장</h2>
        <textarea value={text} placeholder='메모를 입력하세요' onChange={e => {SetText(e.target.value)}}></textarea>
        <h3>
            {stas === 'saving' && '저장중'}
            {stas === 'saved' && '저장됨'}
            {stas === 'cleared' && '클리어됨'}
        </h3>
        <button onClick={clearS}>클리어</button>
    </div>
  )
}

export default Com02
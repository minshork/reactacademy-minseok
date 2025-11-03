import React, { useState, useEffect, useRef } from 'react'
import '../assets/scss/Todolist.scss'


const Todolist = () => {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const inputRef = useRef(null)


  // 처음 화면이 열리면 input에 커서 자동으로 넣기
  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  // 항목 추가
  const addItem = () => {
    if (text === '') return
    const newItem = { id: Date.now(), title: text, done: false }
    setList([...list, newItem])
    setText('')
    inputRef.current && inputRef.current.focus()
  }

  // 할 일 완료되었을 때 표시
  const toggleItem = (id) => {
    const newList = list.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    )
    setList(newList)
  }

  // 삭제
  const deleteItem = (id) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  // 엔터키로 추가
  const onKeyDown = (e) => {
    if (e.key === 'Enter') addItem()
  }

  return (
    <div className="todo">
      <div className="top">
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="할 일 입력"
        />
        <button onClick={addItem}>추가</button>
      </div>

      <ul>
        {list.length === 0 && <li className="empty">아직 아무것도 없습니다.</li>}
        {list.map(item => (
          <li key={item.id} className={item.done ? 'done' : ''}>
            <span onClick={() => toggleItem(item.id)}>{item.title}</span>
            <button className="del" onClick={() => deleteItem(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todolist
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  let [name, SetName] = useState("");

  return (
    <div>
      <input type="text" placeholder='이름을 입력하세요'
        value={name}
        onChange={e => SetName(e.target.value)}
      />
      <h2>입력된 이름 : {name || "이름이 입력되지 않음"}</h2>
    </div>
  )
}

export default App
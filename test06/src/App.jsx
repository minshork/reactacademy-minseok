import Com01 from './com/Com01'
import { useState } from 'react'

const App = () => {
  let hi = () => {
    alert("Hello")
  }
  let [count, SetCount] = useState(0);
  return (
    <div>
      <Com01 name="홍길동" />
      <Com01 oncl={hi} age={20} />
      <h2>{count}</h2>
      <button onClick={() => SetCount(c => c + 1)}></button>
    </div>
  )
}

export default App
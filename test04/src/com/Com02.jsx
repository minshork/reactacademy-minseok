import { useState } from 'react'

const Com02 = () => {
    let [name, setName] = useState("");
  return (
    <div>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <p>입력되고있는 이름 : {name}</p>
    </div>
  )
}

export default Com02
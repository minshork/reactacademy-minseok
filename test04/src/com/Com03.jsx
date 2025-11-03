import { useState } from 'react'

const Com03 = () => {
    let [isOn, setIsOn] = useState(false);

  return (
    <div>
        <button onClick={() => setIsOn(!isOn)}>{isOn ? "켜짐" : "꺼짐"}</button>
    </div>
  )
}

export default Com03
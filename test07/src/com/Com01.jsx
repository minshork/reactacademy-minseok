import React, {useEffect, useState } from 'react'

const Com01 = () => {
    let [num, SetNum] = useState(0)
    let [starting, setStarting] = useState(true)
    useEffect(()=>{
        if(!starting)return

        let timer = setInterval(()=>{
            SetNum( kk => kk + 1)
        },1000)

        return()=>{
            clearInterval(timer)
        }
    },[starting])
  return (
    <div>
        <h2>1초마다 증가 : {num}</h2>
        <button onClick={()=>setStarting(false)} disabled={!starting}>정지</button>
        <button onClick={()=>setStarting(true)}>재시작</button>
    </div>
  )
}

export default Com01

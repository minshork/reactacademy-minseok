import { useState } from 'react'

const Com04 = () => {
    let [isLogin, SetIsLogin] = useState(false)
  return (
    <div>
        <h2>{isLogin ? "로그인 성공" : "환영합니다 로그인이 필요합니다"}</h2>
        <button onClick={() => SetIsLogin(!isLogin)}>
            {isLogin ? "로그아웃" : "로그인"}
        </button>
    </div>
  )
}

export default Com04
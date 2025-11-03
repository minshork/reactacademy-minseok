import { useState } from 'react'

const Com05 = () => {
    let [isLogin, SetIsLogin] = useState(false);
    let [idVal, SetIdVal] = useState("");

  return (
    <div>
        <input type="text" value={idVal} placeholder='아이디를 입력해주세요' onChange={e => SetIdVal(e.target.value)}/>
        <button onClick={() => {
            idVal == "admin" ? SetIsLogin(true) : SetIsLogin(false)
            SetIdVal("");
            }}>{isLogin ? "로그아웃" : "로그인"}
        </button>
        <p>{isLogin ? "로그인 성공" : "로그인 필요합니다"}</p>
    </div>
  )
}

export default Com05
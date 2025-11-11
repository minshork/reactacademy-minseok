import { useState } from "react";
import axios from "axios";
import styles from './Contact.module.scss';

const Contact:React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const contactSumit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("모든 칸을 입력해주세요.");
      return;
    }

    try {
      // await axios.post("", {
      //   name,
      //   email,
      //   message,
      // });

      setStatus("메시지가 성공적으로 전송되었습니다!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("전송 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>문의사항</h2>
      <p>문의사항이 있으시면 아래 양식을 작성해주세요.</p>

      <form className={styles.mainCon} onSubmit={contactSumit}>
        <input type="text" placeholder="이름" value={name} onChange={(e: any) => setName(e.target.value)} />
        <input type="email" placeholder="이메일" value={email} onChange={(e: any) => setEmail(e.target.value)} />
        <textarea placeholder="메시지" value={message} onChange={(e: any) => setMessage(e.target.value)} rows={5} />
        <button type="submit">보내기</button>
      </form>

      <p style={{ marginTop: "10px" }}>{status}</p>
    </div>
  );
};

export default Contact;

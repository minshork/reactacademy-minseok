import React, { useEffect, useState } from "react";
import styles from './Contact.module.scss'

const Contact: React.FC = () => {
  const [n, setN] = useState<number>(5);
  const [pattern, setPattern] = useState<string>("");

  useEffect(() => {
    let result = "";

    for (let i = 1; i <= n; i++) {
      result += " ".repeat(n - i);

      result += "*".repeat(2 * i - 1);

      result += "\n";
    }

    setPattern(result);
  }, [n])

  return (
    <div className={styles.star}>
      <h2>피라미드 별찍기</h2>
      <div>
        <div className={styles.input}>
          <p>줄 수 : </p>
          <input type="number" value={n} id="" onChange={(e) => setN(Number(e.target.value))}/>
        </div>
      </div>
      <pre className={styles.py}>
        {pattern}
      </pre>
    </div>
  );
};

export default Contact;

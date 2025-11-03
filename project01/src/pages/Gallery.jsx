import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Gallery.module.scss'

const Gallery = () => {
  let [images, setImages] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let load = async () => {
    try{
      setLoading(true);
      let { data } = await axios.get('/gallery.json');
      setImages(data);
    }
    catch(err){
      setError("갤러리 로드 실패");
      console.log(err);
    }
    finally{
      setLoading(false);
    };
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section className={styles.gallery}>
      <div className={styles.grid}>
        {images.map((item) => (
          // 괄호로 묶는 경우 -> 리턴 값 필요 x
          // 중괄호로 묶는 경우 -> 리턴 값 필요 o
          <div key={item.id} className={styles.card}>
            <img src={item.url} alt={item.title}/>
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
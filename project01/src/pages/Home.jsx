import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.scss'

const Home = () => {
  // 원본 이미지
  let images = ['img_01.jpg', 'img_02.jpg', 'img_03.jpg', 'img_04.jpg'];

  // 무한루프용 확장 이미지
  let slides = [ images[images.length - 1], ...images, images[0]];

  let [index, setIndex] = useState(1);
  let [hasTransition, setHasTransition] = useState(true);
  let timerRef = useRef(null); // timer = null

  useEffect(() => {
    startAuto();
    
    return stopAuto();
  }, []);

  let goNext = () => setIndex((item) => item + 1);

  let startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(goNext ,3000);
  };

  let stopAuto = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    if(!hasTransition){
      let id = requestAnimationFrame(() => setHasTransition(true));
      
      return () => cancelAnimationFrame(id);
    }
  }, [hasTransition]);

  // 끝, 처음의 클론에 도달하면 transition 없어지고, 실제 위치로 점프하는 역할
  let handleTransitionEnd = () => {
    if(index === slides.length - 1){
      setHasTransition(false);
      setIndex(1);
    }
    else if(index === 0){
      setHasTransition(false);
      setIndex(images.length);
    }
  }

  return (
    <section className={styles.home}>
        <h1 className={styles.title}>이미지 슬라이드가 보이는 홈</h1>
        <div className={styles.slider} onMouseEnter={ stopAuto } onMouseLeave={ startAuto }>
            <div className={styles.track} style={{transform: `translateX(-${index * 100}%)`, transition: hasTransition ? `all 0.3s` : 'none'}} onTransitionEnd={handleTransitionEnd}>
                {/* 4개의 원본이미지 및 2개의 복사이미지 표시 */}
                {/* 이미지들.map((img, i)) => (img src={`${img}`}) */}
                {slides.map((item, idx) => (<img key={idx} src={`/imgs/${item}`} alt={`img-${idx}`} />))}
            </div>
        </div>
        
    </section>
  )
}

export default Home
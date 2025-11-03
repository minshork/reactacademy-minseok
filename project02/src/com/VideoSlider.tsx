import { useEffect, useState, useRef } from "react"
import styles from './VideoSlider.module.scss';

interface Slides {
    src: string
    title: string
    subtitle: string
};

interface Props {
    slide: Slides[]
    autoplay?: boolean
    intervalMs?: number
};

const VideoSlider:React.FC<Props> = ({slide, intervalMs=6000, autoplay=true}) => {
    // slides; intervalMs; autoplay;
    let [index, setIndex] = useState(0);
    let timerRef = useRef<number | null>(null);
    useEffect(() => {
        if(!autoplay) return;
        timerRef.current = window.setInterval(() => {
            setIndex((k) => (k + 1) % slide.length);
        }, intervalMs);

        return () => {
            if(timerRef.current) window.clearInterval(timerRef.current);
        };
    }, [slide.length, intervalMs, autoplay]);

    let kkk = slide[index];

  return (
    <div className={styles.videoslider}>
        <video
            key={kkk.src}
            className={styles.video}
            src={kkk.src}
            autoPlay
            muted
            loop
            playsInline
            // playInline:: 모바일 환경에서 전체화면으로 강제 변환되지 않고 페이지 안에서 재생
        />
        <div className={styles.overlay} key={kkk.src}>
            <h2 className={styles.title}>{kkk.title}</h2>
            <p className={styles.subtitle}>{kkk.subtitle}</p>
        </div>
    </div>
  )
}

export default VideoSlider
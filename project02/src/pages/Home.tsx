import VideoSlider from "../com/VideoSlider"
import styles from "./Home.module.scss"

const Home = () => {
  let slides = [
    {
      src: '/mov/video01.mp4',
      title: "Welcome to Our Site",
      subtitle: "환영합니다 타입스크립트 홈페이지 입니다."
    },
    
    {
      src: '/mov/video02.mp4',
      title: "Smart",
      subtitle: "똑똑해지는 타입스크립트"
    },

    {
      src: '/mov/video03.mp4',
      title: "Thank you",
      subtitle: "감사합니다"
    }
  ];

  return (
    <div className={styles.home}>
      <div className={styles.sb}>
        <VideoSlider slide = {slides} />  
      </div>
    </div>
  )
}

export default Home
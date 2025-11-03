import React from 'react'
import styles from '../styles/About.module.scss'
import { useState } from 'react'
import { useEffect } from 'react'

const About = () => {
  let [index, setIndex] = useState(0)
  let images = ['/imgs/img_01.jpg', '/imgs/img_02.jpg' , '/imgs/img_03.jpg' ]

  // 이미지 페이드 인아웃
  useEffect( () => {
    let timer = setInterval( ()=>{
        setIndex( k => (k+1) % images.length ) // 하나씩 증가시키되, 끝에 도착하면 0
        // 0 -> (0 + 1) % 3 = 1
        // 1 -> (1 + 1) % 3 = 2
        // 2 -> (2 + 1) % 3 = 0
    }, 3000)
    return () => clearInterval(timer)
  }, [])


  useEffect( ()=>{
    let faId = 0
    let io = new IntersectionObserver( // 스크롤 센서 만들기 -> io.observe(요소)
      itemList =>{ // 여러개가 감지 감수 될수 있어서 배열형태
          cancelAnimationFrame(faId)
          faId = requestAnimationFrame( () =>{
              itemList.forEach( (item) =>{
                  item.target.dataset.show = item.isIntersecting ? '1' : '0'
                  // isIntersecting 요소가 보이면 true 보이지않으면 false
              })
          }) 
      }, 
      {
        threshold : 0.15, // 15%만 보이면 "감지" 인식
        rootMargin : '0px 0px -20% 0px' // 화면 아래쪽 20%위에서 감지
      }
    )

    let el = document.querySelectorAll('[data-io="fade-up"]')
    el.forEach( item => io.observe(item))
    
  },[])

  return (
    <section className={styles.about}>
      <h1 className={styles.title} style={{textAlign : 'center'}}>회사소개</h1>
      {/* 이미지 페이드인아웃 */}
      <div className={styles.slideWrap}>
          { images.map( (item, idx) => (
              <img key={idx} 
               src={item}
               className={ `${styles.slideImg} ${ idx === index ? styles.active : ''} `}
               alt={`imgs${idx}`}
               />
          )) }
      </div>
      
      <div className={styles.spacer} />

      <div data-io="fade-up" data-show="0" className={styles.textBox}>
          <h2>우리 서비스에 대해</h2>
          <p>우리 웹사이트는 scss로 제작되어 가볍고, 빠릅니다</p>
      </div>
      <div data-io="fade-up" data-show="0" className={styles.textBox}>
          <h2>우리가 추구하는 목표</h2>
          <p>접근성과 성능을 모두 고려한 웹서비스 제공합니다</p>
      </div>      

    </section>
  )
}

export default About
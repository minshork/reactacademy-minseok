import React from 'react'
import styles from '../styles/Contact.module.scss'
import { useRef } from 'react'
import { useEffect } from 'react';

const Contact = () => {
  const contacts = [
    {
      company: 'LMS',
      phone: '010-1234-5678',
      email: 'lms@example.com',
    },
    {
      company: 'ABC Corp',
      phone: '010-8765-4321',
      email: 'contact@abccorp.com',
    },
  ];

  let boxRef = useRef([]);

  useEffect( () =>{
      let obs = new IntersectionObserver(  // 스크롤 감지 센서
        itemList =>{
            itemList.forEach( (item) =>{
               if( item.isIntersecting ){ // true, false
                item.target.classList.add(styles.show)
               }else{
                item.target.classList.remove(styles.show)
               }
            })
        },{
          threshold : 0.2,
        }
      )

      boxRef.current.forEach( (item) => obs.observe(item) )
      return () => obs.disconnect()
  }, [])

  return (
    <div className={styles.wrap}>
        <h1>여기는 연락처인데 스크롤 샘플이 나온다</h1>

        <div className={styles.box} data-io="up" 
        ref={ (el) => boxRef.current[0] = el }> box up</div>

        <div className={styles.box} data-io="left" 
        ref={ (el) => boxRef.current[1] = el }> box left</div>

        <div className={styles.box} data-io="right" 
        ref={ (el) => boxRef.current[2] = el }> box right</div>

    </div>
  )
}

export default Contact
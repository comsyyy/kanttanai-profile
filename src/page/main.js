import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/Navbar';
import '../cssfile/Mainpage.css'; // import CSS file
import styles from '../cssfile/styles.module.css'; // import CSS module for animations

function Mainpage() {
    const ref = useRef([]);
    const [items, set] = useState([]);
  
    const transitions = useTransition(items, {
      from: {
        opacity: 0,
        height: 0,
        innerHeight: 0,
        transform: 'perspective(600px) rotateX(0deg)',
        color: '#8fa5b6',
      },
      enter: [
        { opacity: 1, height: 80, innerHeight: 80 },
        { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
        { transform: 'perspective(600px) rotateX(0deg)' },
      ],
      leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
      update: { color: '#28d8bf' },
      
    });
  
    const reset = useCallback(() => {
      ref.current.forEach(clearTimeout);
      ref.current = [];
      set([]);
      ref.current.push(setTimeout(() => set(['MY', 'PROJECT', 'COM DEV']), 100));  // เริ่มที่ 500ms
      ref.current.push(setTimeout(() => set(['MY', 'PROJECT']), 1100));           // 1500ms จากเริ่มต้น
      ref.current.push(setTimeout(() => set(['MY', 'PROJECT', 'KANTTANAI BUNTAT']), 2100));  // 2500ms จากเริ่มต้น
    }, []);
  
  
    useEffect(() => {
      reset();
      return () => ref.current.forEach(clearTimeout);
    }, [reset]);
   
    const Boxmedicpage=()=>{
        window.location='/boxmedicp'
    }
    const Webquecpage=()=>{
      window.location='/webquep'
  }
  const Webfilecpage=()=>{
    window.location='/webfilep'
}
    return (
      <div className="mainpage-background">
        <Navbar />
        <div className={styles.container}>
          <div className={styles.main}>
            {transitions(({ innerHeight, ...rest }, item) => (
              <animated.h1 
                className={styles.transitionsItem} 
                style={rest} 
                onClick={reset} 
                key={item}
              >
                <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
                  {item}
                </animated.div>
              </animated.h1>
            ))}
            <div className="button-container">
              <button className="custom-btn btn-1" onClick={Boxmedicpage}>ตู้ยากึ่งอัตโนมัติ</button>
              <button className="custom-btn btn-2" onClick={Webfilecpage}>เว็ปแนบไฟล์vpm</button>
              <button className="custom-btn btn-3" onClick={Webquecpage}>เว็ปแสดงผลคิว</button>
            </div>
            
          </div>
        </div>
      </div>
    );
}

export default Mainpage;

import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import '../cssfile/medic.css'

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function Boxmedicinepage() {
  const parallax = useRef(null);

  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3}>
        
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#879CDE' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
            backgroundColor:'#805E73'
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        />

<ParallaxLayer
  offset={0}
  speed={0.1}
  onClick={() => parallax.current.scrollTo(1)}
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'InfoText',
    textAlign: 'center',
 
    height: '100vh', // ทำให้ ParallaxLayer มีความสูงเต็มหน้าจอ
  }}>
  <h1>ตู้ยากึ่งอัตโนมัติ</h1>
  <p>โปรเจคนี้เป็นโปรเจคของมหาลัยและทําต้นแบบให้กับโรงพยาบาลแห่งหนึ่ง</p>
  <p>*จุดประสงค์เพื่อลดการจ่ายยาผิดชนิดให้กับคนไข้*</p>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '10px',
  }}>
    <img 
      src="photo/boxmedicine.jpg" 
      style={{ 
        width: '100%', // ทำให้รูปภาพเต็มความกว้างของ container
        maxWidth: '400px', // กำหนดขนาดสูงสุด
        height: 'auto', // รักษาสัดส่วน
        borderRadius: '15px',
        objectFit: 'cover',
      }} 
      alt="Box Medicine" 
    />
  </div>
</ParallaxLayer>


        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'white',
            textAlign: 'center',
          }}>
          <h1>มีการแจ้งเตือนแบบ Line Notify</h1>
          <p>ตามรูปภาพ</p>
          <div style={{
  display: 'flex',
  flexDirection: 'column', // แนวตั้งบนหน้าจอเล็ก
  alignItems: 'center',
  gap: '20px',
  padding: '10px',
}}>
  <img 
    src="photo/webbox.jpg" 
    style={{ 
      width: '100%', // ทำให้รูปภาพเต็มความกว้างของ container
      maxWidth: '400px', // กำหนดขนาดสูงสุด
      height: 'auto', // รักษาสัดส่วน
      borderRadius: '15px',
      objectFit: 'cover',
    }} 
    alt="Certificate" 
  />
  <img 
    src="photo/boxmedicinealet.jpg" 
    style={{ 
      width: '100%', // ทำให้รูปภาพเต็มความกว้างของ container
      maxWidth: '400px', // กำหนดขนาดสูงสุด
      height: 'auto', // รักษาสัดส่วน
      borderRadius: '15px',
      objectFit: 'cover',
    }} 
    alt="Get Certificate" 
  />
</div>

        </ParallaxLayer>
          
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'red',
            textAlign: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <h1>รับรางวัล</h1>
          <p>โปรเจคนี้ได้รับรางวัลดีเด่น งานวิจัยสิ่งประดิษฐ์และงานสร้างสรรค์ประจําปี 2566</p>
          <div style={{
  display: 'flex',
  flexDirection: 'column', // แนวตั้งบนหน้าจอเล็ก
  alignItems: 'center',
  gap: '20px',
  padding: '10px',
}}>
  <img 
    src="photo/getcer.jpg" 
    style={{ 
      width: '100%', // ทำให้รูปภาพเต็มความกว้างของ container
      maxWidth: '400px', // กำหนดขนาดสูงสุด
      height: 'auto', // รักษาสัดส่วน
      borderRadius: '15px',
      objectFit: 'cover',
    }} 
    alt="Certificate" 
  />
  <img 
    src="photo/certifle.jpg" 
    style={{ 
      width: '100%', // ทำให้รูปภาพเต็มความกว้างของ container
      maxWidth: '400px', // กำหนดขนาดสูงสุด
      height: 'auto', // รักษาสัดส่วน
      borderRadius: '15px',
      objectFit: 'cover',
    }} 
    alt="Get Certificate" 
  />
</div>

        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

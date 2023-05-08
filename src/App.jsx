import React from 'react'
import styles from './style';

import { NavBar, Hero, Features, Clients, Contact, Footer, Items } from './components'
import { tshirt } from './assets';

const App1 = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} sm:px-10 px-6`}>
        <NavBar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Features />
        <Items />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
)

const App2 = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} sm:px-10 px-6`}>
        <NavBar />
      </div>
    </div>
    <div className={`bg-primary w-full h-full flex flex-col p-10 justify-center items-center`}>
      <h1 className='text-white font-bold sm:text-3xl text-2xl mt-16 sm:mb-12 mb-8'>One Of The BEST Designs</h1>
      <div className='gap-6 md:columns-3 sm:columns-2 columns-1 max-w-7xl'>
        <div className='mb-6'>
          <div className='pink__gradient opacity-20 z-0 absolute w-[20%] h-[30%]'/>
          <img className='rounded-2xl z-10 relative' src={tshirt} />
        </div>
        <div className='mb-6'>
          <div className='pink__gradient opacity-20 z-0 absolute w-[20%] h-[30%]'/>
          <img className='rounded-2xl z-10 relative' src={tshirt} />
        </div>
        <div className='mb-6'>
          <div className='pink__gradient opacity-20 z-0 absolute w-[20%] h-[30%]'/>
          <img className='rounded-2xl z-10 relative' src={tshirt} />
        </div>
        <div className='mb-6'>
          <div className='pink__gradient opacity-20 z-0 absolute w-[20%] h-[30%]'/>
          <img className='rounded-2xl z-10 relative' src={tshirt} />
        </div>
        <div className='mb-6'>
          <div className='pink__gradient opacity-20 z-0 absolute w-[20%] h-[30%]'/>
          <img className='rounded-2xl z-10 relative' src={tshirt} />
        </div>
      </div>
    </div>
  </div>
)

const App3 = () => (
  <div className='bg-primary w-full min-h-screen overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} sm:px-10 px-6`}>
        <NavBar />
      </div>
    </div>
    <div className='flex flex-row w-full justify-center items-center overflow-hidden p-4'>
      <div className='w-48 h-32 left-1/4 top-1/4 pink__gradient absolute opacity-30 z-0'/>
      <div className='flex flex-col justify-center items-center p-6 pb-12'>
        <h1 className='font-bold text-white text-3xl m-6 mt-14'>Clothes Generater</h1>
        <canvas id='canvas' width='512' height='512' className='bg-dimWhite rounded-3xl w-full max-w-xl relative z-10' />
        <div className='flex flex-row items-center m-4 w-full max-w-2xl relative z-10'>
          <div className='absolute m-2 flex justify-center items-center round overflow-hidden border-2 border-[#213a] shdw'><input type='color' value='#e8e8ef' readOnly className='w-8 h-8 scale-150 cursor-pointer' /></div>
          <input type='text' className='bg-white w-full h-12 p-2 pl-14 rounded-l-3xl outline-none' />
          <button className='bg-purple-gradient h-12 px-6 py-2 rounded-r-3xl'>Generate</button>
        </div>
      </div>
      <div className='w-48 h-32 right-1/4 bottom-0 pink__gradient absolute opacity-30 z-0'/>
    </div>
  </div>
)

export {App1, App2, App3}
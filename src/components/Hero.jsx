import React from 'react'
import styles from '../style'
import { title } from '../constants'
import { tshirt } from '../assets'
import { BiChevronRight } from "react-icons/bi"
import { Tshirt } from '../components'

export default function Hero() {
  return (
    <section id='home' className={`flex sm:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-1`}>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppings font-semibold md:text-[72px] text-[52px] text-white md:leading-[100px] leading-[75px]'>
          Revolutionizing<br className='block' />fashion with
          </h1>
        </div>
        <h1 className='font-poppings font-semibold md:text-[96px] text-[64px] text-white md:leading-[100px] leading-[75px] w-full'>
          <span className='text-gradient'>Luxling</span>.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-10 mb-5`}>{title.desc}</p>
        <a href='#' className='flex items-center justify-center gap-1 text-white md:text-xl text-lg font-semibold bg-purple-gradient px-11 py-3 rounded-3xl ml-4 mt-4 mb-8'>Try It <BiChevronRight fontSize='1.8rem' fontWeight='1000' /></a>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className='pink__gradient w-[60%] h-[50%] absolute opacity-70' />
        <Tshirt tex={tshirt} width='400px' height='480px' />
      </div>
    </section>
  )
}

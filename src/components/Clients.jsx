import React, { useEffect, useState } from 'react'
import Client from './Client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Clients = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return isMobile ? (
  <section id='clients' className='mx-8 mt-20 bg-item-gradient p-8 sm:px-4 px-0 items-center rounded-3xl'>
    <h1 className='mb-8 font-bold text-3xl text-white mx-8'>What People Say About US</h1>
    <Swiper
        className='scale-[1.05]'
        spaceBetween='10%'
        pagination={{clickable:true}}
        slidesPerView={1}
        grabCursor={true}
        centeredSlides={true}
    >
        <SwiperSlide><Client n='nmrood' s={3} d='kbhcqbjdhb jbqdjhc bjdhqbcjh bjhdbjhqdbcjhqbdc kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' /></SwiperSlide>
        <SwiperSlide><Client n='3bdslam' s={4} d='kbhcqbjdhb jbqdjhc bjhdbjhqdbcjhqbdc kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' /></SwiperSlide>
        <SwiperSlide><Client n='jben tarf bo 10' s={5} d='kbhcqbjdhb jbqdjhc bjdhqbcjh kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' /></SwiperSlide>
        <SwiperSlide><Client n='nmrood' s={3} d='kbhcqbjdhb jbqdjhc bjdhqbcjh bjhdbjhqdbcjhqbdc kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' /></SwiperSlide>
        <SwiperSlide><Client n='3bdslam' s={4} d='kbhcqbjdhb jbqdjhc bjhdbjhqdbcjhqbdc kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' /></SwiperSlide>
        <SwiperSlide><Client n='jben tarf bo 10' s={5} d='kbhcqbjdhb jbqdjhc bjdhqbcjh kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' /></SwiperSlide>
        <SwiperSlide><Client n='ka3ba bira' s={4} d='kbhcqbjdhb jbqdjhc bjdhqbcjh kbkq kjq hqkjdh kjhdqkcjhd kh' /></SwiperSlide>
    </Swiper>
  </section>
  ):(
    <section id='clients' className='mx-8 mt-20 flex flex-col bg-item-gradient p-8 sm:px-4 px-0 items-center rounded-3xl'>
      <h1 className='mb-8 font-bold text-3xl text-white mx-8'>What People Say About US</h1>
      <div className='hidescrollbar flex flex-row gap-6 w-full overflow-hidden overflow-x-scroll rounded-xl'>
        <Client n='nmrood' s={3} d='kbhcqbjdhb jbqdjhc bjdhqbcjh bjhdbjhqdbcjhqbdc kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' />
        <Client n='3bdslam' s={4} d='kbhcqbjdhb jbqdjhc bjhdbjhqdbcjhqbdc kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' />
        <Client n='jben tarf bo 10' s={5} d='kbhcqbjdhb jbqdjhc bjdhqbcjh kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' />
        <Client n='nmrood' s={3} d='kbhcqbjdhb jbqdjhc bjdhqbcjh bjhdbjhqdbcjhqbdc kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' />
        <Client n='3bdslam' s={4} d='kbhcqbjdhb jbqdjhc bjhdbjhqdbcjhqbdc kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' />
        <Client n='jben tarf bo 10' s={5} d='kbhcqbjdhb jbqdjhc bjdhqbcjh kbkq jkdhqckjh kjq hqkjdh kjhdqkcjhd kh' />
        <Client n='ka3ba bira' s={4} d='kbhcqbjdhb jbqdjhc bjdhqbcjh kbkq kjq hqkjdh kjhdqkcjhd kh' />
      </div>
    </section>
  )
}

export default Clients
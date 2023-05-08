import React from 'react'
import { tshirt } from '../assets'
import Item from './Item'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import { AiFillPlusCircle } from "react-icons/ai"

const Items = () => (
  <section id='items' className='w-full text-center overflow-hidden'>
    <div className='pink__gradient absolute -translate-x-1/2 left-1/2 sm:w-[500px] w-full h-[300px] opacity-10 z-0' />
    <h1 className='text-3xl font-bold text-white mt-10'>Latest</h1>
    <Swiper
        className='flex justify-center items-center'
        pagination={{clickable:true}}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      //   xs: "480px",
      // ss: "620px",
      // sm: "768px",
      // md: "1060px",
      // ls: "1200px",
      // xl: "1700px"
        grabCursor={true}
        centeredSlides={true}
        modules={[Pagination]}
    >
        <SwiperSlide className='flex items-center justify-center mb-10'><Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' /></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center mb-10'><Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' /></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center mb-10'><Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' /></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center mb-10'><Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' /></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center mb-10'><Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' /></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center mb-10'><Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' /></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center mb-10'><Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' /></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center mb-10'><Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' /></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center mb-10'><Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' /></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center mb-10'><Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' /></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center mb-10'><Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' /></SwiperSlide>
        <SwiperSlide className='flex items-center justify-center mb-auto mt-auto'>
          <div className='cursor-pointer px-4 py-10 flex flex-col justify-center items-center rounded-3xl bg-item-gradient shdw m-8 md:w-[280px] w-[320px] md:max-w-[340px] max-w-[360px] mt-auto'>
            <AiFillPlusCircle className='w-full' fill='#fffa' size='100px' />
            <h2 className='text-2xl font-bold m-1 mt-6 text-white text-center'>See MORE</h2>
          </div>
        </SwiperSlide>
    </Swiper>
  </section>
)

function Items2() {
  return (
    <section id='items' className='flex my-6 flex-col text-center'>
      <h1 className='text-3xl font-bold text-white m-8'>Exemples</h1>
      <div className='flex flex-row flex-wrap md:gap-6 gap-10 justify-center'>
        <Item n="Ex1" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' />
        <Item n="Ex2" x={tshirt} d='hsdb b jhsdbcjcsdcdscsdcsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' />
        <Item n="Ex3" x={tshirt} d='hsdb jsdhbchjsdhch csdcdscsdcb jhsdbcjsdb jsdbcsdcdscsdchcbj bsdjhbsd sdcsdcezfz' />
        <Item n="Ex4" x={tshirt} d='hsdb jsdhbchjsdhch b jhsdbcjsdb hsdb bsdjhbsd sdcsdcezfz' />
        <Item n="Ex5" x={tshirt} d='hsdb jsdhbchjcsdcdscsdcsdhch b hsdb jsdbhcbj bsdjhbsd scsdcdscsdcdcsdcezfz' />
        <Item n="Ex6" x={tshirt} d='hsdb jsdhbchjsdhcsdcdscsdcch b jhsdbcjsdb hsdb jsdbhcbj bsdjhbsd sdcsdcezfz' />
      </div>
    </section>
  )
}

export default Items
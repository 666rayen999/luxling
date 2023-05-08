import React from 'react'
import { tshirt } from '../assets'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

export default function Client({n, s, d}) {
  return (
    <div className='min-w-[320px] h-[220px] bg-[#dcf1] p-5 rounded-xl sm:backdrop-blur-none backdrop-blur-md'>
        <div className='flex flex-row w-full mb-6'>
            <img src={tshirt} alt={n} className='w-[72px] h-[72px] mr-3 round' />
            <div className='flex flex-col'>
                <h2 className='text-white mt-2 font-semibold'>{n}</h2>
                <div className='flex flex-row'>
                    { [...Array(Math.min(s, 5))].map((e, i) => <AiFillStar key={i} fill='#baf'/>) }
                    { [...Array(5-Math.min(s, 5))].map((e, i) => <AiOutlineStar key={i} fill='#baf'/>) }
                </div>
            </div>
        </div>
        <div>
            <p className='text-dimWhite font-light'>{d}</p>
        </div>
    </div>
  )
}

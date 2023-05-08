import React from 'react'

const Item = ({n, x, d}) => (
    <div className='px-4 py-6 rounded-3xl bg-item-gradient shdw m-8 md:w-[280px] w-[320px] md:max-w-[340px] max-w-[360px]]'>
        <img src={x} alt='tshirt' className='rounded-2xl' />
        <h2 className='text-2xl font-bold m-1 mt-6 text-white text-center'>{n}</h2>
        <p className='text-md text-dimWhite font-light'>{d}</p>
    </div>
)

export default Item
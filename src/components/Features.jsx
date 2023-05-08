import React from 'react'
import styles, { layout } from '../style'
import { benefits, features } from '../constants'

export default function Features() {
  return (
    <section id='features' className={`flex justify-between gap-10 sm:flex-row sm:mx-10 mx-6 flex-col sm:mt-10 mt-0 p-10 bg-dimm rounded-2xl`}>
      <div className={`${layout.sectionInfo} flex w-[100%]`}>
        <h3 className={`${styles.heading3}`}>Features</h3>
        <ul className='w-[100%] list-disc'>
          {features.map((x, i) => (
            <li key={i} className={`${styles.desc}`}>{x}</li>
          ))}
        </ul>
      </div>
      <div className={`${layout.sectionInfo} flex w-[100%]`}>
        <h3 className={`${styles.heading3}`}>Benefits</h3>
        <ul className='w-[100%] list-disc'>
          {benefits.map((x, i) => (
            <li key={i} className={`${styles.desc}`}>{x}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

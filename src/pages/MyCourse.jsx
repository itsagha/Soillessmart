import React from 'react'
import HomeKursus from '../components/HomeKursus'

export default function MyCourse({ haveCourse = false }) {
  if (haveCourse) {
    return (
      <>
        <h1 className='text-center text-3xl pt-24 pb-48 font-bold text-secondary'>Kursus yang sudah dibeli</h1>
        <HomeKursus />
      </>
    );
  } else {
    return (
      <h1 className='text-center text-xl py-[28rem] text-tertiary'><i>Anda tidak memiliki course, silahkan pergi ke halaman kursus untuk membeli.</i></h1>
    );
  }
}

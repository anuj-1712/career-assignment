import React from 'react'
import animatedImg from "../assets/animated img.png"

export default function About() {
  return (
    <div className='flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center my-12 mx-4'>
      <div className='flex flex-col gap-6 md:w-[45%] w-10/12'>
      <h3 className='md:text-left text-center font-sans text-blue-700 font-bold text-3xl lg:text-5xl'>About Company</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum recusandae porro itaque quidem, dolorem officiis? Quibusdam voluptates, magni vel officia sunt autem rem. Veritatis, aspernatur ex officiis aliquam, alias corrupti earum, nisi hic deserunt ducimus ipsum ipsam? Magnam laborum animi exercitationem odit praesentium, quam libero laboriosam quod debitis voluptatem earum.</p>
      <button className='hidden md:block bg-blue-500 text-white font-medium rounded-md hover:text-blue-500 hover:bg-white hover:border-2 hover:border-blue-500 h-9 w-32'>Discover More</button>
      </div>
      <img src={animatedImg} alt="animated image of recruitement process" className='w-10/12 md:w-[45%] min-h-[330px] max-h-[450px] min-w-[260px]'/>
      <button className='md:hidden block bg-blue-500 text-white font-medium rounded-md hover:text-blue-500 hover:bg-white hover:border-2 hover:border-blue-500 h-9 w-32'>Discover More</button>
    </div>
  )
}

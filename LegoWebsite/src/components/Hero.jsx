import React from 'react'

function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
      <p>Imagine, Create, Build.</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-8xl'>BRICK<span className='text-yellow-400'>TOPIA</span></h1>
      <p className='text-sm md:text-base font-light'>
      Diving into <span className="text-yellow-400 font-medium">LEGO</span> is diving into a world without bounds. Every piece clicks to open endless creative paths.
       With every snap, colors and designs blend to build cities, creatures, and more. LEGO invites everyone to <span className='font-medium text-yellow-400'>explore </span> and <span className='font-medium text-yellow-400'>create </span>, turning ideas into vibrant realities, one brick at a time.
      </p>
      <button className='px-8  py-4 rounded-md border border-yellow-400 border-solid blueShadow duration-200'><p>START BUILDING</p></button> 
      </div>
  )
}

export default Hero

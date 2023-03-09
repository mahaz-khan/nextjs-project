import React from 'react'
import Image from 'next/image'
import firstPicture from "../../public/assets/firstPicture.png"
export default function EymPerfume() {
  return (
    <div>
        
   <div className='flex w-[100%] items-center  bg-[#F7F1E8] border border-b-black flex-col-reverse md:flex-row'>
   <div className='w-[85%] md:w-[50%]'>
    <Image src={firstPicture} alt='khamakha'  />
   </div>
   <div className='flex w-[100%] md:w-[50%] items-center flex-col justify-center gap-5 py-5 md:py-0'>
   <p className='text-[20px]'>Eden,the blissful one.</p>
   <p className='text-[16px] text-center'>Our newest sell-out fragrance is back in stock baby!</p>
   <button className='text-white bg-black rounded-[35px] px-4 py-2 text-[18px] border border-black hover:bg-[#ff4] hover:text-black '>Shop Eden</button>
   </div>
   </div>

    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import Hero from "../../public/assets/femalepic.png"
export default function MainPararaph() {
  return (
    <div className='max-w-[1440px] mx-auto'>

    <p className='bg-[#F7F1E8] pt-7 px-7 pb-20 text-[20px] leading-[24px] border-b-black border-b-[1px]'>
    Our 100% natural fragrance has been perfected over years to <br></br> bring both emotional and physical healing properties. Powered by <br></br> aromatherapy.  
    </p>
     
     <div className='flex w-[100%]  border-b-black border-b-[1px] border-t-[1px] flex-col md:flex-row '>
     <div className='flex flex-col items-center justify-center gap-6 bg-[#C5A9B3] w-[100%] md:w-[50%] py-5 md:py-0'>
       <p className='text-[26px] sm:text-[28px] md:text-[36px] text-center leading-9'>Eym + <br></br>
       Lucy Williams</p>
       <p className='text-[16px] sm:text-[18px] text-center'>Murano-glass, refillable candles. <br></br> Designed with Lucy Williams to be Burnt, <br></br> refilled and kept forever.</p>
       <button className='text-white bg-black rounded-[35px] px-4 py-2 text-[16px] sm:text-[18px] border border-black hover:bg-[#ff4] hover:text-black '>Shop the collection</button>
     </div>

    <div className=' w-[100%] md:w-[50%] h-[550px] border-l-black border-l-[1px] hidden sm:flex'>
    <Image src={Hero} alt=""  />
    </div>

     </div>

    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import PhilosophyIcon from "../../public/assets/PhilosophyIcon.svg"
import PhilosophyPerfume from "../../public/assets/PhilosophyPerfume.svg"
import PhilosophyHeart from "../../public/assets/PhilosophyHeart.svg"
import GirlSleeping from "../../public/assets/GirlSleeping.png"
export default function OurPhilosophy() {
  return (
    <div className='max-w-[1440px] mx-auto bg-[#F7F1E8]'>

    <div className='px-0 py-7 lg:p-7 border-b-[1px] border-b-black'>
      <p className='text-[20px] pb-16 lg:pb-28 px-4 sm:px-7 lg:px-0'>Our philosophy</p>
      <div className='lg:flex gap-[102px] block'>
        <div className='flex px-4 sm:px-7 lg:px-0 flex-col gap-7 pb-6 border-b border-black lg:border-[0px]  lg:pb-0'>
        <Image src={PhilosophyIcon} alt="" height={32} width={70}/>
        <div className='flex flex-col gap-3'>
            <p className='text-[18.2px] sm:text-[20px]'>1. Only 100% natural fragrance</p>
            <p className='text-[18.2px] sm:text-[19.5px] leading-6 sm:leading-none'>No chemicals, no scent boosters and <br className='hidden lg:block'></br> binders. Just pure essential oils.</p>
        </div>
        </div>

        <div className='flex px-4 sm:px-7 lg:px-0 flex-col gap-7 pt-6 lg:pb-0 border-b border-black lg:border-[0px] pb-6 lg:pt-0'>
        <Image src={PhilosophyPerfume} alt="" height={32} width={70}/>
        <div className='flex flex-col gap-3'>
            <p className='text-[18.2px] sm:text-[20px]'>2. The power of natural perfume</p>
            <p className='text-[18.2px] sm:text-[19.5px] leading-6 sm:leading-none'>Botanical based perfumes perfected <br className='hidden lg:block'></br> to bring both emotional and physical <br className='hidden lg:block'></br> healing properties.</p>
        </div>
        </div>

        <div className='flex px-4 sm:px-7 lg:px-0 flex-col gap-7 pt-6 lg:pb-0  pb-6 lg:pt-0'>
        <Image src={PhilosophyHeart} alt="" height={32} width={70}/>
        <div className='flex flex-col gap-3'>
            <p className='text-[18.2px] sm:text-[20px]'>2. Created consciously</p>
            <p className='text-[18.2px] sm:text-[19.5px] leading-6 sm:leading-none'>Sustainably sourced ingredients <br className='hidden lg:block'></br> fragrance and packaging, always. <br className='hidden lg:block'></br> Proudly British made.</p>
        </div>
        </div>

      </div>
    </div>
     
     <div className='pl-5 sm:pl-7 border-b-[1px] border-b-black w-[100%] flex md:flex-col-reverse lg:flex-row'>

        <div className='flex flex-col gap-14 lg:w-[50%] md:w-[100%] py-7'>
        <p className='text-[15.7px] sm:text-[18px]'>Find the right scent for your mood ↓</p>
        <div className='text-[26px] leading-7 sm:text-[40px] sm:leading-[44px]'>
            <p>Feel Sleepy</p>
            <p>Feel Joyful</p>
            <p>Feel Relaxed</p>
            <p>Feel Uplifted</p>
            <p>Feel Grounded</p>
            <p>Feel Zen</p>
            <p>Feel Blissful</p>
        </div>
        </div>

        <div className='w-[50%] border-l-[1px] border-l-black p-8 hidden lg:block '>
        <Image className='h-[480px]' src={GirlSleeping} alt=""/>
        </div>

     </div>

</div>
    
  )
}

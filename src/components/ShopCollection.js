import React from 'react'
import Image from 'next/image'
import Hero from "../../public/assets/Bowl.png"
import bowl from "../../public/assets/SecondBowl.png"
import FirstSoap from "../../public/assets/FirstSoap.png"
import Rest from "../../public/assets/Rest.png"
export default function ShopCollection() {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <div className='px-[30px] pt-[30px] pb-10 bg-[#F7F1E8] flex flex-col gap-10 border-b-[1px] border-b-black'>
        <p className='text-[20px] pb-[8px]'>Shop collection</p>
           <div className='flex flex-col items-center md:items-start md:flex-row gap-7'>

            <div className='flex flex-col gap-3 '>
            <Image className='hover:border border-black cursor-pointer' src={Hero} alt="" height={32} width={275} />
            
            <div className='leading-[28px] '>
            <p className='text-[20px]'>Eym + Lucy Williams</p>
            <p className='text-gray-500 text-[19px]'>Refillabe candle (Rest)</p>
            <p className='text-gray-500 text-[18px]'>£150.00</p>
            </div>
          
            </div>

           <div className='flex flex-col gap-3'>
           <Image className='hover:border border-black cursor-pointer' src={bowl} alt="" height={32} width={275} />
           <div className='leading-[28px]'>
            <p className='text-[20px]'>Eym + Lucy Williams</p>
            <p className='text-gray-500 text-[18px]'>Refillabe candle (Eden)</p>
            <p className='text-gray-500 text-[18px]'>£150.00</p>
            </div>
           </div>

           <div  className='flex flex-col gap-3'>
           <Image className='hover:border border-black cursor-pointer' src={FirstSoap} alt="" height={32} width={275} />
           <div className='leading-[28px]'>
            <p className='text-[20px]'>Eden</p>
            <p className='text-gray-500 text-[19px]'>Candle refill</p>
            <p className='text-gray-500 text-[18px]'>£45.00</p>
            </div>
           </div>

           <div  className='flex flex-col gap-3'>
           <Image className='hover:border border-black cursor-pointer' src={Rest} alt="" height={32} width={275} />
           <div className='leading-[28px]'>
            <p className='text-[20px]'>Rest</p>
            <p className='text-gray-500 text-[19px]'>Candle refill</p>
            <p className='text-gray-500 text-[18px]'>£45.00</p>
            </div>
           </div>
           </div>

           <div className='flex flex-col items-center md:items-start md:flex-row gap-7 w-[100%] md:w-[74.5%]'>

           <div  className='flex flex-col gap-3'>
           <Image className='hover:border border-black cursor-pointer' src={Rest} alt="" height={32} width={275} />
           <div className='leading-[28px]'>
            <p className='text-[20px]'>Home</p>
            <p className='text-gray-500 text-[19px]'>Candle refill</p>
            <p className='text-gray-500 text-[18px]'>£45.00</p>
            </div>
           </div>
           
           <div  className='flex flex-col gap-3'>
           <Image className='hover:border border-black cursor-pointer' src={Rest} alt="" height={32} width={275} />
           <div className='leading-[28px]'>
            <p className='text-[20px]'>Create</p>
            <p className='text-gray-500 text-[19px]'>Candle refill</p>
            <p className='text-gray-500 text-[18px]'>£45.00</p>
            </div>
           </div>

           <div  className='flex flex-col gap-3'>
           <Image className='hover:border border-black cursor-pointer' src={Rest} alt="" height={32} width={275} />
           <div className='leading-[28px]'>
            <p className='text-[20px]'>Soul</p>
            <p className='text-gray-500 text-[19px]'>Candle refill</p>
            <p className='text-gray-500 text-[18px]'>£45.00</p>
            </div>
           </div>

           </div>
        </div>
    </div>
  )
}

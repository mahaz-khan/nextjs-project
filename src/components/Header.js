import React from 'react'
import Image from 'next/image'
import Logo from "../../public/assets/ewm.svg"

export default function Header() {
  return (

    <div className='max-w-[1440px] mx-auto'>

 <div className='flex bg-[#F7F1E8] justify-between p-4 items-center border border-b-black'>
<div className='flex  gap-[160px] sm:gap-[8rem] items-center pl-[10px]'>  

<svg className='lg:hidden' xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg>

  <div className='hidden gap-[2.0rem] text-[18px]  lg:flex'>
    <p>Shop</p>
    <p>Philosophy</p>
    <p>Gifting</p>
    <p>Journal</p>
    <p>Our Story</p>
  </div>

  <div>
  <Image src={Logo} height={70} width={70} alt="" />
  </div>
   
  </div> 
  <p className='pr-[10px] text-[18px] hidden sm:block'>Cart</p>
  </div> 


    </div>
  
      
    
     
  )
}

import React from 'react'
import Image from 'next/image'
import firstPicture from "../../public/assets/firstPicture.png"
import VogueLogo from "../../public/assets/VogueLogo.svg"
import Grazia from "../../public/assets/Grazia.svg"
import Elle from "../../public/assets/Elle.svg"
import Bazaar from "../../public/assets/Bazaar.svg"
import Cup from "../../public/assets/Cup.jpeg"
import CoverImage from "../../public/assets/CoverImage.jpg"
import MiniCandle from "../../public/assets/MiniCandle.jpg"
import EymAbout from "../../public/assets/EymAbout.jpg"
export default function Vogue() {
  return (
    <div className='max-w-[1440px] mx-auto bg-[#F7F1E8]'>
          <div className='pl-4 sm:pl-7  border-b-[1px] border-b-black w-[100%] flex md:flex-col-reverse lg:flex-row'>

<div className='flex flex-col justify-between   lg:w-[50%] md:w-[100%] py-7'>
<div className='flex flex-col gap-14 '>
<p className='text-[18px]'>What they've said</p>

<p className='sm:text-[20px] text-[16px]'>"Totally natural and non-toxic, this Eym candle offers a <br className='hidden sm:block'></br> mellowing scent – think frankincense and patchouli – without <br className='hidden sm:block'></br> the compromising your immediate environment."
</p>
</div>
<div className='flex gap-5 w-12 sm:w-20 sm:gap-10 pt-56 lg:pt-0'>
<Image src={VogueLogo} alt="" height={32} width={90}/>
<Image  src={Grazia} alt="" height={32} width={90}/>
<Image src={Elle} alt="" height={32} width={90}/>
<Image src={Bazaar} alt="" height={32} width={90}/>
</div>
</div>

<div className='w-[50%] border-l-[1px] border-l-black p-8 hidden lg:block'>
<Image className='h-[480px]' src={firstPicture} alt=""/>
</div>

</div>

<div className='p-7 border-b-[1px] border-b-black flex flex-col gap-32 lg:gap-60 '>
  <p className='text-[18px]'>Share your journey #eymnaturals</p>

  <div className='flex flex-col gap-5'>
    <p className='text-[19px]'>Follow us @eymnaturals</p>
    <div className='grid gap-5 grid-cols-2  lg:grid-cols-4 lg:gap-8 sm:gap-5 sm:grid-cols-2'>
    <Image className='h-[100%] sm:h-[300px] md:h-[400px] lg:h-[300px] w-[100%]' src={Cup} alt="" />
    <Image className='h-[100%] sm:h-[300px] md:h-[400px] lg:h-[300px] w-[100%]' src={CoverImage} alt="" />
    <Image className='h-[100%] sm:h-[300px] md:h-[400px] lg:h-[300px] w-[100%]' src={MiniCandle} alt="" />
    <Image className='h-[100%] sm:h-[300px] md:h-[400px] lg:h-[300px] w-[100%]' src={EymAbout} alt="" />
    </div>
  </div>
</div>
    </div>
  )
}

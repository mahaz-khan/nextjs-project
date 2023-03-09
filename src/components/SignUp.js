import React from 'react'

export default function SignUp() {
  return (
    <div className='max-w-[1440px] mx-auto '>
        <div className='text-center bg-[#FFFF44]  pb-9 border-b-[1px] border-b-black'>
            <p className='pb-14 pt-14 sm:leading-[46px] sm:text-[30px] text-[19px] lg:text-[42px] font-[500] lg:font-normal'>Join the family — sign up to our <br></br> newsletter for updates on all things Eym.</p>
            <button className='text-white bg-black rounded-[35px] px-4 py-2 text-[18px] border border-black hover:bg-[#ff4] hover:text-black '>Sign up now</button>
        </div>   

        <div className='bg-[#F7F1E8] p-7 pr-16 '>
            <div className='lg:flex justify-between block'>
            <p className='text-[18px]'>Elevate your mood</p>
            <div className='block lg:flex gap-16'>
                <div className='pb-12 lg:pb-0 pt-16 lg:pt-0'>
                    <p className='text-[18px] font-semibold'>Newsletter</p>
                    <p className='text-[18px]'>Join our newsletter to <br className='hidden lg:block'></br> receive 15% off your first <br className='hidden lg:block'></br> order and only the good <br className='hidden lg:block'></br> news.</p>
                    <div className='pt-[15px]'>
                        <form >
                            <span>
                            <input className=' p-2 w-[100%] lg:w-[120px] border-[1px] border-black bg-[#F7F1E8] ' placeholder='First Name' ></input>                                              
                            <input className=' p-2 w-[100%] lg:w-[120px] border-[1px] border-t-[0px] lg:border-t-[1px]  border-l-[1px] lg:border-l-[0px] border-black bg-[#F7F1E8]'  placeholder='Last name'></input>  
                            </span>            
                        </form>
                        <input className='p-2 w-[100%] lg:w-[240px] border-[1px] border-t-[0px]  border-black bg-[#F7F1E8]' placeholder='Email'></input>    
                    </div>
                    <button className='text-white bg-black w-[100%] lg:px-[94px] py-5 text-[12px] border border-black hover:bg-[#ff4] hover:text-black '>Subscribe</button>
                </div>

                <div className='flex gap-24 sm:gap-52 md:gap-72 lg:gap-16'>
                <div>
                <p className='text-[18px] font-semibold'>Help</p>
                 <div className='text-[16px] sm:text-[18px]'>
                   <p>Account</p>
                   <p>Shipping</p>
                   <p>Returns</p>
                   <p>Contacts</p>
                   <p>Stockists</p>
                   <p className='text-[15.6px]'>Covid-19</p>
                   <p>Sign-up</p>
                 </div>
                </div>

                <div>
                <p className='text-[18px] font-semibold'>Follow us</p>
                 <div className='text-[18px] sm:text-[18px]'>
                   <p>Instagram</p>
                   <p>Facebook</p>
                 </div>
                </div>
                </div>
            </div>
            </div>

            <div className='flex items-center justify-between pr-14 pt-36 gap-5'>
                <p className='text-gray-400 text-[16px] md:text-[18px]'>© Eym Naturals</p>
                <div className=' md:flex gap-28 text-gray-400 text-[16px] md:text-[18px]'>
                <p>Privacy Policy<span className=' md:hidden'>___</span><br className='hidden md:block'></br>
                   Terms & Conditions
                </p>
                <div className=' items-center gap-2 hidden md:flex'>
                    <p>We accept</p>
                    <svg xmlns="http://www.w3.org/2000/svg " width="50px" height="15px" viewBox="0 0 33.71 12.26" class="payment-icon" data-v-72022bdc=""><title data-v-72022bdc="">icon-visa</title>  fill: <path   id="payment_visa" data-name="payment/visa" d="M128.13,107.88l1.09-3.33s.22-.68.36-1.13l.19,1,.63,3.42h-2.27Zm-21.5-1.21.28,1.64,2.67-8.09h2.9l-4.3,11.86h-2.89l-2.36-10a.65.65,0,0,0-.25-.39,10.33,10.33,0,0,0-2.68-1.18l0-.25h4.39a1.17,1.17,0,0,1,1.24,1l1,5.45Zm6.94-6.55h2.73L114.59,112h-2.73l1.71-11.89Zm17.93.1h-2.11a1.35,1.35,0,0,0-1.43,1l-4,10.89h2.86l.58-1.78h3.49c.09.42.34,1.78.34,1.78h2.53Zm-7,.28a6.08,6.08,0,0,0-2.44-.5c-2.7,0-4.6,1.61-4.62,3.92,0,1.7,1.36,2.66,2.39,3.23s1.42.95,1.42,1.47c0,.8-.85,1.16-1.63,1.16a5,5,0,0,1-2.57-.62l-.34-.19-.38,2.66a7.69,7.69,0,0,0,3,.63c2.87,0,4.74-1.6,4.77-4.07,0-1.35-.72-2.38-2.28-3.23-1-.55-1.54-.91-1.54-1.47s.51-1,1.56-1a4.25,4.25,0,0,1,2,.45l.26.14.38-2.58Z " transform="translate(-100 -100)" data-v-72022bdc="" fill="#757575"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="15px" viewBox="0 0 26.36 15.94" class="payment-icon" data-v-72022bdc=""><title data-v-72022bdc="">icon-master</title> <path  id="payment_master" data-name="payment/master" d="M113.16,114a8,8,0,0,1,0-12l0,0h0a8,8,0,0,1,0,12l0,0Zm-5.19,2A8,8,0,1,1,111.88,101a9.53,9.53,0,0,0,0,13.91,8,8,0,0,1-3.9,1Zm10.42,0a8,8,0,0,1-3.9-1,9.53,9.53,0,0,0,0-13.91,8,8,0,1,1,3.91,14.92Z" transform="translate(-100 -100)" data-v-72022bdc="" fill="#808080"></path></svg>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

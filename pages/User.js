import Head from 'next/head'
import Link from 'next/link';
import Select from 'react-select';
import styles from '@/styles/Home.module.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { useState } from 'react';
const departmentOptions = [
  { value: 'Tamil', label: 'Tamil',  },
  { value: 'English', label: 'English' },
  { value: 'Science', label: 'Science' },
  { value: 'Maths', label: 'Maths',  },
  { value: 'Computer', label: 'Computer' },
  { value: 'Maths', label: 'Maths' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Social Science', label: 'Social Science' },
  { value: 'Sports', label: 'Sports' },
]

const designationOptions = [
  { value: 'Junior Staff', label: 'Junior Staff' },
  { value: 'Senior Staff', label: 'Senior Staff' },
]






export default function Home() {
  const [modal,setModal] = useState(false)

  function showModal(){
    setModal(!modal)
  }
  return (
    <>
      <Head>
        <title>School Talkz</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../images/logo.png" />
      </Head>
<main class='w-cover flex justify-around p-8'>
<div className='w-2/12 flex-col items-center'>
<Sidebar/>
</div>
<div className='w-4/5 rounded-5xl'>
  <div>
<Header/>
{/* <Studentheader/> */}
  </div>
  <div>
  <div className='relative rounded-b-3xl w-full flex-col bg-myBlue p-4 lg:h-full lg:w-full'>

<div className='block bg-gradient-to-r from-[#0A1122] to-[#03194D] rounded-xl pb-2 mb-10'>
<div className='lg:flex block text-white items-center w-full'>

<div className='w-20 h-20 rounded-full ml-2'>
  <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-full cursor-pointer' />
<div>

</div>

</div>
<div className='flex justify-around lg:w-3/5 w-4/5 mt-2'>
<div className='w-1/3'>
<h4 className='text-base mb-1 font-bold'>Vinoth K.</h4>
<p className='text-xs mb-1 text-greyColor'>Junior Staff</p>
<span className='flex items-center text-xs text-greyColor'>
<img src="../../images/Briefcase.svg" alt="" />
Global CBSE School, CHN
</span>
</div>
<div className='w-2/5 lg:1/4 block'>
<h4 className='text-base mb-1 font-bold'>Contact Details</h4>

<span className='flex items-center text-xs text-greyColor'>
<img src="../../images/Phone.svg" alt="" />
9876543210
</span>
<span className='flex items-center text-xs text-greyColor'>
<img src="../../images/EnvelopeSimple.svg" alt="" />
vinothk@nextgenschool.in
</span>
</div>
</div>
<div className='hidden lg:w-2/5 lg:flex lg:justify-end rounded-xl'>
<img src="../../images/circle.svg" alt="" className='rounded-xl' />
</div>

</div>
<div className='w-full flex items-center text-white justify-around mt-4'>
<div className='block items-center'>
  <h3 className='text-base'>5.9k</h3>
  <p className='text-base'>Followers</p>
</div>
<div className='block items-center'>
  <h3 className='text-base'>5.9k</h3>
  <p className='text-base'>Creations</p>
</div>
<div className='block items-center'>
  <h3 className='text-base'>5.9k</h3>
  <p className='text-base'>Achievements</p>
</div>
<div className='block items-center'>
  <h3 className='text-base'>5.9k</h3>
  <p className='text-base'>Stars</p>
</div>
</div>
</div>

      <div className='block lg:flex w-full mt-4 justify-around'>
        <div className='block w-full bg-white rounded-md gap-2 mb-1 lg:w-2/5 h-max'>
          <div className='flex justify-between p-3'>
            <div className='flex justify-between'>
              <div className='w-16 h-16 rounded-full mr-3'>
                <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-full object-cover' />
              </div>
              <div>
                <h3 className='text-base'>Mr. Vinod K (Computer Staff)</h3>
                <p className='text-base'>
                  <a href="#" className='text-[#d86500] no-underline'>Global CBSE School, CHN</a>
                </p>
                <p className='text-base text-[#888888]'>1 hours ago</p>
              </div>
            </div>
            <div>
              <img src="../../images/DotsThree.svg" alt="" />
            </div>
          </div>
          <div >
            <p className='text-sm'>John is very obedient on Students if he is not hungry</p>
          </div>
          <div className='w-full h-40'>
            <img src="../../images/classroom.jpg" alt="" className='w-full h-full object-cover' />
          </div>
          <div className='block'>
            <div className='lg:flex block  my-2'>
              <h4 className='ml-1 border border-solid  border-none text-sm p-y-1 mt-2 px-3 rounded-md bg-[#fdf3e9] text-[#e06522] cursor-pointer'>Drawing</h4>
              <h4 className='ml-1 border border-solid  border-none text-sm p-y-1 mt-2 px-3 rounded-md bg-[#fdf3e9] text-[#e06522] cursor-pointer'>Art</h4>
              <h4 className='ml-1 border border-solid  border-none text-sm p-y-1 mt-2 px-3 rounded-md bg-[#fdf3e9] text-[#e06522] cursor-pointer'>Brushes</h4>
            </div>

            <div className='flex justify-around my-4'>
              <span className='flex items-center cursor-pointer'>
                <img src="../../images/ThumbsUp.svg" alt="" />
                <p className='text-sm'>15 Liked</p>
              </span>

              <span className='flex items-center cursor-pointer'>
                <img src="../../images/ChatCircleText.svg" alt="" />
                <p className='text-sm'>15 Liked</p>
              </span>

              <span className='flex items-center cursor-pointer'>
                <img src="../../images/BookmarkSimple.svg" alt="" />
                <p className='text-sm'>15 Liked</p>
              </span>
            </div>

            <div className='flex w-full justify-between border border-solid border=[#eeee] py-1 px-3 mt-3 rounded-md'>
              <input type="text" placeholder="Write a comment" className='border-none outo
              line-none' />
              <button className='border-none bg-none'>Comment</button>
            </div>
          </div>
        </div>

        <div className='block w-full bg-white rounded-md gap-2 mb-1 lg:w-2/5 h-max'>
          <div className='flex justify-between p-4'>
            <div className='flex justify-between'>
              <div className='w-16 h-16 rounded-full mr-3'>
                <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-full object-cover' />
              </div>
              <div>
                <h3 className='text-base'>Mr. Vinod K (Computer Staff)</h3>
                <p className='text-base'>
                  <a href="#" className='underline-none text-[#d86500]'>Global CBSE School, CHN</a>
                </p>
                <p className='text-base text-[#888888]'>1 hours ago</p>
              </div>
            </div>
            <div>
              <img src="../../images/DotsThree.svg" alt="" />
            </div>
          </div>
          <div>
            <p className='text-sm'>John is very obedient on Students if he is not hungry</p>
          </div>
          <div className='h-20 p-4'>
            <div className='flex items-center'>
              <input type="radio" name="same" id="" className='mr-4' />
              <p>Running</p>
            </div>
            <div className='flex items-center'>
              <input type="radio" name="same" id="" className='mr-4' />
              <p>Activites</p>
            </div>
          </div>
          <div className='block'>
            <div className='lg:flex block mb-2'>
              <h4 className='ml-1 border border-solid  border-none text-sm p-y-1 mt-2 px-3 rounded-md bg-[#fdf3e9] text-[#e06522] cursor-pointer'>Drawing</h4>
              <h4 className='ml-1 border border-solid  border-none text-sm p-y-1 mt-2 px-3 rounded-md bg-[#fdf3e9] text-[#e06522] cursor-pointer'>Art</h4>
              <h4 className='ml-1 border border-solid  border-none text-sm p-y-1 mt-2 px-3 rounded-md bg-[#fdf3e9] text-[#e06522] cursor-pointer'>Brushes</h4>
            </div>

            <div className='flex justify-around my-4'>
              <span className='flex items-center cursor-pointer'>
                <img src="../../images/ThumbsUp.svg" alt="" />
                <p className='text-sm'>15 Liked</p>
              </span>

              <span className='flex items-center cursor-pointer'>
                <img src="../../images/ChatCircleText.svg" alt="" />
                <p className='text-sm'>15 Liked</p>
              </span>

              <span className='flex items-center cursor-pointer'>
                <img src="../../images/BookmarkSimple.svg" alt="" />
                <p className='text-sm'>15 Liked</p>
              </span>
            </div>

            <div className='flex w-full justify-between border border-solid border=[#eeee] py-1 px-3 mt-3 rounded-md'>
              <input type="text" placeholder="Write a comment" className='border-none outo
              line-none' />
              <button className='border-none bg-none'>Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
    </>
  )
}


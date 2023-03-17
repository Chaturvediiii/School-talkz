import Head from 'next/head'
import Link from 'next/link';
import Select from 'react-select';
import styles from '@/styles/Home.module.css'
import Studentheader from './Studentheader'
import Studentsidebar from './Studentsidebar'
import { useState } from 'react';
const classOptions = [
  { value: 'I Standard', label: 'I standard',  },
  { value: 'II Standard', label: 'II Standard' },
  { value: 'III Standard', label: 'III Standard' },
  { value: 'IV Standard', label: 'IV Standard',  },
  { value: 'V Standard', label: 'V Standard' },
  { value: 'VI Standard', label: 'VI Standard' },
  { value: 'VII Standard', label: 'VII Standard' },
  { value: 'VIII Standard', label: 'VIII Standard' },

]






export default function Studentprofile() {
  const [modal,setModal] = useState(false);
  const [birthdaypop,setBirthdaypop] = useState(true);
  const [calender,setCalender] = useState(false);

  function showBirthday(){
    setBirthdaypop(!birthdaypop);
   
  }

  function showModal(){
    setModal(!modal)
  }

  function showCalender(){
    setCalender(!calender)
    setBirthdaypop(!birthdaypop);
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
<Studentsidebar/>
</div>
<div className='w-4/5 rounded-5xl'>
  <div>
<Studentheader/>
{/* <Studentheader/> */}
  </div>
  <div>
  <div className='relative rounded-b-3xl w-full flex-col bg-myBlue p-4 lg:h-full lg:w-full'>
      
      <div className='block h-full lg:flex lg:justify-around text-white mt-4 lg:w-full'>
        <div className='bg-gradient-to-r from-[#0A1122] to-[#03194D] rounded-3xl flex items-center justify-between lg:w-2/5 w-full mb-8 h-2/5'>
      <div className='flex-col items-center justify-center text-center ml-9'>
      <p>Total Students</p>
          <h1 className='text-4xl'>20</h1>
      </div>
      <div className='lg:w-40 lg:h-40 lg:rounded-b-2xl w-30 h-30 rounded-b-xl'>
        <img src="../../images/orange.svg" alt="" className='w-full h-full rounded-b-2xl'/>
      </div>
        </div>
      
        <div className='bg-gradient-to-r from-[#0A1122] to-[#03194D] rounded-3xl flex items-center justify-between lg:w-2/5 w-full mb-8 h-2/5'>
      <div className='flex-col items-center justify-center text-center ml-9'>
      <p>Today's Birthday</p>
          <h1 className='text-4xl'>01</h1>
      </div>
      <div className='lg:w-40 lg:h-40 lg:rounded-b-2xl w-30 h-30 rounded-b-xl'>
        <img src="../../images/orange.svg" alt="" className='w-full h-full rounded-b-2xl'/>
      </div>
        </div>
      
        <div className='border border-[#061A6F] border-dashed rounded-2xl  flex-col items-center justify-center  h-1/6 w-full 
      lg:w-1/6 cursor-pointer h-40
      ' onClick={showModal}>
          <img src="../../images/Plus.svg" alt="" className='lg:w-100 h-12 flex item-center justify-center'  />
          <h4 className='text-[#061A6F] text-sm text-center'>Add Student</h4>
        </div>
      </div>
      
      <div className='p-4'>
        <h4 className='mb-2'>Search Student</h4>
      
      <div className='block lg:flex lg:w-full lg:justify-start'>
      <div className='lg:w-1/6 w-full mr-3'>
      <Select
      
          isMulti
          name="colors"
          options={classOptions}
          className="basic-multi-select text-center bg-select border border-solid border-[#d3d3d3] rounded-lg mt-1"
          classNamePrefix="select"
        />
      
        </div>
      
      
      
        <div className='flex mt-1 bg-white px-6 py-1 w-full lg:w-1/4 items-center border border-solid border-[#d3d3d3] rounded-lg'>
          <input type="text" placeholder='Search' className='border-none bg-none text-md outline-none w-full'/>
          <img src="../../../images/MagnifyingGlass.svg" alt="" className='w-1/12 h-1/2 cursor-pointer' />
        </div>
      </div>
      </div>
      
      <div className='flex-col'>
      
        <div className='block mb-0 lg:flex lg:w-full lg:justify-between lg:mb-8'>
      
          <div className='w-full mb-8 lg:w-80 flex-col bg-white p-2 rounded-xl'>
      
      <div className='flex w-full'>
      <div className='w-1/3 h-28 rounded-xl mr-2'>
        <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-xl' />
      </div>
      <div className='w-2/3'>
        <div className='flex mt-3 justify-between'>
          <h3 className='text-sm text-black mb-2'>Sakthi vel</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div className={styles.userBottomInfo}>
          <p className='text-[#9a9a9a] text-xs mb-2'>Class: 5</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Stars:                            251</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Email:                          Sakthi123....</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Contact Number : 9876543210</p>
        </div>
      </div>
      </div>
      
      <div className='mt-2 border-y-[#d3d3d3] text-center flex text-[#061a6f] justify-around items-center py-2 px-20'>
        <p className='text-bold text-sm'>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
          </div>
          <div className='w-full mb-8 lg:w-80 flex-col bg-white p-2 rounded-xl'>
      
      <div className='flex w-full'>
      <div className='w-1/3 h-28 rounded-xl mr-2'>
        <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-xl' />
      </div>
      <div className='w-2/3'>
        <div className='flex mt-3 justify-between'>
          <h3 className='text-sm text-black mb-2'>Sakthi vel</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div className={styles.userBottomInfo}>
          <p className='text-[#9a9a9a] text-xs mb-2'>Class: 5</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Stars:                            251</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Email:                          Sakthi123....</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Contact Number : 9876543210</p>
        </div>
      </div>
      </div>
      
      <div className='mt-2 border-y-[#d3d3d3] text-center flex text-[#061a6f] justify-around items-center py-2 px-20'>
        <p className='text-bold text-sm'>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
          </div>
                    <div className='w-full mb-8 lg:w-80 flex-col bg-white p-2 rounded-xl'>
      
      <div className='flex w-full'>
      <div className='w-1/3 h-28 rounded-xl mr-2'>
        <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-xl' />
      </div>
      <div className='w-2/3'>
        <div className='flex mt-3 justify-between'>
          <h3 className='text-sm text-black mb-2'>Sakthi vel</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div className={styles.userBottomInfo}>
          <p className='text-[#9a9a9a] text-xs mb-2'>Class: 5</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Stars:                            251</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Email:                          Sakthi123....</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Contact Number : 9876543210</p>
        </div>
      </div>
      </div>
      
      <div className='mt-2 border-y-[#d3d3d3] text-center flex text-[#061a6f] justify-around items-center py-2 px-20'>
        <p className='text-bold text-sm'>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
          </div>
      
      </div>
      <div className='block mb-0 lg:flex lg:w-full lg:justify-between lg:mb-8'>
      
      <div className='w-full mb-8 lg:w-80 flex-col bg-white p-2 rounded-xl'>
  
  <div className='flex w-full'>
  <div className='w-1/3 h-28 rounded-xl mr-2'>
    <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-xl' />
  </div>
  <div className='w-2/3'>
    <div className='flex mt-3 justify-between'>
      <h3 className='text-sm text-black mb-2'>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div className={styles.userBottomInfo}>
      <p className='text-[#9a9a9a] text-xs mb-2'>Class: 5</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Stars:                            251</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Email:                          Sakthi123....</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Contact Number : 9876543210</p>
    </div>
  </div>
  </div>
  
  <div className='mt-2 border-y-[#d3d3d3] text-center flex text-[#061a6f] justify-around items-center py-2 px-20'>
    <p className='text-bold text-sm'>View Details</p>
    <img src="../../images/ArrowUpRight.svg" alt="" />
  </div>
  
      </div>
      <div className='w-full mb-8 lg:w-80 flex-col bg-white p-2 rounded-xl'>
  
  <div className='flex w-full'>
  <div className='w-1/3 h-28 rounded-xl mr-2'>
    <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-xl' />
  </div>
  <div className='w-2/3'>
    <div className='flex mt-3 justify-between'>
      <h3 className='text-sm text-black mb-2'>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div className={styles.userBottomInfo}>
      <p className='text-[#9a9a9a] text-xs mb-2'>Class: 5</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Stars:                            251</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Email:                          Sakthi123....</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Contact Number : 9876543210</p>
    </div>
  </div>
  </div>
  
  <div className='mt-2 border-y-[#d3d3d3] text-center flex text-[#061a6f] justify-around items-center py-2 px-20'>
    <p className='text-bold text-sm'>View Details</p>
    <img src="../../images/ArrowUpRight.svg" alt="" />
  </div>
  
      </div>
                <div className='w-full mb-8 lg:w-80 flex-col bg-white p-2 rounded-xl'>
  
  <div className='flex w-full'>
  <div className='w-1/3 h-28 rounded-xl mr-2'>
    <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-xl' />
  </div>
  <div className='w-2/3'>
    <div className='flex mt-3 justify-between'>
      <h3 className='text-sm text-black mb-2'>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div className={styles.userBottomInfo}>
      <p className='text-[#9a9a9a] text-xs mb-2'>Class: 5</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Stars:                            251</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Email:                          Sakthi123....</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Contact Number : 9876543210</p>
    </div>
  </div>
  </div>
  
  <div className='mt-2 border-y-[#d3d3d3] text-center flex text-[#061a6f] justify-around items-center py-2 px-20'>
    <p className='text-bold text-sm'>View Details</p>
    <img src="../../images/ArrowUpRight.svg" alt="" />
  </div>
  
      </div>
  
  </div>
  <div className='block mb-0 lg:flex lg:w-full lg:justify-between lg:mb-8'>
      
      <div className='w-full mb-8 lg:w-80 flex-col bg-white p-2 rounded-xl'>
  
  <div className='flex w-full'>
  <div className='w-1/3 h-28 rounded-xl mr-2'>
    <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-xl' />
  </div>
  <div className='w-2/3'>
    <div className='flex mt-3 justify-between'>
      <h3 className='text-sm text-black mb-2'>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div className={styles.userBottomInfo}>
      <p className='text-[#9a9a9a] text-xs mb-2'>Class: 5</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Stars:                            251</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Email:                          Sakthi123....</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Contact Number : 9876543210</p>
    </div>
  </div>
  </div>
  
  <div className='mt-2 border-y-[#d3d3d3] text-center flex text-[#061a6f] justify-around items-center py-2 px-20'>
    <p className='text-bold text-sm'>View Details</p>
    <img src="../../images/ArrowUpRight.svg" alt="" />
  </div>
  
      </div>
      <div className='w-full mb-8 lg:w-80 flex-col bg-white p-2 rounded-xl'>
  
  <div className='flex w-full'>
  <div className='w-1/3 h-28 rounded-xl mr-2'>
    <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-xl' />
  </div>
  <div className='w-2/3'>
    <div className='flex mt-3 justify-between'>
      <h3 className='text-sm text-black mb-2'>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div className={styles.userBottomInfo}>
      <p className='text-[#9a9a9a] text-xs mb-2'>Class: 5</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Stars:                            251</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Email:                          Sakthi123....</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Contact Number : 9876543210</p>
    </div>
  </div>
  </div>
  
  <div className='mt-2 border-y-[#d3d3d3] text-center flex text-[#061a6f] justify-around items-center py-2 px-20'>
    <p className='text-bold text-sm'>View Details</p>
    <img src="../../images/ArrowUpRight.svg" alt="" />
  </div>
  
      </div>
                <div className='w-full mb-8 lg:w-80 flex-col bg-white p-2 rounded-xl'>
  
  <div className='flex w-full'>
  <div className='w-1/3 h-28 rounded-xl mr-2'>
    <img src="../../images/men.jpg" alt="" className='w-full h-full rounded-xl' />
  </div>
  <div className='w-2/3'>
    <div className='flex mt-3 justify-between'>
      <h3 className='text-sm text-black mb-2'>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div className={styles.userBottomInfo}>
      <p className='text-[#9a9a9a] text-xs mb-2'>Class: 5</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Stars:                            251</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Email:                          Sakthi123....</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Contact Number : 9876543210</p>
    </div>
  </div>
  </div>
  
  <div className='mt-2 border-y-[#d3d3d3] text-center flex text-[#061a6f] justify-around items-center py-2 px-20'>
    <p className='text-bold text-sm'>View Details</p>
    <img src="../../images/ArrowUpRight.svg" alt="" />
  </div>
  
      </div>
  
  </div>
          </div>

 {modal && (
           <div className={styles.modal}>
<div className={styles.overlay}></div>
<div className={styles.modalContent}>

<div className={styles.modalTop}>
  <div></div>
  <h2>Add Student</h2>
  <img src="../../../images/X.svg" alt="" onClick={showModal} />
</div>
<div className={styles.modalBody}>
<p><Link href='/Studentform'>Add 1 student</Link></p>
<p>Bulk upload</p>
</div>

</div>
           </div>
 )}

 {birthdaypop && (
  <div className='w-full absolute top-0 left-0 right-0 bottom-0 flex-col items-center'>
      <div className='w-full absolute top-0 left-0 right-0 bottom-0 flex-col items-center bg-[rgba(49,49,49,0.8)]'></div>

      <div className='relative w-1/2 flex-col bg-[#f2f6ff] rounded-3xl my-2 mx-auto left-1/12'>

<div className='flex justify-between w-full items-center pt-1'>
<div className='relative left-0 w-20 h-20'>
<img src="../../../images/balloon.svg" alt="" className='w-full h-full' />
</div>
<div className='text-center'>
<h2 className='text-base'>Today’s Birthdays</h2>
<p className='text-base'>Wish Students and Staff a happy birthday!</p>
</div>
<div className='mr-1' onClick={showBirthday}>
<img src="../../../images/X.svg" alt="" className='cursor-pointer' />
</div>

</div>
<div className='flex-col bg-white'>
<div className='block lg:flex w-full  py-1 px-4 justify-between'>

<div className='block lg:flex lg:4/5 '>
<div className='w-12 h-16 rounded-md'>
<img src="../../../images/men.jpg" alt="" className='w-full h-full rounded-md' />
</div>

<div className='lg:block flex relative w-full ml-4'>
<div>
<h3 className='text-sm mb-1'>Dency</h3>
</div>
<div>
<p className='text-sm mb-5'>14 Years Old</p>
</div>
<div className='flex w-full border border-solid border-[#d3d3d3]  rounded-md bg-black '>
<input type="text"  placeholder='Wish Dency a happy birthday!' className='w-4/5 border-none bg-transparent outline-none'/>
<img src="../../../images/Camera.svg" alt="" className='cursor-pointer' />
</div>
</div>
</div>

<div className='w-full lg:w-1/6 flex-col justify-end'>
<button className='w-full bg-gradient-to-r from-[#0A1122] to-[#03194D] text-white py-2 px-3 cursor-pointer rounded-lg'>Post</button>
</div>

</div>
</div>

<div className={styles.birthdayFooter}>
<h4 onClick={showCalender}>Set Upcoming Birthday</h4>
</div>
</div>

  </div>
 )}

{calender && (
  <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
    <div className='flex-col w-1/2 rounded-md relative bg-[#f2f6ff] mx-auto my-20'>
      <div className='flex w-full justify-between bg-myGray items-center rounded-t-lg'>
      <div className='ml-2'>
  <img src="../../../images/ArrowLeft.svg" alt="" onClick={showCalender} className='cursor-pointer' />
  </div>
  <div className='text-center'>
  <h2 className='text-base text-bold'>Upcoming Birthdays</h2>
  <p className='text-sm'>Wish Students and Staff a happy birthday!</p>
  </div>
  <div >
  <img src="../../../images/balloon1.svg" alt="" />
  </div>

  </div>
      <div className='flex-col'>
      <div className='flex justify-between w-full mb-2'>
      <div className='flex items-center w-1/4 py-2 px-6'>
<div className='w-16 h-16 rounded-lg'>
<img src="../../../images/men.jpg" alt="" className='w-full h-full rounded-lg cursor-pointer' />
</div>
<div className='ml-2'>
<h4 className='text-sm cursor-pointer'>Dency</h4>
<p className='text-sm cursor-pointer'>January 28</p>
</div>


      </div>
      <div className='flex items-center w-1/4 py-2 px-6'>
<div className='w-16 h-16 rounded-lg'>
<img src="../../../images/men.jpg" alt="" className='w-full h-full rounded-lg cursor-pointer' />
</div>
<div className='ml-2'>
<h4 className='text-sm cursor-pointer'>Dency</h4>
<p className='text-sm cursor-pointer'>January 28</p>
</div>


      </div>
      <div className='flex items-center w-1/4 py-2 px-6'>
<div className='w-16 h-16 rounded-lg'>
<img src="../../../images/men.jpg" alt="" className='w-full h-full rounded-lg cursor-pointer' />
</div>
<div className='ml-2'>
<h4 className='text-sm cursor-pointer'>Dency</h4>
<p className='text-sm cursor-pointer'>January 28</p>
</div>


      </div>
      </div>
      <div className='flex justify-between w-full mb-2'>
      <div className='flex items-center w-1/4 py-2 px-6'>
<div className='w-16 h-16 rounded-lg'>
<img src="../../../images/men.jpg" alt="" className='w-full h-full rounded-lg cursor-pointer' />
</div>
<div className='ml-2'>
<h4 className='text-sm cursor-pointer'>Dency</h4>
<p className='text-sm cursor-pointer'>January 28</p>
</div>


      </div>
      <div className='flex items-center w-1/4 py-2 px-6'>
<div className='w-16 h-16 rounded-lg'>
<img src="../../../images/men.jpg" alt="" className='w-full h-full rounded-lg cursor-pointer' />
</div>
<div className='ml-2'>
<h4 className='text-sm cursor-pointer'>Dency</h4>
<p className='text-sm cursor-pointer'>January 28</p>
</div>


      </div>
      <div className='flex items-center w-1/4 py-2 px-6'>
<div className='w-16 h-16 rounded-lg'>
<img src="../../../images/men.jpg" alt="" className='w-full h-full rounded-lg cursor-pointer' />
</div>
<div className='ml-2'>
<h4 className='text-sm cursor-pointer'>Dency</h4>
<p className='text-sm cursor-pointer'>January 28</p>
</div>


      </div>
      </div>
      <div className='flex justify-between w-full mb-2'>
      <div className='flex items-center w-1/4 py-2 px-6'>
<div className='w-16 h-16 rounded-lg'>
<img src="../../../images/men.jpg" alt="" className='w-full h-full rounded-lg cursor-pointer' />
</div>
<div className='ml-2'>
<h4 className='text-sm cursor-pointer'>Dency</h4>
<p className='text-sm cursor-pointer'>January 28</p>
</div>


      </div>
      <div className='flex items-center w-1/4 py-2 px-6'>
<div className='w-16 h-16 rounded-lg'>
<img src="../../../images/men.jpg" alt="" className='w-full h-full rounded-lg cursor-pointer' />
</div>
<div className='ml-2'>
<h4 className='text-sm cursor-pointer'>Dency</h4>
<p className='text-sm cursor-pointer'>January 28</p>
</div>


      </div>
      <div className='flex items-center w-1/4 py-2 px-6'>
<div className='w-16 h-16 rounded-lg'>
<img src="../../../images/men.jpg" alt="" className='w-full h-full rounded-lg cursor-pointer' />
</div>
<div className='ml-2'>
<h4 className='text-sm cursor-pointer'>Dency</h4>
<p className='text-sm cursor-pointer'>January 28</p>
</div>


      </div>
      </div>
      </div>
      </div>
  </div>
)}

  </div>
</div>
</div>
</main>
    </>
  )
}


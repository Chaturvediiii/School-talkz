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
<main className='w-cover flex justify-around p-8'>
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
      
      <div className='block h-full lg:flex lg:justify-around text-white mt-4 lg:w-full'>
        <div className='bg-gradient-to-r from-[#0A1122] to-[#03194D] rounded-3xl flex items-center justify-between lg:w-2/5 w-full mb-8 h-2/5'>
      <div className='flex-col items-center justify-center text-center ml-9'>
      <p className=''>Number of teachers</p>
          <h1 className='text-4xl'>20</h1>
      </div>
      <div className='lg:w-40 lg:h-40 lg:rounded-b-2xl w-30 h-30 rounded-b-xl'>
        <img src="../../images/orange.svg" alt="" className='w-full h-full rounded-b-2xl' />
      </div>
        </div>
      
        <div className='bg-gradient-to-r from-[#0A1122] to-[#03194D] rounded-3xl flex items-center justify-between lg:w-2/5 w-full mb-8 h-2/5'>
      <div className='flex-col items-center justify-center text-center ml-9'>
      <p>Number of Attendence</p>
          <h1  className='text-4xl'>0 %</h1>
      </div>
      <div className='lg:w-40 lg:h-40 lg:rounded-b-2xl w-30 h-30 rounded-b-xl'>
        <img src="../../images/orange.svg" alt="" className='w-full h-full rounded-b-2xl'/>
      </div>
        </div>
      {/*some issues : will work on later */}
      <div className='border border-[#061A6F] border-dashed rounded-2xl  flex-col items-center justify-center  h-1/6 w-full 
      lg:w-1/6 cursor-pointer h-40
      ' onClick={showModal}>
          <img src="../../images/Plus.svg" alt="" className='lg:w-100 h-12 flex item-center justify-center mx-auto mt-10' />
          <h4 className='text-[#061A6F] text-sm text-center' >Add teacher</h4>
        </div>
      </div>
      
      <div className='p-4'>
        <h4 className='mb-2'>Search Teacher</h4>
      
      <div className='block lg:flex lg:w-full lg:justify-start'>
      <div className='lg:w-1/6 w-full mr-3'>
      <Select
          isMulti
          name="colors"
          options={departmentOptions}
          className="basic-multi-select text-center bg-select border border-solid border-[#d3d3d3] rounded-lg mt-1"
          classNamePrefix="select"
        />
      
        </div>
      
        <div className='lg:w-1/6 w-full mr-3'>
        <Select
      className='text-center bg-select border border-solid border-[#d3d3d3] rounded-lg mt-1'
      options={designationOptions}
      
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
          <h3 className='text-sm text-black mb-2'>Vineeth</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div >
          <p className='text-[#9a9a9a] text-xs mb-2'>Staff Id : 15</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Designation : Junior staff</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Department : Computer</p>
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
          <h3 className='text-sm text-black mb-2'>Vineeth</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div >
          <p className='text-[#9a9a9a] text-xs mb-2'>Staff Id : 15</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Designation : Junior staff</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Department : Computer</p>
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
          <h3 className='text-sm text-black mb-2'>Vineeth</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div >
          <p className='text-[#9a9a9a] text-xs mb-2'>Staff Id : 15</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Designation : Junior staff</p>
          <p className='text-[#9a9a9a] text-xs mb-2'>Department : Computer</p>
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
      <h3 className='text-sm text-black mb-2'>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div >
      <p className='text-[#9a9a9a] text-xs mb-2'>Staff Id : 15</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Designation : Junior staff</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Department : Computer</p>
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
      <h3 className='text-sm text-black mb-2'>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div >
      <p className='text-[#9a9a9a] text-xs mb-2'>Staff Id : 15</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Designation : Junior staff</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Department : Computer</p>
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
      <h3 className='text-sm text-black mb-2'>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div >
      <p className='text-[#9a9a9a] text-xs mb-2'>Staff Id : 15</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Designation : Junior staff</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Department : Computer</p>
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
      <h3 className='text-sm text-black mb-2'>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div >
      <p className='text-[#9a9a9a] text-xs mb-2'>Staff Id : 15</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Designation : Junior staff</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Department : Computer</p>
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
      <h3 className='text-sm text-black mb-2'>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div >
      <p className='text-[#9a9a9a] text-xs mb-2'>Staff Id : 15</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Designation : Junior staff</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Department : Computer</p>
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
      <h3 className='text-sm text-black mb-2'>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
    </div>
    <div >
      <p className='text-[#9a9a9a] text-xs mb-2'>Staff Id : 15</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Designation : Junior staff</p>
      <p className='text-[#9a9a9a] text-xs mb-2'>Department : Computer</p>
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
      
          </div>

 {modal && (
           <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
<div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
<div className='absolute top-1/3 left-1/2 bg-white w-max h-max text-center p-4 rounded-md'>

<div className='flex mb-4 justify-between w-full'>
<div></div>
  <h2>Add Teacher</h2>
  <img src="../../../images/X.svg" alt="" onClick={showModal} className='cursor-pointer' />
</div>
<div>
<p className='mb-4 cursor-pointer text-base'><Link href='/Form'>Add 1 staff</Link></p>
<p>Bulk upload</p>
</div>

</div>
           </div>
 )}
  </div>
</div>
</main>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link';
import Select from 'react-select';
import styles from '@/styles/Home.module.css'
import Sidebar from './Sidebar'
import Header from './Header'
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

const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
]






export default function Form() {

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
  <div className='relative rounded-b-3xl p-4 w-full flex-col bg-myBlue'>
<div className='rounded-t-xl bg-myGray flex items-center justify-center h-16'>
      <h1 className='text-xl flex items-center justify-center'>Staff Information</h1>
      </div>
      <div className='flex-col bg-white'>
<div className='block lg:flex lg:justify-between py-1 px-8'>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Staff ID</p>
<input type="text"  placeholder='Enter staff ID' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full'/>
    </div>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
    <p>First Name</p>
<input type="text"  placeholder='Enter First Name' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full'/>
</div>
<div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Last Name</p>
<input type="text"  placeholder='Enter Last Name' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full'/>
</div>
</div>
<div className='block lg:flex lg:justify-between py-1 px-8'>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Department</p>
<Select

    isMulti
    name="colors"
    options={departmentOptions}
    className="basic-multi-select bg-[#fafafa] text-base"
    classNamePrefix="select"
  />
    </div>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
    <p>Designation</p>
    <Select
className=" bg-[#fafafa] text-base"
    options={designationOptions}
    
    classNamePrefix="select"
  />
</div>
<div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Gender</p>
<Select
    
    className=" bg-[#fafafa] text-base"
    name="colors"
    options={genderOptions}
   
    classNamePrefix="select"
  />
</div>
</div>
<div className='block lg:flex lg:justify-between py-1 px-8'>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Email</p>
<input type="text"  placeholder='Enter Email' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full'/>
    </div>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
    <p>Phone No.</p>
<input type="text"  placeholder='Enter Phone No.' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full'/>
</div>
<div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Marital status</p>
<input type="text"  placeholder='Enter Marital status' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full'/>
</div>
</div>
<div className='block lg:flex lg:justify-between py-1 px-8'>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Date of birth</p>
<input type="text"  placeholder='Enter Date of birth' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full'/>
    </div>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
    <p>School Name</p>
<input type="text"  placeholder='Enter School Name' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full'/>
</div>
<div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Last Name</p>
<input type="text"  placeholder='Enter Last Name' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full'/>
</div>
</div>


      </div>
      <div className='block lg:flex py-4 px-12 w-full justify-end bg-white rounded-b-2xl'>
        <button className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/5'>Cancel</button>
        <button className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/5'>Submit</button>
      </div>
    </div>
  </div>
</div>
</main>
    </>
  )
}


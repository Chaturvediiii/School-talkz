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



const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
]






export default function Studentform() {

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
<Studentsidebar/>
</div>
<div className='w-4/5 rounded-5xl'>
  <div>
<Studentheader/>
{/* <Studentheader/> */}
  </div>
  <div>
  <div className='relative rounded-b-3xl p-4 w-full flex-col bg-myBlue'>
<div className='rounded-t-xl bg-myGray flex items-center justify-center h-16'>
      <h1 className='text-xl flex items-center justify-center'>Student Information</h1>
      </div>
      <div className='flex-col bg-white'>
<div className='block lg:flex lg:justify-between py-1 px-8'>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Roll No.</p>
<input type="text"  placeholder='Enter staff ID'/>
    </div>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
    <p>First Name</p>
<input type="text"  placeholder='Enter First Name'/>
</div>
<div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Last Name</p>
<input type="text"  placeholder='Enter Last Name'/>
</div>
</div>
<div className='block lg:flex lg:justify-between py-1 px-8'>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Standard</p>
<Select

    isMulti
    name="colors"
    options={classOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
    </div>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
    <p>School Name</p>
    <input type="text"  placeholder='Enter School Name'/>
</div>
<div className='lg:flex-col lg:w-1/4 w-full mb-2'>
        <p>Gender</p>
    <Select

isMulti
name="colors"
options={genderOptions}
className="basic-multi-select"
classNamePrefix="select"
/>
    </div>
</div>
<div className='block lg:flex lg:justify-between py-1 px-8'>
<div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Email</p>
    <input type="text"  placeholder="Enter Email"/>
</div>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Phone no.</p>
<input type="text"  placeholder='Enter Phone no.'/>
    </div>
    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
<p>Father's Name</p>
<input type="text"  placeholder="Enter Father's Name"/>
    </div>

</div>
<div className='block lg:flex lg:justify-between py-1 px-8'>

    <div className='lg:flex-col lg:w-1/4 w-full mb-2'>
    <p>Date of Birth</p>
<input type="text"  placeholder='Enter Date of Birth'/>
</div>

</div>

      </div>
      <div className={styles.buttons}>
        <button className={styles.cancel}>Cancel</button>
        <button className={styles.submit}>Submit</button>
      </div>
    </div>
  </div>
</div>
</main>
    </>
  )
}



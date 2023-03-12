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
<main class={styles.main}>
<div className={styles.homeLeft}>
<Sidebar/>
</div>
<div className={styles.homeRight}>
  <div className={styles.homeTop}>
<Header/>
{/* <Studentheader/> */}
  </div>
  <div className={styles.homeBottom}>
  <div className={styles.form}>
<div className={styles.info}>
      <h1>Staff Information</h1>
      </div>
      <div className={styles.heading}>
<div className={styles.col}>
    <div className={styles.row}>
<p>Staff ID</p>
<input type="text"  placeholder='Enter staff ID'/>
    </div>
    <div className={styles.row}>
    <p>First Name</p>
<input type="text"  placeholder='Enter First Name'/>
</div>
<div className={styles.row}>
<p>Last Name</p>
<input type="text"  placeholder='Enter Last Name'/>
</div>
</div>
<div className={styles.col}>
    <div className={styles.row}>
<p>Department</p>
<Select

    isMulti
    name="colors"
    options={departmentOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
    </div>
    <div className={styles.row}>
    <p>Designation</p>
    <Select

    options={designationOptions}
    
    classNamePrefix="select"
  />
</div>
<div className={styles.row}>
<p>Gender</p>
<Select
    

    name="colors"
    options={genderOptions}
   
    classNamePrefix="select"
  />
</div>
</div>
<div className={styles.col}>
    <div className={styles.row}>
<p>Email</p>
<input type="text"  placeholder='Enter Email'/>
    </div>
    <div className={styles.row}>
    <p>Phone No.</p>
<input type="text"  placeholder='Enter Phone No.'/>
</div>
<div className={styles.row}>
<p>Marital status</p>
<input type="text"  placeholder='Enter Marital status'/>
</div>
</div>
<div className={styles.col}>
    <div className={styles.row}>
<p>Date of birth</p>
<input type="text"  placeholder='Enter Date of birth'/>
    </div>
    <div className={styles.row}>
    <p>School Name</p>
<input type="text"  placeholder='Enter School Name'/>
</div>
<div className={styles.row}>
<p>Last Name</p>
<input type="text"  placeholder='Enter Last Name'/>
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


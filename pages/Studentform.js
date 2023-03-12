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
<main class={styles.main}>
<div className={styles.homeLeft}>
<Studentsidebar/>
</div>
<div className={styles.homeRight}>
  <div className={styles.homeTop}>
<Studentheader/>
{/* <Studentheader/> */}
  </div>
  <div className={styles.homeBottom}>
  <div className={styles.form}>
<div className={styles.info}>
      <h1>Student Information</h1>
      </div>
      <div className={styles.heading}>
<div className={styles.col}>
    <div className={styles.row}>
<p>Roll No.</p>
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
<p>Standard</p>
<Select

    isMulti
    name="colors"
    options={classOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
    </div>
    <div className={styles.row}>
    <p>School Name</p>
    <input type="text"  placeholder='Enter School Name'/>
</div>
<div className={styles.row}>
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
<div className={styles.col}>
<div className={styles.row}>
<p>Email</p>
    <input type="text"  placeholder="Enter Email"/>
</div>
    <div className={styles.row}>
<p>Phone no.</p>
<input type="text"  placeholder='Enter Phone no.'/>
    </div>
    <div className={styles.row}>
<p>Father's Name</p>
<input type="text"  placeholder="Enter Father's Name"/>
    </div>

</div>
<div className={styles.col}>

    <div className={styles.row}>
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



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
  <div className={styles.profile}>
      
      <div className={styles.general}>
        <div className={styles.teacher}>
      <div className={styles.staffProfile}>
      <p>Number of teachers</p>
          <h1>20</h1>
      </div>
      <div className={styles.vector}>
        <img src="../../images/orange.svg" alt="" />
      </div>
        </div>
      
        <div className={styles.teacher}>
      <div className={styles.staffProfile}>
      <p>Number of Attendence</p>
          <h1>0 %</h1>
      </div>
      <div className={styles.vector}>
        <img src="../../images/orange.svg" alt="" />
      </div>
        </div>
      
      <div className={styles.add} onClick={showModal}>
          <img src="../../images/Plus.svg" alt="" />
          <h4  >Add teacher</h4>
        </div>
      </div>
      
      <div className={styles.search}>
        <h4>Search Teacher</h4>
      
      <div className={styles.input}>
      <div className={styles.subject}>
      <Select
      
          isMulti
          name="colors"
          options={departmentOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      
        </div>
      
        <div className={styles.type}>
        <Select
      
      options={designationOptions}
      
      classNamePrefix="select"
      />
      
        </div>
      
        <div className={styles.searchBox}>
          <input type="text" placeholder='Search'/>
          <img src="../../../images/MagnifyingGlass.svg" alt="" />
        </div>
      </div>
      </div>
      
      <div className={styles.cards}>
      
        <div className={styles.colProfile}>
      
          <div className={styles.rowProfile}>
      
      <div className={styles.flex}>
      <div className={styles.image}>
        <img src="../../images/men.jpg" alt="" />
      </div>
      <div className={styles.userProfileInfo}>
        <div className={styles.userTopInfo}>
          <h3>Vineeth</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div className={styles.userBottomInfo}>
          <p>Staff Id : 15</p>
          <p>Designation : Junior staff</p>
          <p>Department : Computer</p>
          <p>Contact Number : 9876543210</p>
        </div>
      </div>
      </div>
      
      <div className={styles.profileBottom}>
        <p>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
          </div>
      
          <div className={styles.rowProfile}>
      
      <div className={styles.flex}>
      <div className={styles.image}>
        <img src="../../images/men.jpg" alt="" />
      </div>
      <div className={styles.userProfileInfo}>
        <div className={styles.userTopInfo}>
          <h3>Vineeth</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div className={styles.userBottomInfo}>
          <p>Staff Id : 15</p>
          <p>Designation : Junior staff</p>
          <p>Department : Computer</p>
          <p>Contact Number : 9876543210</p>
        </div>
      </div>
      </div>
      
      <div className={styles.profileBottom}>
        <p>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
          </div>
      
          <div className={styles.rowProfile}>
      
      <div className={styles.flex}>
      <div className={styles.image}>
        <img src="../../images/men.jpg" alt="" />
      </div>
      <div className={styles.userProfileInfo}>
        <div className={styles.userTopInfo}>
          <h3>Vineeth</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div className={styles.userBottomInfo}>
          <p>Staff Id : 15</p>
          <p>Designation : Junior staff</p>
          <p>Department : Computer</p>
          <p>Contact Number : 9876543210</p>
        </div>
      </div>
      </div>
      
      <div className={styles.profileBottom}>
        <p>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
          </div>
        </div>
        <div className={styles.colProfile}>
      
      <div className={styles.rowProfile}>
      
      <div className={styles.flex}>
      <div className={styles.image}>
      <img src="../../images/men.jpg" alt="" />
      </div>
      <div className={styles.userProfileInfo}>
      <div className={styles.userTopInfo}>
      <h3>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Staff Id : 15</p>
      <p>Designation : Junior staff</p>
      <p>Department : Computer</p>
      <p>Contact Number : 9876543210</p>
      </div>
      </div>
      </div>
      
      <div className={styles.profileBottom}>
        <p>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
      </div>
      
      <div className={styles.rowProfile}>
      
      <div className={styles.flex}>
      <div className={styles.image}>
      <img src="../../images/men.jpg" alt="" />
      </div>
      <div className={styles.userProfileInfo}>
      <div className={styles.userTopInfo}>
      <h3>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Staff Id : 15</p>
      <p>Designation : Junior staff</p>
      <p>Department : Computer</p>
      <p>Contact Number : 9876543210</p>
      </div>
      </div>
      </div>
      
      <div className={styles.profileBottom}>
        <p>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
      </div>
      
      <div className={styles.rowProfile}>
      
      <div className={styles.flex}>
      <div className={styles.image}>
      <img src="../../images/men.jpg" alt="" />
      </div>
      <div className={styles.userProfileInfo}>
      <div className={styles.userTopInfo}>
      <h3>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Staff Id : 15</p>
      <p>Designation : Junior staff</p>
      <p>Department : Computer</p>
      <p>Contact Number : 9876543210</p>
      </div>
      </div>
      </div>
      
      <div className={styles.profileBottom}>
        <p>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
      </div>
      </div>
      <div className={styles.colProfile}>
      
      <div className={styles.rowProfile}>
      
      <div className={styles.flex}>
      <div className={styles.image}>
      <img src="../../images/men.jpg" alt="" />
      </div>
      <div className={styles.userProfileInfo}>
      <div className={styles.userTopInfo}>
      <h3>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Staff Id : 15</p>
      <p>Designation : Junior staff</p>
      <p>Department : Computer</p>
      <p>Contact Number : 9876543210</p>
      </div>
      </div>
      </div>
      
      <div className={styles.profileBottom}>
        <p>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
      </div>
      
      <div className={styles.rowProfile}>
      
      <div className={styles.flex}>
      <div className={styles.image}>
      <img src="../../images/men.jpg" alt="" />
      </div>
      <div className={styles.userProfileInfo}>
      <div className={styles.userTopInfo}>
      <h3>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Staff Id : 15</p>
      <p>Designation : Junior staff</p>
      <p>Department : Computer</p>
      <p>Contact Number : 9876543210</p>
      </div>
      </div>
      </div>
      
      <div className={styles.profileBottom}>
        <p>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
      </div>
      
      <div className={styles.rowProfile}>
      
      <div className={styles.flex}>
      <div className={styles.image}>
      <img src="../../images/men.jpg" alt="" />
      </div>
      <div className={styles.userProfileInfo}>
      <div className={styles.userTopInfo}>
      <h3>Vineeth</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Staff Id : 15</p>
      <p>Designation : Junior staff</p>
      <p>Department : Computer</p>
      <p>Contact Number : 9876543210</p>
      </div>
      </div>
      </div>
      
      <div className={styles.profileBottom}>
        <p>View Details</p>
        <img src="../../images/ArrowUpRight.svg" alt="" />
      </div>
      
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
  <h2>Add Teacher</h2>
  <img src="../../../images/X.svg" alt="" onClick={showModal} />
</div>
<div className={styles.modalBody}>
<p><Link href='/Form'>Add 1 staff</Link></p>
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

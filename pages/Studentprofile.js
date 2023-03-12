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






export default function Studentprofiel() {
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
  <div className={styles.profile}>
      
      <div className={styles.general}>
        <div className={styles.teacher}>
      <div className={styles.staffProfile}>
      <p>Total Students</p>
          <h1>20</h1>
      </div>
      <div className={styles.vector}>
        <img src="../../images/orange.svg" alt="" />
      </div>
        </div>
      
        <div className={styles.teacher}>
      <div className={styles.staffProfile}>
      <p>Today's Birthday</p>
          <h1>01</h1>
      </div>
      <div className={styles.vector}>
        <img src="../../images/orange.svg" alt="" />
      </div>
        </div>
      
        <div className={styles.add} onClick={showModal}>
          <img src="../../images/Plus.svg" alt=""  />
          <h4>Add Student</h4>
        </div>
      </div>
      
      <div className={styles.search}>
        <h4>Search Student</h4>
      
      <div className={styles.input}>
      <div className={styles.subject}>
      <Select
      
          isMulti
          name="colors"
          options={classOptions}
          className="basic-multi-select"
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
          <h3>Sakthi vel</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div className={styles.userBottomInfo}>
          <p>Class: 5</p>
          <p>Stars:                            251</p>
          <p>Email:                          Sakthi123....</p>
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
          <h3>Sakthi vel</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div className={styles.userBottomInfo}>
          <p>Class: 5</p>
          <p>Stars:                            251</p>
          <p>Email:                          Sakthi123....</p>
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
          <h3>Sakthi vel</h3>
          <img src="../../images/NotePencil.svg" alt="" />
        </div>
        <div className={styles.userBottomInfo}>
          <p>Class: 5</p>
          <p>Stars:                            251</p>
          <p>Email:                          Sakthi123....</p>
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
      <h3>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Class: 5</p>
      <p>Stars:                            251</p>
      <p>Email:                          Sakthi123....</p>
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
      <h3>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Class: 5</p>
      <p>Stars:                            251</p>
      <p>Email:                          Sakthi123....</p>
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
      <h3>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Class: 5</p>
      <p>Stars:                            251</p>
      <p>Email:                          Sakthi123....</p>
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
      <h3>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Class: 5</p>
      <p>Stars:                            251</p>
      <p>Email:                          Sakthi123....</p>
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
      <h3>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Class: 5</p>
      <p>Stars:                            251</p>
      <p>Email:                          Sakthi123....</p>
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
      <h3>Sakthi vel</h3>
      <img src="../../images/NotePencil.svg" alt="" />
      </div>
      <div className={styles.userBottomInfo}>
      <p>Class: 5</p>
      <p>Stars:                            251</p>
      <p>Email:                          Sakthi123....</p>
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
  <div className={styles.birthdayPopup}>
      <div className={styles.overlay}></div>
      <div className={styles.birthday}>

<div className={styles.birthdayHeader}>
<div className={styles.birthdayBalloon}>
<img src="../../../images/balloon.svg" alt="" />
</div>
<div className={styles.birthdayHeading}>
<h2>Today’s Birthdays</h2>
<p>Wish Students and Staff a happy birthday!</p>
</div>
<div className={styles.birthdayCross} onClick={showBirthday}>
<img src="../../../images/X.svg" alt="" />
</div>

</div>
<div className={styles.mainBody}>
<div className={styles.birthdayBody}>

<div className={styles.same}>
<div className={styles.birthdayImage}>
<img src="../../../images/men.jpg" alt="" />
</div>

<div className={styles.birthdayContent}>
<div className={styles.birthdayName}>
<h3>Dency</h3>
</div>
<div className={styles.birthdayAge}>
<p>14 Years Old</p>
</div>
<div className={styles.birthdayPhoto}>
<input type="text"  placeholder='Wish Dency a happy birthday!'/>
<img src="../../../images/Camera.svg" alt="" />
</div>
</div>
</div>

<div className={styles.birthdayPost}>
<button>Post</button>
</div>

</div>
<div className={styles.birthdayBody}>

<div className={styles.same}>
<div className={styles.birthdayImage}>
<img src="../../../images/men.jpg" alt="" />
</div>

<div className={styles.birthdayContent}>
<div className={styles.birthdayName}>
<h3>Dency</h3>
</div>
<div className={styles.birthdayAge}>
<p>14 Years Old</p>
</div>
<div className={styles.birthdayPhoto}>
<input type="text"  placeholder='Wish Dency a happy birthday!'/>
<img src="../../../images/Camera.svg" alt="" />
</div>
</div>
</div>

<div className={styles.birthdayPost}>
<button>Post</button>
</div>

</div>
<div className={styles.birthdayBody}>

<div className={styles.same}>
<div className={styles.birthdayImage}>
<img src="../../../images/men.jpg" alt="" />
</div>

<div className={styles.birthdayContent}>
<div className={styles.birthdayName}>
<h3>Dency</h3>
</div>
<div className={styles.birthdayAge}>
<p>14 Years Old</p>
</div>
<div className={styles.birthdayPhoto}>
<input type="text"  placeholder='Wish Dency a happy birthday!'/>
<img src="../../../images/Camera.svg" alt="" />
</div>
</div>
</div>

<div className={styles.birthdayPost}>
<button>Post</button>
</div>

</div>
<div className={styles.birthdayBody}>

<div className={styles.same}>
<div className={styles.birthdayImage}>
<img src="../../../images/men.jpg" alt="" />
</div>

<div className={styles.birthdayContent}>
<div className={styles.birthdayName}>
<h3>Dency</h3>
</div>
<div className={styles.birthdayAge}>
<p>14 Years Old</p>
</div>
<div className={styles.birthdayPhoto}>
<input type="text"  placeholder='Wish Dency a happy birthday!'/>
<img src="../../../images/Camera.svg" alt="" />
</div>
</div>
</div>

<div className={styles.birthdayPost}>
<button>Post</button>
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
  <div className={styles.calenderPop}>
    <div className={styles.overlay}></div>
    <div className={styles.Calender}>
      <div className={styles.calenderHeader}>
      <div className={styles.calenderBalloon}>
  <img src="../../../images/ArrowLeft.svg" alt="" onClick={showCalender} />
  </div>
  <div className={styles.calenderHeading}>
  <h2>Upcoming Birthdays</h2>
  <p>Wish Students and Staff a happy birthday!</p>
  </div>
  <div className={styles.calenderCross}>
  <img src="../../../images/balloon1.svg" alt="" />
  </div>

  </div>
      <div className={styles.calenderBody}>
      <div className={styles.calenderCol}>
      <div className={styles.calenderCard}>
<div className={styles.calenderImage}>
<img src="../../../images/men.jpg" alt="" />
</div>
<div className={styles.calenderContent}>
<h4>Dency</h4>
<p>January 28</p>
</div>


      </div>
      <div className={styles.calenderCard}>
<div className={styles.calenderImage}>
<img src="../../../images/men.jpg" alt="" />
</div>
<div className={styles.calenderContent}>
<h4>Dency</h4>
<p>January 28</p>
</div>


      </div>
      <div className={styles.calenderCard}>
<div className={styles.calenderImage}>
<img src="../../../images/men.jpg" alt="" />
</div>
<div className={styles.calenderContent}>
<h4>Dency</h4>
<p>January 28</p>
</div>


      </div>
      </div>
      <div className={styles.calenderCol}>
      <div className={styles.calenderCard}>
<div className={styles.calenderImage}>
<img src="../../../images/men.jpg" alt="" />
</div>
<div className={styles.calenderContent}>
<h4>Dency</h4>
<p>January 28</p>
</div>


      </div>
      <div className={styles.calenderCard}>
<div className={styles.calenderImage}>
<img src="../../../images/men.jpg" alt="" />
</div>
<div className={styles.calenderContent}>
<h4>Dency</h4>
<p>January 28</p>
</div>


      </div>
      <div className={styles.calenderCard}>
<div className={styles.calenderImage}>
<img src="../../../images/men.jpg" alt="" />
</div>
<div className={styles.calenderContent}>
<h4>Dency</h4>
<p>January 28</p>
</div>


      </div>
      </div>
      <div className={styles.calenderCol}>
      <div className={styles.calenderCard}>
<div className={styles.calenderImage}>
<img src="../../../images/men.jpg" alt="" />
</div>
<div className={styles.calenderContent}>
<h4>Dency</h4>
<p>January 28</p>
</div>


      </div>
      <div className={styles.calenderCard}>
<div className={styles.calenderImage}>
<img src="../../../images/men.jpg" alt="" />
</div>
<div className={styles.calenderContent}>
<h4>Dency</h4>
<p>January 28</p>
</div>


      </div>
      <div className={styles.calenderCard}>
<div className={styles.calenderImage}>
<img src="../../../images/men.jpg" alt="" />
</div>
<div className={styles.calenderContent}>
<h4>Dency</h4>
<p>January 28</p>
</div>


      </div>
      </div>
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


import styles from '@/styles/Home.module.css'
import Link from 'next/link';
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
<img src="../../images/logo.png" alt="" />
      </div>
<div className={styles.wrapper}>
    <ul>
        <li>
            <img src="../../images/vector (1).svg" alt="" />
            <p>Dashboard</p>
        </li>

        <li>
        <Link href='/Studentprofile'><img src="../../images/vector (2).svg" alt="" /></Link>
        <p>Students</p>
        </li>

        <li  className={styles.if}>
        <Link href='/'><img src="../../images/vector.svg" alt="" /></Link>
            <p>Staffs</p>
        </li>

        <li>
        <img src="../../images/Gear.svg" alt="" />
            <p>Settings</p>
        </li>
    </ul>
</div>
    </div>
  )
}

export default Sidebar

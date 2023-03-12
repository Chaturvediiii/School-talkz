import styles from  '@/styles/Home.module.css'

function Studentheader() {
  return (
    <div>
      <div className={styles.header}>
      <div className={styles.staff}>
        <img src="../../images/staff.svg" alt="" />
        <span>Students</span>
      </div>
      <div className={styles.user}>
        <img src="../../images/Bell.svg" alt="" />
        <img src="../../images/Moon.svg" alt="" />
        <div className={styles.userImage}>
<img src="../../images/men.jpg" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Studentheader

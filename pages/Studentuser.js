import styles from "../../../styles/Home.module.css";

function Studentuser() {
  return (
    <div className={styles.userProfile}>

<div className={styles.profileBar}>
<div className={styles.profileTop}>

<div className={styles.userPhoto}>
<div className={styles.userImg}>
<img src="../../images/men.jpg" alt="" />
</div>
<div className={styles.userGen}>
<h4>Sakthivel</h4>
<p>Class (5)</p>
<span>
<img src="../../images/level.svg" alt="" />
Global CBSE School, CHN
</span>
</div>

<div>

</div>

</div>
<div className={styles.userDetails}>
<h4>Contact Details</h4>

<span>
<img src="../../images/Phone.svg" alt="" />
9876543210
</span>
<span>
<img src="../../images/EnvelopeSimple.svg" alt="" />
vinothk@nextgenschool.in
</span>
</div>
<div className={styles.userCircle}>
<img src="../../images/circle.svg" alt="" />
</div>

</div>
<div className={styles.userBottom}>
<div className={styles.bot}>
  <h3>5.9k</h3>
  <p>Followers</p>
</div>
<div className={styles.bot}>
  <h3>5.9k</h3>
  <p>Creations</p>
</div>
<div className={styles.bot}>
  <h3>5.9k</h3>
  <p>Achievements</p>
</div>
<div className={styles.bot}>
  <h3>5.9k</h3>
  <p>Stars</p>
</div>
</div>
</div>

      <div className={styles.profileCard}>
        <div className={styles.profileLeft}>
          <div className={styles.profileHeader}>
            <div className={styles.profileImage}>
              <div className={styles.profilePhoto}>
                <img src="../../images/men.jpg" alt="" />
              </div>
              <div className={styles.profileDesc}>
                <h3>Mr. Vinod K (Computer Staff)</h3>
                <p>
                  <a href="#">Global CBSE School, CHN</a>
                </p>
                <p>1 hours ago</p>
              </div>
            </div>
            <div className={styles.profileMenu}>
              <img src="../../images/DotsThree.svg" alt="" />
            </div>
          </div>
          <div className={styles.para}>
            <p>John is very obedient on Students if he is not hungry</p>
          </div>
          <div className={styles.profileBody}>
            <img src="../../images/classroom.jpg" alt="" />
          </div>
          <div className={styles.profileFooter}>
            <div className={styles.quality}>
              <h4>Drawing</h4>
              <h4>Art</h4>
              <h4>Brushes</h4>
            </div>

            <div className={styles.interface}>
              <span>
                <img src="../../images/ThumbsUp.svg" alt="" />
                <p>15 Liked</p>
              </span>

              <span>
                <img src="../../images/ChatCircleText.svg" alt="" />
                <p>15 Liked</p>
              </span>

              <span>
                <img src="../../images/BookmarkSimple.svg" alt="" />
                <p>15 Liked</p>
              </span>
            </div>

            <div className={styles.comment}>
              <input type="text" placeholder="Write a comment" />
              <button>Comment</button>
            </div>
          </div>
        </div>

        <div className={styles.profileRight}>
          <div className={styles.profileHeader}>
            <div className={styles.profileImage}>
              <div className={styles.profilePhoto}>
                <img src="../../images/men.jpg" alt="" />
              </div>
              <div className={styles.profileDesc}>
                <h3>Mr. Vinod K (Computer Staff)</h3>
                <p>
                  <a href="#">Global CBSE School, CHN</a>
                </p>
                <p>1 hours ago</p>
              </div>
            </div>
            <div className={styles.profileMenu}>
              <img src="../../images/DotsThree.svg" alt="" />
            </div>
          </div>
          <div className={styles.para}>
            <p>John is very obedient on Students if he is not hungry</p>
          </div>
          <div className={styles.profileSecBody}>
            <div className={styles.first}>
              <input type="radio" name="same" id="" />
              <p>Running</p>
            </div>
            <div className={styles.first}>
              <input type="radio" name="same" id="" />
              <p>Activites</p>
            </div>
          </div>
          <div className={styles.profileFooter}>
            <div className={styles.quality}>
              <h4>Drawing</h4>
              <h4>Art</h4>
              <h4>Brushes</h4>
            </div>

            <div className={styles.interface}>
              <span>
                <img src="../../images/ThumbsUp.svg" alt="" />
                <p>15 Liked</p>
              </span>

              <span>
                <img src="../../images/ChatCircleText.svg" alt="" />
                <p>15 Liked</p>
              </span>

              <span>
                <img src="../../images/BookmarkSimple.svg" alt="" />
                <p>15 Liked</p>
              </span>
            </div>

            <div className={styles.comment}>
              <input type="text" placeholder="Write a comment" />
              <button>Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Studentuser

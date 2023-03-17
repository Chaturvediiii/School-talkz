import styles from '@/styles/Home.module.css'

function Header() {
  return (
    <div className='relative rounded-t-3xl flex justify-between items-center w-full h-20 bg-myBlue px-4'>
      <div className='flex items-center justify-between py-2 px-4'>
        <img src="../../images/staff.svg" alt="" />
        <span className='font-bold ml-2'>Staffs</span>
      </div>
      <div className='flex justify-between'>
        <img src="../../images/Bell.svg" alt="" className='mr-2'/>
        <img src="../../images/Moon.svg" alt="" className='mr-2'/>
        <div className='w-10 h-10 rounded-full mr-4'>
<img src="../../images/men.jpg" alt="" className='w-full h-full rounded-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Header

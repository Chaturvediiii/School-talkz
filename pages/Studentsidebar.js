import styles from '@/styles/Home.module.css'
import Link from 'next/link';

function Studentsidebar() {
  return (
    <div className='fixed flex-col items-center  h-full '>
      <div className='lg:w-28 lg:h-10 mt-6 w-12 h-8'>
<img src="../../images/logo.png" alt="" className='w-full h-full' />
      </div>
<div className='mt-14 w-full my-14 mx-2'>
    <ul className='flex-col w-full lg:ml-4 items-center'>
        <li className='flex items-center justify-between list-none text-xl cursor-pointer text-textColor mb-8'>
            <img src="../../images/vector (1).svg" alt="" className='lg:w-1/5 flex items-center justify-center' />
            <p className='lg:w-3/4 lg:text-xl lg:block hidden'>Dashboard</p>
        </li>

        <li className='flex items-center justify-between list-none text-xl cursor-pointer text-textColor mb-8 rounded-lg p-1 bg-sidebar items-center cursor-pointer'>
      <img src="../../images/vector (2).svg" alt="" className='lg:w-1/5 flex items-center justify-center' />
        <p className='w-3/4 text-xl lg:block hidden'>Students</p>
        </li>

        <li className='flex items-center justify-between list-none text-xl cursor-pointer text-textColor mb-8 '>
      <img src="../../images/vector.svg" alt="" className='lg:w-1/5 flex items-center justify-center' />
            <p className='w-3/4 text-xl lg:block hidden'>Staffs</p>
        </li>

        <li className='flex items-center justify-between list-none text-xl cursor-pointer text-textColor mb-8'>
        <img src="../../images/Gear.svg" alt="" className='lg:w-1/5 flex items-center justify-center' />
            <p className='w-3/4 text-xl lg:block hidden'>Settings</p>
        </li>
    </ul>
</div>
    </div>
  )
}

export default Studentsidebar

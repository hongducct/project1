import React from 'react'
import tel from '/kefu.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='fixed shadow top-0 bg-blue-200 w-full h-14 flex justify-end'>
        <Link to={'/contact'}><img src={tel} alt="" /></Link>
    </div>
  )
}

export default Header
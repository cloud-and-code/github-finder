import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <div className='text-center'>
        <h1 className='text-6xl mb-8'>Error 404: Not Found</h1>
        <h1 className='text-3xl mb-8'>
          The page you are looking for does not exist
        </h1>
        <Link to='/' className='btn btn-primary btn-lg'>
          <FaHome className='mr-2' />
          Back to Home
        </Link>
      </div>
    </>
  )
}

export default NotFound

import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='flex justify-center bg-gray-600 text-white text-2xl p-3'>user: {userid}</div>
  )
}

export default User
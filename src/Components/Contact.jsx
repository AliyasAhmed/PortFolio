import React from 'react'
import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    document.title = "Contact"
  }, [])
  return (
    <div className='flex justify-center text-7xl'>
      its contact
    </div>
  )
}

export default Contact

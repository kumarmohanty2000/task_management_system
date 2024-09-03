import React from 'react'
import Button from './Button'
import image from "../assets/no-projects.png"

export default function NoProjectSelected({handleChange}) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img src={image} alt="no image" className='h-16 w-16 object-contain mx-auto' />
      <p className='my-4 text-xl font-bold text-stone-600 '>No project selected</p>
      <p className='text-stone-500 mb-4'>Select a project or get started with a new one</p>
      <p>
        <Button onClick={handleChange}>
            Create a new project
        </Button>
      </p>
    </div>
  )
}

import React, { useContext, useState } from 'react'
import { PreviewContext } from './MainComponent'

function LeftComponent(props) {
  const [preview, setPreview] = useContext(PreviewContext)
  let [imageIndex, setImageIndex] = useState(0)
  // console.log(state)
  const numberOfImage = preview.image.length

  let i = 0
  // console.log(numberOfImage)
  const handlePreviousClick = (e) => {
    e.preventDefault()
    if (i > 0) {
      i = i - 1
      console.log('after decrement i is ' + i)
    } else {
      i = numberOfImage - 1
    }
    console.log('imgae index updated')
    setImageIndex(i)
    // setState(props.item.currentImgIndex)
    console.log(imageIndex)
  }
  const handleNextClick = (e) => {
    e.preventDefault()
    if (i < numberOfImage - 1) {
      i = i + 1
      console.log('after increment i is ' + i)
    } else {
      i = 0
    }
    console.log('imgae index updated')
    setImageIndex(i)
    // setState(props.item.currentImgIndex)
    // console.log(imageIndex)
  }

  const renderButton = () => {
    if (numberOfImage > 1) {
      return (
        <div className='shadow-md flex justify-around items-center cursor-pointer'>
          <div className='p-8 text-5xl' onClick={handlePreviousClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </div>
          <div className='p-8 text-5xl' onClick={handleNextClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='pt-16 px-32 w-1/2'>
      <div>
        <div className='w-full h-5 flex items-center pl-2 rounded-lg bg-gray-200'>
          <span className='inline-block h-2 w-2 rounded-full bg-gray-400 mr-2'></span>
          <span className='inline-block h-2 w-2 rounded-full bg-gray-400 mr-2'></span>
          <span className='inline-block h-2 w-2 rounded-full bg-gray-400 mr-2'></span>
        </div>
        <div className='rounded-lg shadow-lg h-96 overflow-auto scrollbar-hide'>
          <img src={preview.image[imageIndex]} alt='' />
        </div>
      </div>
      <div className='flex justify-center m-4'>{renderButton()}</div>
    </div>
  )
}

export default LeftComponent

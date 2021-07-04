import React, { useContext } from 'react'
import { PreviewContext } from '../MainComponent'

function ListItem(props) {
  const { image, title, description } = props.item
  const [preview, setPreview] = useContext(PreviewContext)
  const url = image[0]
  // console.log(props)

  const handleOnClick = () => {
    setPreview(props.item)
  }

  return (
    <div className='w-full h-96' onClick={handleOnClick}>
      <div className='w-full h-5 flex items-center pl-2 rounded-lg bg-gray-200'>
        <span className='inline-block h-2 w-2 rounded-full bg-gray-400 mr-2'></span>
        <span className='inline-block h-2 w-2 rounded-full bg-gray-400 mr-2'></span>
        <span className='inline-block h-2 w-2 rounded-full bg-gray-400 mr-2'></span>
      </div>
      <div className='rounded-lg'>
        <img src={url} alt='' />
      </div>
      <div className='w-full h-10 py-4'>
        <h1 className='text-xl text-gray-700 font-bold mb-4'>{title}</h1>
        <p className='text-gray-500 font-normal mb-2'>{description}</p>
      </div>
    </div>
  )
}

export default ListItem

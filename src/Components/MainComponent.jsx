import React, { createContext, useState } from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
export const PreviewContext = createContext()

function MainComponent() {
  const [preview, setPreview] = useState({
    id: 0,
    image: [
      'https://images.unsplash.com/photo-1608973917382-981fa473e5be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    ],
    title: 'Title 1',
    description: 'Description 1',
    currentImgIndex: 0,
  })

  return (
    <PreviewContext.Provider value={[preview, setPreview]}>
      <div className='flex justify-center w-full min-h-screen'>
        <LeftComponent />
        <RightComponent />
      </div>
    </PreviewContext.Provider>
  )
}

export default MainComponent

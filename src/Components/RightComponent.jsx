import React from 'react'
import ListItem from './Items/ListItem'

const listItems = [
  {
    id: 0,
    image: [
      'https://images.unsplash.com/photo-1608973917382-981fa473e5be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    ],
    title: 'Title 1',
    description: 'Description 1',
    currentImgIndex: 0,
  },
  {
    id: 1,
    image: [
      'https://images.unsplash.com/photo-1610385983455-13c80fd0dd27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1609944433409-81bda5323abc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      'https://images.unsplash.com/photo-1569937301527-9336e27c357c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      'https://images.unsplash.com/photo-1570201387384-30f8d81f7e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      'https://images.unsplash.com/photo-1564836950107-5f27e818f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    ],
    title: 'Title 2',
    description: 'Description 2',
    currentImgIndex: 0,
  },
  {
    id: 2,
    image: [
      'https://images.unsplash.com/photo-1601724161617-928285222d5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    ],
    title: 'Title 3',
    description: 'Description 3',
    currentImgIndex: 0,
  },
]

function RightComponent() {
  return (
    <div className='p-16 w-1/2 bg-gray-50'>
      <div className='my-6'>
        <h1 className='text-gray-700 font-bold text-2xl'>
          This is a right component
        </h1>
        <p className='text-gray-600 font-normal text-md mb-3'>description</p>
      </div>

      <div className='grid grid-cols-2 gap-5'>
        {listItems.map((item) => {
          return <ListItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default RightComponent

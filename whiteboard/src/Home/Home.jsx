import React from 'react'
import Nav from './Nav/Nav'
import Body from './Home-body/Body'

function Home() {
  return (
    <div className=''>
        <div className="w-full flex justify-center "><Nav/></div>
        <div className=""><Body/></div>
    </div>
  )
}

export default Home
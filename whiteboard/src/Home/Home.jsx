import React from 'react'
import Nav from './Nav/Nav'
import Body from './Home-body/Body'
import Lerning from './Lerning-body/Lerning'
import Review from './Review/Review'
import Footer from './Footer/Footer'

function Home() {
  return (
    <div className=''>
        
        <div className=""><Body/></div>
        <div className=""><Lerning/></div>
        <div className=""><Review/></div>
        <div className="mt-20"><Footer/></div>
    </div>
  )
}

export default Home
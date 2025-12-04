import React from 'react'
import AdminNav from '../Nav/AdminNav'
import Head from '../head/Head'
import Dash from '../Dashboard/Dash'
import AccountAdmin from '../account/AccountAdmin'

function page() {
  return (
    <div className='w-full h-screen bg-[#F8F8F8] flex'>
        <AdminNav/>
      <div className="flex flex-col gap-5 pt-5 px-5">
        <Head/>
        <Dash/>
      </div>
      <AccountAdmin/>
    </div>
  )
}

export default page
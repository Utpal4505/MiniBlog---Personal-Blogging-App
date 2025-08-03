import React from 'react'
import { Link } from "react-router-dom";


function Blogs() {
  return (
    <>
    <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className="upper-text mb-12">
        <Link
            to="/"
            className="font-medium text-[17px] px-4 py-2 text-[#f0f0f0cc] hover:bg-[#2f333780] hover:text-[#FAFAFA] rounded-lg "
          >
            ← Go Back
          </Link>
          <div className="text">
            <h1 className="text-4xl font-bold text-center mt-14 text-[#f0f0f0]">
             All Blogs
            </h1>
            <p className="text-center text-xl mt-4 text-[#b3b3b3]">
             Explore all stories from our community
            </p>
          </div>
      </div>
    </main>
    </>
  )
}

export default Blogs
import React from 'react'

export const HomeCover = () => {
  return (
    <div className='cover'>
      {/* this is the background image */}
      <img src='/images/Background.jpg' className='coverimage' alt='backgroundimage' />
      <div className='covertxt'>
        <h1>Vanilla</h1> 
        <p>Shop the best fasion</p>
      </div>
    </div>
  )
}

export default HomeCover;
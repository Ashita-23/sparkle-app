import React from 'react'
import './errorPage.css'

function Errorpage() {
  return (
    <>
        <div className='error_outer'>
            <div className='error_box'>
    
                <h2 className='error_text'><span className='icon_box'> Error </span> : Some thing is wrong .<span className='icon_box'><i className="fa-solid fa-triangle-exclamation"></i></span></h2>
            </div>
        </div>
    </>
  )
}

export default Errorpage
import React from 'react'
import { technologies } from '../constants'
const Tech = () => {
  return (
    <>
    <div className='techmainn'>
    <div className='techhead'><h1>Tech</h1></div>
      <div className="techcon">
        <div className='techcon2'>
          {technologies.map((i)=>{return (<>
            <div className='techname'>
              {i.name}
            </div>
          </>)})}
        </div>
      </div>
    
    </div>
      </>
  )
}

export default Tech

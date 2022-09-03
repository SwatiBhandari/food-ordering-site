import React from 'react'
import './Card.css'

function Card({title,value,logoUrl,bgcolor,shadowcolor}) {
  return (
    <div className='dash_card'>
        <div className='left'>
            <span>{title}</span>
            <h3>{value}</h3>

        </div>
        <div className='right'>
            <img className='logoUrl' src={logoUrl}/>
        </div>
      
    </div>
  )
}

export default Card

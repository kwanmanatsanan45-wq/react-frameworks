import React from 'react'

const Card = (props) => (
    <div className='bg-white text-black shadow-lg'>
        <h2 className="text-black">{props.icon}</h2>
        <p className="font-bold">{props.title}</p>
        <p className="font-sansgi ">{props.description}</p>
        
    </div>

)

export default Card
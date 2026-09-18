import React from 'react'
import { growthdata } from '../../data/growth'

const DigitalCard = () => {
  return (
    <section>
        {growthdata.map((growth) =>{
            <div key={growth.id}>
                <h2>{growth.title}</h2>
                <h2>{growth.description}</h2>
            </div>
        })}
    </section>
  )
}

export default DigitalCard
import React from 'react'
import LightBulb from './lightbulb.svg'

const AboutComponent = ({title}) => {
    return (
        <div className='about-box'>
            <img src={LightBulb} className='svg'/>
            <p className='box-title black'>
                {title}
            </p>
            <p className='box-description black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    )
}

export default AboutComponent

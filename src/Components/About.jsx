import React from 'react';
import aboutimage from '../images/about.png'

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Munni Makeovers is your go-to destination for a transformational beauty experience. With a commitment to enhancing your natural beauty and boosting your confidence, we offer a range of makeup and beauty services that are tailored to your unique style and personality.
            </p>
            <p>At Munni Makeovers, we believe that makeup is not just a tool for enhancing your appearance but a medium for expressing your inner self. Our team of skilled and passionate makeup artists, led by our founder Munni, are dedicated to creating artistry that celebrates your individuality.
            </p>    
            <p>Why Choose Munni Makeovers?</p>    
            <p>Expertise: With years of experience, we are a trusted name in the bridal makeup industry. Our team understands the unique needs of brides and is committed to making you feel and look your best.</p>
            <p>Top-Quality Products: We use high-quality, skin-friendly products to ensure your comfort and the longevity of your bridal look.</p>
            <p>Personalized Service: Every bride is unique, and our services are tailored to your individual style and preferences.</p>
        </div>
    </div>
  )
}

export default About;
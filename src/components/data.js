import React from 'react'
import Image1 from "../Images/image1.jpg"
import Image2 from "../Images/image2.jpg"
import Image3 from "../Images/image3.jpg"
import "./data.css"
const cards = () => {
  return (
    <div className='cardsItems'>
      <div className='cardItem' id='cd1'> 
        <img src={Image1} alt = ""/>
        <p>Lorem ipsum consectetur.</p>
        <h2>Lorem ipsum Blanditiis suscipit nam molestias.</h2>
        <p>Lorem ipsum dolor sit amet, labore sint est laboriosam nulla consequatur nesciunt molestiae voluptate.</p>
        <section>
          <button>Button Text</button>
          {/* eslint-disable-next-line */}
          <a href="#">Link</a>
        </section>
      </div>
      <div className='cardItem' id='cd2'>
        <img src={Image2} alt = ""/>
        <p>Lorem ipsum consectetur.</p>
        <h2>Lorem ipsum Blanditiis suscipit nam molestias.</h2>
        <p>Lorem ipsum dolor sit amet, labore sint est laboriosam nulla consequatur nesciunt molestiae voluptate.</p>
        <section>
          <button>Button Text</button>
          {/* eslint-disable-next-line */}
          <a href="#">Link</a>
        </section>
        </div>
      <div className='cardItem' id='cd3'>
      <img src={Image3} alt = ""/>
        <p>Lorem ipsum consectetur.</p>
        <h2>Lorem ipsum Blanditiis suscipit nam molestias.</h2>
        <p>Lorem ipsum dolor sit amet, labore sint est laboriosam nulla consequatur nesciunt molestiae voluptate.</p>
        <section>
          <button>Button Text</button>
          {/* eslint-disable-next-line */}
          <a href="#">Link</a>
        </section>
      </div>
    </div>
  )
}

export default cards

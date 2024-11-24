import React, { useState } from 'react'
import "../style_Testimonial.css"


const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length)
  }
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }

  return (
    <section className='testimonials' >
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handleNextClick} >Next</button>
        <button onClick={handlePrevClick} >Prev</button>
      </div>
    </section>
  )
}

export default Testimonial
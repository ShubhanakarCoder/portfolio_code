import React from 'react'
// import "./Section.css"
import cv from "./cv.pdf"
import Typewriter from 'typewriter-effect';

const Section = () => {
  return (
    <section class="home" id="home">
      <div className='homebox'>
        <h3>HI THERE !</h3>
        <h1>I'M <span>Shubhankar Saurabh</span></h1>
        <h2><Typewriter
          options={{
            strings: [
              "Full Stack Software Developer",
              "MERN Stack Developer",
              "Web Developer",
              "UI/UX Designer",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        /></h2>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt aspernatur fugiat minus enim ullam repudiandae sint sed magnam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, at.
        </p> */}

        {/* <a href={cv} download="cv.pdf" >
          <button class="btn">
            Get Resume <i class="fas fa-user"></i>
          </button>
        </a> */}

        <button class="btn">
          Get Resume (bug) <i class="fas fa-user"></i>
        </button>
      </div>


    </section>
  )
}

export default Section
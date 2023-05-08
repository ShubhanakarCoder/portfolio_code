import React from 'react'
import "./About.css"

const About =()=> {
    return (
        <section class="about" id="about">

            <h1 class="heading"> <span>about</span> me </h1>

            <div class="row">

                <div class="info">
                    <h3> <span> name : </span> Shubhankar Saurabh </h3>
                    <h3> <span> age : </span> 25 </h3>
                    <h3> <span> qualification : </span> B.C.A </h3>
                    {/* <h3> <span> post : </span> Ca </h3> */}
                    <h3> <span> language : </span> English,Hindi </h3>
                    {/* <a href="#"><button class="btn"> download CV <i class="fas fa-download"></i> </button></a> */}
                </div>

                <div class="counter">
                    <p> I am  passionate and self-motivated aspiring full-stack developer from Dhanbad(India)  🏛 . I worked in WIPRO (2019-2021) and GENPACT (2021-2022) Specialization in MERN stack with a keen interest in learning and working with new technology💡.I always stay hungry to learn new things🤓. I love to explore new technologies and leverage them to solve real-life problems ✨. I'm currently into Web Development 🕸️ and working on my Data Structures and Algorithms 🤓.
                    </p>
                    {/* <div class="box">
                        <span>2+</span>
                        <h3>years of experience</h3>
                    </div>

                    <div class="box">
                        <span>100+</span>
                        <h3>porject completed</h3>
                    </div>

                    <div class="box">
                        <span>430+</span>
                        <h3>happy clients</h3>
                    </div>

                    <div class="box">
                        <span>3+</span>
                        <h3>awards won</h3>
                    </div> */}

                </div>

            </div>

        </section>
    )
}

About.propTypes = {}

export default About
import React from 'react';
import HeaderList from './HeaderList';
import link from "./link.jpg" 
// import "./Header.css"
const Header = () => {
    return (
        <>
            <header>

                <div class="user">
                    <img src={link} alt="Profile Photo"/>
                        <h3 class="name">Shubhankar Saurabh</h3>
                </div>

                <nav class="navbar">
                    <HeaderList/>
                    {/* <ul>
                        <li><a href="#home">home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#portfolio">work experience</a></li>
                        <li><a href="#portfolio">Skill Set</a></li>
                        <li><a href="#education">My Projects</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul> */}
                </nav>

            </header>

        </>
    )
}

export default Header
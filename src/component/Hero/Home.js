import React from "react"
import "./Home.css"
import hero from "../pic/img1.png"
import skill1 from "../pic/laravel.png"
import skill2 from "../pic/core.png"
import skill3 from "../pic/android.png"
import { Typewriter } from "react-simple-typewriter"
import Resume from "./resume.pdf"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Hussain Khan</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Web.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I am Laravel and .Net Core developer with experience in web development, producting the Quality work.</p>
            <br />
            <a href={Resume} download>
            <li>
                <button className='home-btn'>Download CV</button>
              </li>
              </a>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <a href="https://github.com/hk2592755">
                    <i class="fab fa-github"></i>
                    </a>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

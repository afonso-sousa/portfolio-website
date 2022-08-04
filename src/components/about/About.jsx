import React from 'react'
import './about.scss'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='ME' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Researching</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            finibus magna vel sapien imperdiet, vitae gravida erat varius. Sed
            fringilla tempus neque ac tempor. Nam a fermentum neque. Maecenas
            finibus ante at pellentesque dictum. Aenean non nunc finibus,
            interdum leo id, venenatis est. Proin faucibus neque ut arcu dapibus
            gravida eget eu ligula. Nulla malesuada est sit amet orci semper,
            nec tempor libero porta. Praesent a tellus ut elit pharetra viverra
            in vitae orci. Curabitur nec massa sed sem placerat luctus feugiat
            eget felis.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

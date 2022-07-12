import React from 'react';
import CATBIRD_BANNER from '../../assets/catbird_banner.png';
import ARG_WORDCLOUD from '../../assets/arg_wordcloud.png';
import './portfolio.css';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: CATBIRD_BANNER,
    title: "Catbird",
    summary: "Open-source toolkit for paraphrase generation.",
    github: "https://github.com/AfonsoSalgadoSousa/catbird",
  },
  {
    id: 2,
    image: ARG_WORDCLOUD,
    title: "Cross-Lingual Annotation Projection for Argument Mining in Portuguese",
    summary: <p>Approach to build a Portuguese version of the <a href={"https://paperswithcode.com/dataset/ukp"} target='_blank'>Persuasive Essays corpus</a> in Portuguese.
    The work was published in EPIA'21 and can be found <a href={"https://link.springer.com/chapter/10.1007/978-3-030-86230-5_59"} target='_blank'>here</a>.</p>,
    github: "https://github.com/AfonsoSalgadoSousa/argumentation_mining_pt",
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper className='container portfolio__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ id, image, title, summary, github, demo }) => {
            return (
              <SwiperSlide key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small className='portfolio__item-summary'>
                  {summary}
                </small>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' style={{ display: (demo ? 'block' : 'none') }} target='_blank'>Live Demo</a>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio
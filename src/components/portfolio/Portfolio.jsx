import { motion } from 'framer-motion'
import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Navigation, Pagination } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import CATBIRD_BANNER from '../../assets/catbird_banner.png'
import PORTFOLIO_LOGO from '../../assets/portfolio_logo.png'
import SPACE_SNATCHERS_LOGO from '../../assets/space_snatchers_logo.png'
import TOMATE_LOGO from '../../assets/tomate_logo.png'
import * as Styled from './Portfolio.styled'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    image: CATBIRD_BANNER,
    title: 'Catbird',
    summary: 'Open-source toolkit for paraphrase generation.',
    github: 'https://github.com/afonso-sousa/catbird',
  },
  {
    id: 2,
    image: SPACE_SNATCHERS_LOGO,
    title: 'Space Snatchers',
    summary: 'Endless runner mobile game developed in Godot.',
    url: 'https://play.google.com/store/apps/details?id=org.afonsousa.SpaceSnatchers&hl=pt_PT',
  },
  {
    id: 3,
    image: PORTFOLIO_LOGO,
    title: 'Web Portfolio',
    summary: 'This very website!',
    github: 'https://github.com/afonso-sousa/portfolio-website',
  },
  {
    id: 4,
    image: TOMATE_LOGO,
    title: 'Tomate',
    summary: 'A Pomodoro timer app built with Flutter.',
    url: 'https://play.google.com/store/apps/details?id=org.afonsousa.tomate&hl=pt_PT',
  },
]

function Portfolio() {
  return (
    <Styled.Portfolio>
      <MotionEntrance delay={0.4}>
        <h2>Things I've Built</h2>
      </MotionEntrance>

      <Styled.PortfolioContainer
        navigation={true}
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 }, // Mobile: 1 item
          1024: { slidesPerView: 3 }, // Larger screens: 3 items
        }}
      >
        {data.map(({ id, image, title, summary, github, url }) => (
          <SwiperSlide key={id}>
            <MotionEntrance delay={0.2 + id * 0.1}>
              <Styled.PortfolioItem>
                <Styled.ImgContainer>
                  <img src={image} alt={title} />
                </Styled.ImgContainer>
                <h3>{title}</h3>
                <Styled.Summary>{summary}</Styled.Summary>
                <Styled.IconContainer>
                  {github && (
                    <Styled.Icon
                      href={github}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FiGithub />
                    </Styled.Icon>
                  )}
                  {url && (
                    <Styled.Icon
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FiExternalLink />
                    </Styled.Icon>
                  )}
                </Styled.IconContainer>
              </Styled.PortfolioItem>
            </MotionEntrance>
          </SwiperSlide>
        ))}
      </Styled.PortfolioContainer>
    </Styled.Portfolio>
  )
}

// Reusable animation wrapper with Framer Motion
const MotionEntrance = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

export default Portfolio
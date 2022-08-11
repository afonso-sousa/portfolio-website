import React from 'react'
import CATBIRD_BANNER from '../../assets/catbird_banner.png'
import ARG_WORDCLOUD from '../../assets/arg_wordcloud.png'
import { Pagination, Navigation } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import * as Styled from './Portfolio.styled'
import { FiGithub } from 'react-icons/fi'
import handleViewport from 'react-in-viewport'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const data = [
  {
    id: 1,
    image: CATBIRD_BANNER,
    title: 'Catbird',
    summary: 'Open-source toolkit for paraphrase generation.',
    github: 'https://github.com/AfonsoSalgadoSousa/catbird',
  },
  {
    id: 2,
    image: ARG_WORDCLOUD,
    title:
      'Cross-Lingual Annotation Projection for Argument Mining in Portuguese',
    summary: (
      <p>
        Approach to build a Portuguese version of the{' '}
        <Styled.HoverEffectLink
          href={'https://paperswithcode.com/dataset/ukp'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Persuasive Essays corpus
        </Styled.HoverEffectLink>{' '}
        in Portuguese. The work was published in EPIA'21 and can be found{' '}
        <Styled.HoverEffectLink
          href={
            'https://link.springer.com/chapter/10.1007/978-3-030-86230-5_59'
          }
          target='_blank'
          rel='noopener noreferrer'
        >
          here
        </Styled.HoverEffectLink>
        .
      </p>
    ),
    github: 'https://github.com/AfonsoSalgadoSousa/argumentation_mining_pt',
  },
]

function PortfolioComponent() {
  return (
    <Styled.Portfolio>
      <h2>Things I've Built</h2>

      <Styled.PortfolioContainer
        navigation={true}
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {data.map(({ id, image, title, summary, github, demo }) => {
          return (
            <SwiperSlide key={id}>
              <Styled.PortfolioItem>
                <Styled.ImgContainer>
                  <img src={image} alt={title} />
                </Styled.ImgContainer>
                <h3>{title}</h3>
                <Styled.Summary>{summary}</Styled.Summary>
                <Styled.IconContainer>
                  <Styled.Icon
                    href={github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FiGithub />
                  </Styled.Icon>
                  <Styled.Icon
                    href={demo}
                    style={{ display: demo ? 'block' : 'none' }}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Demo
                  </Styled.Icon>
                </Styled.IconContainer>
              </Styled.PortfolioItem>
            </SwiperSlide>
          )
        })}
      </Styled.PortfolioContainer>
    </Styled.Portfolio>
  )
}

const Block = (props) => {
  const { inViewport, forwardedRef } = props

  if (inViewport) {
    return (
      <Styled.EntranceAnimation delay={'0.4s'} ref={forwardedRef}>
        <PortfolioComponent />
      </Styled.EntranceAnimation>
    )
  }
  return (
    <div ref={forwardedRef}>
      <PortfolioComponent />
    </div>
  )
}

const ViewportBlock = handleViewport(Block)

const Portfolio = () => {
  return (
    <div>
      <ViewportBlock />
    </div>
  )
}

export default Portfolio

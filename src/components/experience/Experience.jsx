import React from 'react'
import * as Styled from './Experience.styled'
import TabList from './tablist/TabList'
import handleViewport from 'react-in-viewport'

const experiences = [
  {
    id: 1,
    job: 'Junior Researcher',
    institution: 'FEUP',
    institution_url: 'https://sigarra.up.pt/feup/pt/web_page.inicial',
    date: 'December 2021 - Present',
    summary:
      'Research on discourse parsing. Building predictive models for various natural language processing tasks and building a corpus of parliamentary minutes.',
  },
  {
    id: 2,
    job: 'Invited Assistant Professor',
    institution: 'FEUP',
    institution_url: 'https://sigarra.up.pt/feup/pt/web_page.inicial',
    date: 'September 2021 - Present',
    summary:
      'Teaching of the practical classes of the first programming course of the Bachelor in Informatics and Computing Engineering at FEUP.',
  },
  {
    id: 3,
    job: 'Junior Researcher',
    institution: 'INESC TEC',
    institution_url: 'https://www.inesctec.pt/en',
    date: 'June 2020 - October 2021',
    summary: (
      <p>
        Project developed for{' '}
        <Styled.HoverEffectLink
          href={'https://www.bosch.pt/'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Bosch
        </Styled.HoverEffectLink>
        , building action recognition deep learning algorithms for in-vehicle
        behaviour prediction.
      </p>
    ),
  },
  {
    id: 4,
    job: 'Junior Developer',
    institution: 'Rumos',
    institution_url: 'https://www.rumos.pt/',
    date: 'April 2018 - February 2020',
    summary: (
      <p>
        Outsorcing work for{' '}
        <Styled.HoverEffectLink
          href={'http://masdima.pt/home/'}
          target='_blank'
          rel='noopener noreferrer'
        >
          MASDIMA
        </Styled.HoverEffectLink>
        , developing end-to-end predictive pipeline for aircraft flight times
        and serving multi-agent negotiation protocols through end-point
        gateways.
      </p>
    ),
  },
]

function ExperienceComponent() {
  return (
    <Styled.Experience>
      <h2>Works I've Had</h2>
      <TabList data={experiences} />
    </Styled.Experience>
  )
}

const Block = (props) => {
  const { inViewport, forwardedRef } = props

  if (inViewport) {
    return (
      <Styled.EntranceAnimation delay={'0.4s'} ref={forwardedRef}>
        <ExperienceComponent />
      </Styled.EntranceAnimation>
    )
  }
  return (
    <div ref={forwardedRef}>
      <ExperienceComponent />
    </div>
  )
}

const ViewportBlock = handleViewport(Block)

const Experience = () => {
  return (
    <div>
      <ViewportBlock />
    </div>
  )
}

export default Experience

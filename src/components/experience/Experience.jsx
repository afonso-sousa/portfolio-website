import { motion } from 'framer-motion'
import React from 'react'
import * as Styled from './Experience.styled'
import TabList from './tablist/TabList'

const experiences = [
  {
    id: 1,
    job: 'Teaching Assistant',
    institution: 'FEUP',
    institution_url: 'https://sigarra.up.pt/feup/pt/web_page.inicial',
    date: 'September 2020 - Present',
    summary:
      <p>
        'Teaching assistant of the first programming courses of the Bachelor in Informatics and Computing Engineering at FEUP.',
      </p>
  },
  {
    id: 2,
    job: 'Junior Researcher',
    institution: 'FEUP',
    institution_url: 'https://sigarra.up.pt/feup/pt/web_page.inicial',
    date: 'December 2021 - June 2022',
    summary:
      <p>
        'Research on discourse parsing. Building predictive models for various natural language processing tasks and building a corpus of parliamentary minutes.',
      </p>
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
        Outsourcing work for{' '}
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

function Experience() {
  return (
    <Styled.Experience>
      <MotionEntrance delay={0.5}>
        <h2>Works I've Had</h2>
      </MotionEntrance>
      <MotionEntrance delay={0.6}>
        <TabList data={experiences} />
      </MotionEntrance>
    </Styled.Experience>
  )
}

// Reusable motion component
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

export default Experience
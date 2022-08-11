import React, { useState } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import * as Styled from './Experience.styled'
import TabList from './TabList'

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
    summary:
      'Building action recognition deep learning algorithms for in-vehicle behaviour prediction.',
  },
]

const Experience = () => {
  return (
    <Styled.Experience>
      <h2>Works I've Had</h2>
      <TabList data={experiences} />
    </Styled.Experience>
  )
}

export default Experience

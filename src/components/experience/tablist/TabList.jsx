import React, { useState } from 'react'
import * as Styled from './TabList.styled'

const TabList = ({ data }) => {
  const [activeTab, setActiveTab] = useState('1')

  const handleClick = (e) => {
    const target = e.target
    setActiveTab(target.id)
  }

  return (
    <Styled.Tabs>
      <Styled.TabList>
        {data.map(
          ({ id, job, institution, institution_url, date, summary }) => {
            return (
              <Styled.TabItem
                key={id}
                id={id.toString()}
                onClick={handleClick}
                className={activeTab === id.toString() ? 'active' : ''}
              >
                {job}
              </Styled.TabItem>
            )
          }
        )}
      </Styled.TabList>

      {data.map(({ id, job, institution, institution_url, date, summary }) => {
        return (
          <Styled.TabContent
            key={id}
            style={{
              display: activeTab === id.toString() ? 'block' : 'none',
            }}
          >
            <h4>
              {job}{' '}
              <span>
                @{' '}
                <Styled.HoverEffectLink
                  href={institution_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {institution}
                </Styled.HoverEffectLink>
              </span>
            </h4>
            <small>{date}</small>
            <p>{summary}</p>
          </Styled.TabContent>
        )
      })}
    </Styled.Tabs>
  )
}

export default TabList

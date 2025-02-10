import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { LuShovel } from "react-icons/lu";
import { MdContentPasteSearch } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';
import useActiveSection from '../../hooks/useActiveSection';
import * as Styled from './Nav.styled';
import Switch from './switch/Switch';

const Nav = ({ isToggled, onToggle }) => {
  const sectionIds = ['header', 'about', 'experience', 'portfolio', 'research'];

  // Get the currently active section
  const activeSection = useActiveSection(sectionIds);

  return (
    <Styled.EntranceAnimation delay={'1s'}>
      <Styled.Nav>
        <HashLink smooth to="#header" className={activeSection === 'header' ? 'active' : ''}>
          <AiOutlineHome />
        </HashLink>
        <HashLink smooth to="#about" className={activeSection === 'about' ? 'active' : ''}>
          <AiOutlineUser />
        </HashLink>
        <HashLink smooth to="#experience" className={activeSection === 'experience' ? 'active' : ''}>
          <LuShovel />
        </HashLink>
        <HashLink smooth to="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>
          <BsFillJournalBookmarkFill />
        </HashLink>
        <HashLink smooth to="#research" className={activeSection === 'research' ? 'active' : ''}>
          <MdContentPasteSearch />
        </HashLink>
        <div></div>
        <Switch className='switch' isToggled={isToggled} onToggle={onToggle} />
      </Styled.Nav>
    </Styled.EntranceAnimation>
  )
}

export default Nav;
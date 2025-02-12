import Link from 'next/link';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { LuShovel } from "react-icons/lu";
import { MdContentPasteSearch } from "react-icons/md";
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
        <Link href="#header" className={activeSection === 'header' ? 'active' : ''}>
          <AiOutlineHome />
        </Link>
        <Link href="#about" className={activeSection === 'about' ? 'active' : ''}>
          <AiOutlineUser />
        </Link>
        <Link href="#experience" className={activeSection === 'experience' ? 'active' : ''}>
          <LuShovel />
        </Link>
        <Link href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>
          <BsFillJournalBookmarkFill />
        </Link>
        <Link href="#research" className={activeSection === 'research' ? 'active' : ''}>
          <MdContentPasteSearch />
        </Link>
        <div></div>
        <Switch className='switch' isToggled={isToggled} onToggle={onToggle} />
      </Styled.Nav>
    </Styled.EntranceAnimation>
  )
}

export default Nav;
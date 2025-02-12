import { FiGithub, FiLinkedin } from 'react-icons/fi';
import * as Styled from './Copyright.styled';

export default function Copyright() {
    return (
        <Styled.Copyright>
            <Styled.CopyrightIcons>
                <Styled.Icon
                    href='https://linkedin.com/in/afonsousa'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FiLinkedin />
                </Styled.Icon>
                <Styled.Icon
                    href='https://github.com/afonso-sousa/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FiGithub />
                </Styled.Icon>
            </Styled.CopyrightIcons>
            <small>&copy; Designed & Built by Afonso Sousa</small>
        </Styled.Copyright>
    )
}
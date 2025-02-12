import { motion } from 'framer-motion';
import React from 'react';
import * as Styled from './Research.styled';

const researchProjects = [
    {
        id: 1,
        title: 'Pseudo-Semantic Graphs for Generating Paraphrases',
        date: '2024',
        link: 'https://link.springer.com/chapter/10.1007/978-3-031-73503-5_18',
    },
    {
        id: 2,
        title: 'PTPARL-V: Portuguese Parliamentary Debates for Voting Behaviour Study',
        date: '2024',
        link: 'https://aclanthology.org/2024.parlaclarin-1.6/',
    },
    {
        id: 3,
        title: 'OSPT: European Portuguese Paraphrastic Dataset with Machine Translation',
        date: '2023',
        link: 'https://link.springer.com/chapter/10.1007/978-3-031-49008-8_36',
    },
    {
        id: 4,
        title: 'Cross-lingual Annotation Projection for Argument Mining in Portuguese',
        date: '2021',
        link: 'https://link.springer.com/chapter/10.1007/978-3-030-86230-5_59',
    },
];

function Research() {
    return (
        <Styled.Research>
            <MotionEntrance delay={0.5}>
                <h2>Research I've Done</h2>
            </MotionEntrance>

            <MotionEntrance delay={0.6}>
                <Styled.ResearchIntro>
                    <p>
                        My research is focused on Natural Language Processing, mainly paraphrase generation. You can find all my scientific contributions on{' '}
                        <Styled.HoverEffectLink
                            href={'https://scholar.google.com/citations?hl=en&user=kDNpYKEAAAAJ'}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Google Scholar
                        </Styled.HoverEffectLink>
                        .
                    </p>
                </Styled.ResearchIntro>
            </MotionEntrance>

            <MotionEntrance delay={0.7}>
                <Styled.ResearchProjects>
                    {researchProjects.map(({ id, title, date, link }) => (
                        <Styled.HoverEffectLink
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Styled.ProjectCard>
                                <span>{title} ({date})</span>
                            </Styled.ProjectCard>
                        </Styled.HoverEffectLink>
                    ))}
                </Styled.ResearchProjects>
            </MotionEntrance>
        </Styled.Research>
    );
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
);

export default Research;
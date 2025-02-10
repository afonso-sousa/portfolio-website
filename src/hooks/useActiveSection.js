import { useEffect, useState } from 'react';

const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observers = [];

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                const observer = new IntersectionObserver(handleIntersection, {
                    threshold: 0.5, // Adjust this value to control when the section is considered "active"
                });
                observer.observe(section);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sectionIds]);

    return activeSection;
};

export default useActiveSection;
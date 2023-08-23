import { useEffect, useState } from 'react';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
import { PAGE_PATHS } from '../../constants/PagePaths';

const NAV_PAGES = [
    {
        name: 'Placement Insigts',
        path: PAGE_PATHS.INSIGHTS,
    },
    {
        name: 'Campus Analyzer',
        path: PAGE_PATHS.CAMPUS_PLACEMENT_ANALYZER,
    },
    {
        name: 'Student Placement Analyzer',
        path: PAGE_PATHS.STUDENT_PLACEMENT_ANALYZER,
    },
];
export const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    // create an event listener
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);
    return (
        <>
            {!isMobile ? (
                <DesktopView NAV_PAGES={NAV_PAGES} />
            ) : (
                <MobileView NAV_PAGES={NAV_PAGES} />
            )}
        </>
    );
};

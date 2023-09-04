import { useContext } from 'react';
import { Header } from '../../components/header';
import { BranchWiseLAH } from './charts/BranchWiseLAH';
import { Cgpa } from './charts/Cgpa';
import { DistributionOfSalary } from './charts/DistributionOfSalary';
import { Factors } from './charts/Factors';
import { GreaterThanLPA } from './charts/GreaterThanLPA';
import { LeastAvgHighest } from './charts/LeastAvgHighest';
import { PlacedVsNot } from './charts/PlacedVsNot';
import { TopFactors } from './charts/TopFactors';
import styles from './home.module.css';
import PropTypes from 'prop-types';
import { AppContext } from '../../contexts/AppContext';
import { Gdp } from './charts/Gdp';

export const Home = () => {
    const { isMobile } = useContext(AppContext);
    return (
        <>
            <Header />
            <div style={{ fontFamily: 'var(--font-primary)' }}>
                <div
                    className={styles.bg_img_div}
                    style={{ height: '100vh', zIndex: 12 }}
                >
                    <img
                        className={styles.bg_img}
                        src='/static/images/multi-gradiant-background-banner.png'
                    />
                </div>
                <h1
                    style={{
                        position: 'absolute',
                        top: 100,
                        zIndex: 4,
                    }}
                    className={styles.title}
                >
                    PlacemenTrack
                </h1>
                <h1
                    style={{
                        fontFamily: 'sans-serif',
                        color: 'hsl(0 0% 98%)',
                        position: 'absolute',
                        top: 200,
                        zIndex: 4,
                    }}
                    className={styles.mainText}
                >
                    <span>
                        Find <span className={styles.textHover}>patterns</span>{' '}
                        and <span className={styles.textHover}>Trends</span> In
                        Campus Placements
                    </span>
                </h1>

                <div
                    style={{
                        position: 'absolute',
                        right: 50,
                        top: 160,
                        zIndex: 3,
                    }}
                    className={styles.mainImg_div}
                >
                    {!isMobile ? (
                        <img
                            className={styles.mainImg}
                            style={{ width: '100%' }}
                            src='/static/images/illustrator5.png'
                        />
                    ) : (
                        ''
                    )}
                </div>
                <Cgpa isMobile={isMobile} />
                <DistributionOfSalary />
                <GreaterThanLPA />
                <LeastAvgHighest isMobile={isMobile} />
                <BranchWiseLAH isMobile={isMobile} />
                <PlacedVsNot isMobile={isMobile} />
                <Gdp isMobile={isMobile} />
                <Factors isMobile={isMobile} />
                <TopFactors isMobile={isMobile} />
            </div>
        </>
    );
};

Home.propTypes = {
    isMobile: PropTypes.bool,
};

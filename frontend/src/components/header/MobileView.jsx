import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
const MobileView = ({ NAV_PAGES }) => {
    const [isOpen, setisOpen] = useState(false);

    const menuVariant = {
        offscreen: {
            y: -140,
            opacity: 0.2,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1,
            },
        },
    };
    return (
        <div>
            <div
                style={{
                    height: '60.737px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {' '}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '80%',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        logo
                    </div>
                    <div onClick={() => setisOpen(!isOpen)}>
                        <Menu />
                    </div>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    style={{}}
                >
                    <motion.div
                        style={{
                            width: '80%',
                            margin: '0 auto',
                            background: '#fff',
                            padding: '5px',
                        }}
                        variants={menuVariant}
                    >
                        {NAV_PAGES.map((nav, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <NavLink
                                        className={styles.mobile_nav_hover}
                                        to={nav.path}
                                        style={({ isActive }) => {
                                            const mystyles = {
                                                display: 'block',
                                                padding: '0.5rem',
                                                textDecoration: 'none',
                                                fontSize: '1rem',
                                                fontFamily:
                                                    'var(--font-secondary)',
                                                fontWeight: '680',
                                                color: '#181a1c',
                                                lineHeight: '1.5',
                                                borderRadius: '10px',
                                                cursor: 'pointer',
                                            };
                                            if (isActive)
                                                return {
                                                    ...mystyles,
                                                    backgroundColor:
                                                        'rgba(0,0,0,0.2)',
                                                    // padding: '0.5rem 0',
                                                };
                                            else return mystyles;
                                        }}
                                    >
                                        {nav.name}
                                    </NavLink>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '1px',
                                            margin: '5px auto',
                                            backgroundColor: '#ccc',
                                        }}
                                    ></div>
                                </Fragment>
                            );
                        })}
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

MobileView.propTypes = {
    NAV_PAGES: PropTypes.array,
};
export default MobileView;

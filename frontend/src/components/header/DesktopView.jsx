import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navbar.module.css';

const DesktopView = ({ NAV_PAGES }) => {
    return (
        <div>
            <div
                style={{
                    minHeight: '60.737px',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Container
                    sx={{
                        display: 'flex',
                    }}
                    maxWidth='lg'
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        logo
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginLeft: '4rem',
                            columnGap: '3rem',
                        }}
                    >
                        {NAV_PAGES.map((nav, idx) => {
                            return (
                                <NavLink
                                    className={styles.item}
                                    style={({ isActive }) => {
                                        const mystyles = {
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        };
                                        return isActive
                                            ? {
                                                  ...mystyles,
                                                  '--_i': '100%',
                                                  transition:
                                                      '0.3s, -webkit-mask-size 0.3s 0.3s',
                                              }
                                            : mystyles;
                                    }}
                                    key={idx}
                                    to={nav.path}
                                >
                                    <div>{nav.name}</div>
                                </NavLink>
                            );
                        })}
                    </div>
                </Container>
            </div>
        </div>
    );
};

DesktopView.propTypes = {
    NAV_PAGES: PropTypes.array,
};
export default DesktopView;

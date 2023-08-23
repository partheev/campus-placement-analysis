import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navbar.module.css';
import { Container } from '@mui/material';
const DesktopView = ({ NAV_PAGES }) => {
    return (
        <div>
            <div
                style={{
                    height: '10vh',
                    maxHeight: '5rem',
                    //    backgroundColor: 'hsla(0, 100%, 100%, 0.9)',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'sticky',

                    top: 0,
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
                                    key={idx}
                                    to={nav.path}
                                    className={styles.item}
                                    style={({ isActive }) =>
                                        isActive
                                            ? {
                                                  textDecoration: 'none',
                                                  '--_i': '100%',
                                                  color: '#443c68',
                                              }
                                            : { textDecoration: 'none' }
                                    }
                                >
                                    {nav.name}
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

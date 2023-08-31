import { Container } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navbar.module.css';
import { PAGE_PATHS } from '../../constants/PagePaths';

const DesktopView = ({ NAV_PAGES }) => {
    const navigate = useNavigate();
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
                        alignItems: 'center',
                        display: 'flex',
                    }}
                    maxWidth='lg'
                >
                    <div
                        onClick={() => {
                            navigate(PAGE_PATHS.INSIGHTS);
                        }}
                        style={{
                            display: 'flex',
                            padding: '0.5rem 0',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            style={{
                                width: '4rem',
                            }}
                            src='/assets/images/logo.png'
                        />
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

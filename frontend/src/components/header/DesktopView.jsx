import styles from './navbar.module.css';
import { Container } from '@mui/material';
const DesktopView = () => {
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
                        <div className={styles.item}>Insights</div>
                        <div className={styles.item}>Campus analysis</div>
                        <div className={styles.item}>Placement prediction</div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default DesktopView;

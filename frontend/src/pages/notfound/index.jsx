import { Link } from 'react-router-dom';
import styles from './notfound.module.css';
import { PAGE_PATHS } from '../../constants/PagePaths';
export const PageNotFound = () => {
    return (
        <>
            <div className={styles.notfoundcon}>
                <div className={styles.notfound}>
                    <div className={styles.notfound404}>
                        <h1>:(</h1>
                    </div>
                    <h2>404 - Page not found</h2>
                    <p>
                        The page you are looking for might have been removed had
                        its name changed or is temporarily unavailable.
                    </p>
                    <Link to={PAGE_PATHS.INSIGHTS}>home page</Link>
                </div>
            </div>
        </>
    );
};

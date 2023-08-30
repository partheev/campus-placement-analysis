import { useState } from 'react';
import { Overview } from './Overview';
import { Analysis } from './analysis';

const Campus = () => {
    const [campusStats, setcampusStats] = useState(null);

    return (
        <>
            {campusStats ? (
                <Analysis
                    campusStats={campusStats}
                    onBack={() => setcampusStats(null)}
                />
            ) : (
                <Overview setcampusStats={setcampusStats} />
            )}
        </>
    );
};

export default Campus;

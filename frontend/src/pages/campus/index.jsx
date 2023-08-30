import { useState } from 'react';
import { Overview } from './Overview';
import { Analysis } from './analysis';

const Campus = () => {
    const [campusStats, setcampusStats] = useState(null);
    console.log(campusStats);
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

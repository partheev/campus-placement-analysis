import { useState } from 'react';
import { Overview } from './Overview';
import { Analysis } from './analysis';

const Campus = () => {
    const [campusStats, setcampusStats] = useState(null);
    const [downloadURL, setdownloadURL] = useState(null);

    return (
        <>
            {campusStats ? (
                <Analysis
                    campusStats={campusStats}
                    downloadURL={downloadURL}
                    onBack={() => setcampusStats(null)}
                />
            ) : (
                <Overview
                    setcampusStats={setcampusStats}
                    setdownloadURL={setdownloadURL}
                />
            )}
        </>
    );
};

export default Campus;
